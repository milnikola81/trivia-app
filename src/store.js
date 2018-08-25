import Vue from 'vue'
import Vuex from 'vuex'
import ChuckService from './services/ChuckService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    joke: {}
  },
  mutations:{
    setJoke(state,joke){
        state.joke = joke
    }
  },
  actions:{
      fetchRandomJoke(context){
          ChuckService.getRandomJoke().then((joke)=>{
              context.commit('setJoke', joke)
          })
      }
  },
  getters:{
      getJoke(state){
          return state.joke
      }
  }
})

