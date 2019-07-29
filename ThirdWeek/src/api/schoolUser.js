import request from '@/utils/request'
import { apiUrl } from '@/utils/baseUrl'

/**
 * 新增学校用户信息-0.8版本接口(添加学生)
 * @param {*} data
 */
export function add(data) {
  return request({
    url: '/studentMgr/student',
    method: 'post',
    data: data,
    headers: {
      'X-URL-CONTEXT': apiUrl.itp
    }
  })
}

/**
 * 编辑学校用户信息-0.8版本接口(编辑学生)
 * @param {学校用户id} id
 * @param {*} model
 */
export function edit(id, model) {
  return request({
    url: `/studentMgr/student/${id}`,
    method: 'put',
    data: model,
    headers: {
      'X-URL-CONTEXT': apiUrl.itp
    }
  })
}

/**
 * 新增学校用户信息
 * @param {*} data
 */
export function addTeacher(data) {
  return request({
    url: '/schooluser',
    method: 'post',
    data: data,
    headers: {
      'X-URL-CONTEXT': apiUrl.omp
    }
  })
}

/**
 * 编辑学校用户信息
 * @param {*} id
 * @param {*} model
 */
export function editTeacher(id, model) {
  return request({
    url: `/schooluser/${id}`,
    method: 'put',
    data: model,
    headers: {
      'X-URL-CONTEXT': apiUrl.omp
    }
  })
}

/**
 * 分页查询学校用户数据（学生，老师，管理员）列表
 * @param {*} model
 * @param {*} pageInfo
 * @param {1-学生 2-教师} type
 */
export function list(model, pageInfo, type = 0) {
  return request({
    url: `/schooluser/${type}/list`,
    method: 'post',
    params: {
      pageNum: pageInfo.pageNum,
      pageSize: pageInfo.pageSize
    },
    data: model,
    headers: {
      'X-URL-CONTEXT': apiUrl.omp
    }
  })
}

/**
 * 分页查询本院学生数据
 * @param {*} model
 * @param {*} pageInfo
 */
export function collegeStudentList(model, pageInfo) {
  return request({
    url: `/studentMgr/list`,
    method: 'post',
    params: {
      pageNum: pageInfo.pageNum,
      pageSize: pageInfo.pageSize
    },
    data: model,
    headers: {
      'X-URL-CONTEXT': apiUrl.itp
    }
  })
}

/**
 * 分页查询我的学生数据
 * @param {*} model
 * @param {*} pageInfo
 */
export function myStudentList(model, pageInfo) {
  return request({
    url: `/studentMgr/my/list`,
    method: 'post',
    params: {
      pageNum: pageInfo.pageNum,
      pageSize: pageInfo.pageSize
    },
    data: model,
    headers: {
      'X-URL-CONTEXT': apiUrl.itp
    }
  })
}

/**
 * 添加为我的学生接口
 * @param {*} model
 */
export function addToMyStudent(model) {
  return request({
    url: `/studentMgr`,
    method: 'post',
    data: model,
    headers: {
      'X-URL-CONTEXT': apiUrl.itp
    }
  })
}

/**
 * 删除预处理,1-可以删除，提示确定删除学生 0-不可删除，提示当前学生正在上课
 * @param {*} id
 */
export function beforeDeleteMyStudent(id) {
  return request({
    url: `/studentMgr/pretreatment/my/${id}`,
    method: 'delete',
    headers: {
      'X-URL-CONTEXT': apiUrl.itp
    }
  })
}

/**
 * 删除我的学生
 * @param {*} model
 */
export function deleteMyStudent(id) {
  return request({
    url: `/studentMgr/my/${id}`,
    method: 'delete',
    headers: {
      'X-URL-CONTEXT': apiUrl.itp
    }
  })
}

/**
 * 删除本院学生
 * @param {*} ids
 */
export function deleteCollegeStudent(ids) {
  return request({
    url: '/studentMgr',
    method: 'delete',
    data: ids,
    headers: {
      'X-URL-CONTEXT': apiUrl.itp
    }
  })
}

/**
 * 获取学校用户信息
 * @param {用户id} id
 */
export function detail(id) {
  return request({
    url: `/schooluser/${id}`,
    method: 'get',
    headers: {
      'X-URL-CONTEXT': apiUrl.omp
    }
  })
}

/**
 * 批量导入机构用户
 * @param {type-1学生，type-2教师} type
 * @param {*} file
 */
export function batchInsert(type, file) {
  return request({
    url: `/schooluser/${type}/batch`,
    method: 'post',
    data: {
      file: file
    },
    headers: {
      'Content-Type': 'multipart/form-data',
      'X-URL-CONTEXT': apiUrl.omp
    },
    transformRequest: [(data) => {
      let ret = ''
      let a = 0
      const formData = new FormData()
      for (const it in data) {
        if (typeof (data[it]) === 'object') {
          a += 1
        }
        formData.append(it, data[it])
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      if (a > 0) {
        return formData
      } else {
        return ret
      }
    }]
  })
}
