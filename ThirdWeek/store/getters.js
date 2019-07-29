const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  username: state => state.user.username,
  userId: state => state.user.userId,
  roles: state => state.user.roles,
  type: state => state.user.type,
  menus: state => state.user.menus,
  addMenus: state => state.user.addMenus,
  menuState: state => state.user.menuState,
  loadRoutes: state => state.user.loadRoutes,
  status: state => state.user.status,
  selectStudentList: state => state.user.selectStudentList,
  selEvalutionResource: state => state.resource.selEvalutionResource,
  selBaseResource: state => state.resource.selBaseResource,
  selectCourseList: state => state.resource.selectCourseList,
  reviewData: state => state.papers.reviewData,
  autoData: state => state.papers.autoData,
  handData: state => state.papers.handData,
  szIssue: state => state.step.szIssue,
  handPaper: state => state.step.handPaper,
  issuePaper: state => state.step.issuePaper,
  selectClass: state => state.step.selectClass,
  jnxlIsusue: state => state.step.jnxlIsusue
}
export default getters
