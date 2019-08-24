import {
  reqSearchComplete,
  reqHotSearch
} from '../../api/index'

import {
  RECEIVE_KEY_WORD,
  RECIVE_HOT_SEARCH
} from '../mutation-type'


const state = {
  searchKeyWord: [],
  hotSearchData: []
}

const mutations = {
  [RECEIVE_KEY_WORD](state, {searchKeyWord}){
    state.searchKeyWord = searchKeyWord
  },
  [RECIVE_HOT_SEARCH](state, {hotSearchData}){
    state.hotSearchData = hotSearchData
  }

}

const actions = {
  async getSearchKeyWord({commit}, keyWord){
    const result = await reqSearchComplete(keyWord)
    const searchKeyWord = result.data
    if(result.code === '200'){
      commit(RECEIVE_KEY_WORD, {searchKeyWord})
    }
  },
  async getHotSearch({commit}){
    const result = await reqHotSearch()
    const hotSearchData = result.data
    if(result.code === '200'){
      commit(RECIVE_HOT_SEARCH, {hotSearchData})
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