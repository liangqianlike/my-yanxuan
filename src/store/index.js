import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import home from './modules/home'
import classify from './modules/classify'
import search from './modules/search'

Vue.use(Vuex)

export default new Vuex.Store({
  mutations,
  getters,
  modules: {
    home: home,
    classify: classify,
    search: search,
  }
})