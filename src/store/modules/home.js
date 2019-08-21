//管理home功能模块相关状态数据的vuex模块
import {
  reqMockHome
} from '../../api/index'
import {
  RECEIVE_HOME_DATA
} from '../mutation-type'

const state = {
  homeData: []
}

const mutations = {
  [RECEIVE_HOME_DATA](state, {homeData}){
    state.homeData = homeData
  }
}

const actions = {
  async getHomeData ({commit}){
    const result = await reqMockHome()
    const homeData = result.data
    if(result.code === 0){
      commit(RECEIVE_HOME_DATA, {homeData})
    }
  }
}

const getters = {

}


export default {
  state,
  mutations,
  actions,
  getters
}
