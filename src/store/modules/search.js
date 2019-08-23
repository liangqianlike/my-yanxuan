import {reqSearchComplete} from '../../api/index'

import {RECEIVE_KEY_WORD} from '../mutation-type'


const state = {
  searchKeyWord: []
}

const mutations = {
  [RECEIVE_KEY_WORD](state, {searchKeyWord}){
    state.searchKeyWord = searchKeyWord
  }

}

const actions = {
  async getSearchKeyWord({commit}){
    const result = await reqSearchComplete()
    const searchKeyWord = result.data
    if(result.code === 0){
      commit(RECEIVE_KEY_WORD, {searchKeyWord})
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