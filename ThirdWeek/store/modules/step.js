const Step = {
    state: {
      szIssue: {}, // 实战项目准备 --> 发布项目
      handPaper: {}, // 试卷设计 --> 手动组卷
      issuePaper: {}, // 试卷设计 -->试卷发布 --> 发布试卷
      selectClass: [], // 添加班级
      jnxlIsusue: {}// 技能训练发布
    },

    mutations: {
      SET_SZ_ISSUE: (state, szIssue) => {
        state.szIssue = szIssue
      },
      SET_HAND_PAPER: (state, handPaper) => {
        state.handPaper = handPaper
      },
      SET_ISSUE_PAPER: (state, issuePaper) => {
        state.issuePaper = issuePaper
      },
      SET_SELLECT_CLASS: (state, selectClass) => {
        state.selectClass = selectClass
      },
      SET_JNXL_ISSUE: (state, jnxlIsusue) => { //
        state.jnxlIsusue = jnxlIsusue
      },
      RESET_ALL_STEP: (state, pro) => {
          if (pro === 'szIssue') {
            state.szIssue = {}
          } else if (pro === 'handPaper') {
            state.handPaper = {}
          } else {
            state.issuePaper = {}
          }
      },
      RESET_JNXL_STEP: (state, jnxlIsusue) => { //
        state.jnxlIsusue = {}
      }
    }
  }

  export default Step

