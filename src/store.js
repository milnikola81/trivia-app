import Vue from 'vue'
import Vuex from 'vuex'
import ChuckService from './services/ChuckService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    joke: {}
  },
  mutations: {
    setJoke(state) {
      ChuckService.getRandomJoke().then(function (response) {
        console.log(response.data)
        //state.joke = response.data
      }).catch(function (err) {
        //console.log('error in promise')
      });  
    }
  },
  actions: {

  }
})
