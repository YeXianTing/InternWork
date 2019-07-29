import axios from 'axios'
import { Message } from 'element-ui'
import router from '../router'
import store from '../../store'
import { getToken, setToken } from '@/utils/auth'
import { getBaseUrl } from '@/utils/baseUrl'
// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css'// progress bar style

// 创建axios实例
const service = axios.create({

    baseURL: process.env.BASE_API, // api 的 base_url
    timeout: 50000, // 请求超时时间
    params: {},
})

// request拦截器
service.interceptors.request.use(
  config => {
    // debugger
    const NODE_ENV = getBaseUrl()
    if (config.headers['X-URL-CONTEXT']) {
      config.url = '/' + config.headers['X-URL-CONTEXT'] + config.url
    } else if (config.headers['X-URL-OTHER']) {
      config.url = config.url
    } else {
      config.url = NODE_ENV + config.url
    }
    if (store.getters.token) {
      config.headers['X-AUTH-TOKEN'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
  
    // config.params['X-TIME'] = new Date().getTime()
    return config
  },
  error => {
    // Do something with request error
    Promise.reject("error")
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (res.code !== '0000') {
      // session过期
      if (res.code === '401') {
        // NProgress.done()
        Message.error('请重新登录')
        setTimeout(() => {
          store.commit('SET_MENUSTATE', 0)
          sessionStorage.removeItem('menuAll')
          router.push('/login')
        }, 500)
      } else if (res.code === '413') {
        Message({
          message: '上传的文件过大，请重新上传',
          type: 'error',
          duration: 3 * 1000
        })
      } else if (res.code === '6003') {
        return response.data
      } else {
        Message({
          message: res.msg,
          type: 'error',
          duration: 3 * 1000
        })
      }
      return Promise.reject('error')
    } else {
      const token = response.headers['X-AUTH-TOKEN']
      if (token) {
        if (token !== getToken()) {
          setToken(token)
          store.commit('SET_TOKEN', token)
        }
      }
      return response.data
    }
  },
  error => {
    // window.loading(false)
    if (error.message.indexOf('Network Error') !== -1) {
			Message({
        message: '连接失败，请检查网络或者DNS设置',
        type: 'error',
        duration: 5 * 1000
      })
    } else {
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
    }
    return Promise.reject(error)
  }
)

export default service
