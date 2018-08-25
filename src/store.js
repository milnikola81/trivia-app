import Vue from 'vue'
import Vuex from 'vuex'
import ChuckService from './services/ChuckService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    joke: {},
    categories: []
  },
  mutations:{
    setJoke(state, joke){
        state.joke = joke
    },
    setCategories(state, categories) {
        state.categories = categories
    }
  },
  actions:{
      fetchRandomJoke(context, category){
          ChuckService.getRandomJoke(category).then((joke)=>{
              context.commit('setJoke', joke)
          })
      },
      fetchJokeCategories(context) {
        ChuckService.getJokeCategories().then((response) => {
            context.commit('setCategories', response)
        })
      }
  },
  getters:{
      getJoke(state){
          return state.joke
      },
      getJokeCategories(state) {
          return state.categories
      }
  }
})

