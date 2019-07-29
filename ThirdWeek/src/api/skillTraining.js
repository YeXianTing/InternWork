import request from '@/utils/request'
import { apiUrl } from '@/utils/baseUrl'

/**
 * 分页查看技能训练试卷列表
 * @param {*} pageInfo
 * @param {*} data
 */
export function getskillTrainingList(pageInfo, data) {
  data.type = 2
  return request({
    url: `/testPapers/skillTraining/list`,
    method: 'post',
    data: data,
    params: {
        pageNum: pageInfo.pageNum,
        pageSize: pageInfo.pageSize
    },
    headers: {
        'X-URL-CONTEXT': apiUrl.omp
      }
  })
}

/**
 * 难易程度列表
 */
export function getDifficultyDegrees() {
  return request({
    url: `/difficultyDegrees`,
    method: 'get',
    headers: {
        'X-URL-CONTEXT': apiUrl.omp
      }
  })
}

/**
 * 班级下的我的所有学生
 * @param {班级id} id
 */
export function getClassStudent(id) {
  return request({
    url: `/common/my/student/${id}/list`,
    method: 'get',
    headers: {
        'X-URL-CONTEXT': apiUrl.itp
      }
  })
}

/**
 * 技能训练课程备课
 * @param {*} data
 */
export function prepareSkillTrainingCourse(data) {
  return request({
    url: `/skilltraining/course/prepare`,
    method: 'post',
    data: data,
    headers: {
        'X-URL-CONTEXT': apiUrl.itp
      }
  })
}

/**
 * 查询技能训练试卷详情
 * @param {*} id
 */
export function getSkillTrainingDetail(id) {
  return request({
    url: `/testPapers/skillTraining/${id}/detail`,
    method: 'get',
    headers: {
        'X-URL-CONTEXT': apiUrl.omp
      }
  })
}

/**
 * 分页查看技能训练发布列表
 * @param {*} pageInfo
 * @param {*} data
 */
export function getIssueSkillTrainingList(pageInfo, data) {
  data.type = 6 // 0-组合资源 1-理论资源	2-实验资源	3-实训资源	4-测评资源	5-练习	6-技能训练
  return request({
    url: `/skilltraining/list`,
    method: 'post',
    data: data,
    params: {
        pageNum: pageInfo.pageNum,
        pageSize: pageInfo.pageSize
    },
    headers: {
        'X-URL-CONTEXT': apiUrl.itp
      }
  })
}

export function editIssueSkillTrainingList(id, data) {
  return request({
    url: `/skilltraining/${id}`,
    method: 'put',
    data: data,
    headers: {
        'X-URL-CONTEXT': apiUrl.itp
      }
  })
}

/**
 * 根据项目案例题ID列表查询项目案例题总分
 */
export function getProjectCaseScore(idList) {
  return request({
    url: `/testPapers/skillTraining/ProjectCaseScore`,
    method: 'post',
    data: idList,
    headers: {
      'X-URL-CONTEXT': apiUrl.omp
    }
  })
}

/**
 * 新增分组信息
 * @param {*} id
 * @param {*} data
 */
export function addCourseGroup(id, data) {
  return request({
    url: `/courseGroup/${id}/info`,
    method: 'post',
    data: data,
    headers: {
      'X-URL-CONTEXT': apiUrl.itp
    }
  })
}

