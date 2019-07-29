import request from '@/utils/request'

// 根据用户获取菜单
export function menuList(type) {
  return request({
    url: `/user/menus/${type}`,
    method: 'get'
  })
}

// 根据Id获取用户信息
export function detail(id) {
  return request({
    url: `/user/${id}`,
    method: 'get'
  })
}

// 编辑用户
export function edit(model) {
  return request({
    url: `/user/${model.id}`,
    method: 'put',
    data: {
      'user': model
    }
  })
}

// 修改密码
export function setPwd(model) {
  return request({
    url: '/user/pwd',
    method: 'post',
    data: model
  })
}

// 获取学校用户信息
export function schoolUserInfo(id) {
  return request({
    url: `/schooluser/${id}`,
    method: 'get'
  })
}

// 禁用账号、启动账号接口
export function banOrOpen(id, status) {
  return request({
    url: '/user/status/' + id + '/' + status,
    method: 'put'
  })
}

// 批量删除用户
export function batchDel(ids) {
  return request({
    url: '/user/ids',
    method: 'delete',
    data: ids
  })
}

// 编辑用户角色
export function editRole(model) {
  return request({
    url: `/user/${model.user.id}`,
    method: 'put',
    data: model
  })
}

// 重置密码
export function resetPwd(id) {
  return request({
    url: '/user/pwd/' + id,
    method: 'put'
  })
}
