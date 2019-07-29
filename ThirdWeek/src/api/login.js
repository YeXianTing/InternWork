import request from '@/utils/request'

export function login(userInfo) {
  return request({
    url: `/login`,
    method: 'post',
    data: userInfo,
    headers: {
      'X-URL-CONTEXT': 'omp'
    }
  })
}

export function getInfo() {
  return request({
    url: '/user',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'get'
  })
}
