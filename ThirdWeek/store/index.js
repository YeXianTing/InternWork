import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import getters from './getters'
import resource from './modules/resource'
import papers from './modules/papers'
import step from './modules/step'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    resource,
    papers,
    step
  },
  getters
})

export default store
