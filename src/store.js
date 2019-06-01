import Vue from 'vue'
import Vuex from 'vuex'
import { BASE_URL } from "./axios/axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    prices: []
  },
  getters: {
    prices(state) {
      return state.prices
    }
  },
  mutations: {
    savePrices(state, payload) {
      state.prices = payload
    }

  },
  actions: {
    async getPrices(context) {
      const response = await BASE_URL.get('/prices')
      context.commit('savePrices', response.data)
    }
  }
})
