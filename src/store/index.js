import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'

// Vuexは、ルートコンポーネントに store オプションを指定することで すべての子コンポーネントにストアを "注入" する機構を提供している ->  Vue.use(Vuex) で有効化
Vue.use(Vuex)

const savedSections = localStorage.getItem('board-sections')

const store = new Vuex.Store({
  state: {
    sections: savedSections ? JSON.parse(savedSections): []
    // {
    //   title: 'Todo1',
    //   tasks: [ { content: 'recursion'}],
    // },
  },
  mutations: mutations,
  actions: actions
})

// subscribeはストアのインスタンスメソッドで、全てのmutationの後に呼ばれます
// 第一引数にmutationインスタンス、第二引数にmutation後のデータの状態を受け取ります
store.subscribe((mutation, state) => {
  localStorage.setItem('board-sections', JSON.stringify(state.sections))
})

export default store