import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    canvas: {},
    canvasCtx: ''
  },
  mutations: {
    SET_CANVAS (state, data) {
      Vue.set(state, 'canvas', data)
    },
    SET_CANVAS_CTX (state, data) {
      Vue.set(state, 'canvasCtx', data)
    }
  },
  actions: {
    setCanvas: ({ commit }, evt) => commit('SET_CANVAS', evt),
    setCanvasCtx: ({ commit }, evt) => commit('SET_CANVAS_CTX', evt)
  },
  modules: {
  }
})
