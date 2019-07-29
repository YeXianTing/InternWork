import { login, getInfo, logout } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { menuList } from '@/api/user'
import { constantRouterMap } from '@/router'
// import { recursionArray } from '@/utils/initTree'

const user = {
  state: {
    token: getToken(),
    username: '',
    avatar: '',
    userId: 0,
    roles: [],
    type: sessionStorage.getItem('userType') ? parseInt(sessionStorage.getItem('userType')) : 2, // 1-代表学生菜单, 2-代表老师菜单
    menuState: 0,
    // menus: constantRouterMap,
    addMenus: [],
    loadRoutes: 0,
    status: 0, // 课程状态("0:未开始 1:进行中 2:已结束 3:已关闭")
    selectStudentList: [] // 本院学生 选中列表
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.username = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_USERTYPE: (state, value) => {
      sessionStorage.setItem('userType', value)
      state.type = value
    },
    SET_USERID: (state, value) => {
      state.userId = value
    },
    SET_USERMENUS: (state, menus) => {
      // state.menus = constantRouterMap.concat(menus)
      state.addMenus = menus
      state.menuState = 1
    },
    SET_MENUS: (state, menus) => {
      state.menus = menus
    },
    SET_MENUSTATE: (state, menuState) => {
      state.menuState = menuState
    },
    SET_LOADROUTES: (state, loadRoutes) => {
      state.loadRoutes = loadRoutes
    },
    SET_STATUS: (state, type) => {
      state.status = type
    },
    SET_SELECT_STUDENT_LIST: (state, selectStudentList) => {
      state.selectStudentList = selectStudentList
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      if (username === '') {
        return false
      }
      return new Promise((resolve, reject) => {
        const USERINFO = {
          account: userInfo.username,
          password: userInfo.password
          // type: userInfo.type
        }
        login(USERINFO).then(response => {
          const data = response.data
          if (data) {
            setToken(data.token)
            commit('SET_TOKEN', data.token)
            commit('SET_USERTYPE', parseInt(data.type))
          }
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo().then(response => {
          const data = response.data
          commit('SET_NAME', data.account)
          commit('SET_AVATAR', data.account)
          commit('SET_USERID', data.id)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },

    // 获取用户菜单
    GetMenu({ commit, state }) {
      return new Promise(resolve => {
        menuList(state.type).then(response => {
          const data = response.data
          if (data) {
            sessionStorage.setItem('menuAll', JSON.stringify(data))
            const menu = data.map(item => {
              return recursionArray(item)
            })
            commit('SET_USERMENUS', menu)
            resolve()
          } else {
            commit('SET_USERMENUS', [])
            resolve()
          }
        }).catch(() => {})
      })
    }
  }
}

export default user
