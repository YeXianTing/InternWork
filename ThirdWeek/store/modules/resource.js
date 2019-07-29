const resource = {
  state: {
    selEvalutionResource: [],
    selBaseResource: [],
    selectCourseList: [] // 课件发布
  },
  mutations: {
    SEL_EVALUTION_RESOURCE: (state, selEvalutionResource) => {
      state.selEvalutionResource = selEvalutionResource
    },
    SEL_BASE_RESOURCE: (state, selBaseResource) => {
      state.selBaseResource = selBaseResource
    },
    RESET_RESOURCE: (state) => {
      state.selEvalutionResource = []
      state.selBaseResource = []
    },
    SET_SELECT_COURSE_LIST: (state, selectCourseList) => {
      state.selectCourseList = selectCourseList
    }

  }
}

export default resource
