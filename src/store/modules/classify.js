//管理home功能模块相关状态数据的vuex模块
import {
  reqMockClassify
} from '../../api/index'
import {
  RECEIVE_CLASSIFY_DATA
} from '../mutation-type'

const state = {
  classfiyData: []
}

const mutations = {
  [RECEIVE_CLASSIFY_DATA](state, {classifyData}){
    state.classifyData = classifyData
  }   
}

const actions = {
  async getClassifyData ({commit}){
    const result = await reqMockClassify()
    const classifyData = result.data
    if(result.code === 0){
      commit(RECEIVE_CLASSIFY_DATA, {classifyData})
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
