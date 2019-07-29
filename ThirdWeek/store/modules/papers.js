const Papers = {
    state: {
      reviewData: [], // 预览试卷数据
      autoData: null, // 自动组卷数据
      handData: [] // 手动组卷数据
    },

    mutations: {
      SET_REVIEW_DATA: (state, reviewData) => {
        state.reviewData = reviewData
      },
      SET_AUTO_DATA: (state, autoData) => {
        state.autoData = autoData
      },
      SET_HAND_DATA: (state, handData) => {
        state.handData = handData
      },
      RESET_PAPERS_DATA: (state) => {
        state.reviewData = []
        state.autoData = null
        state.handData = []
      }
    }
  }

  export default Papers

