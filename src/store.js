import Vue from 'vue'
import Vuex from 'vuex'
import ChuckService from './services/ChuckService'
import { trivia } from './services/TriviaService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    joke: {},
    categories: [],
    trivia: []
  },
  mutations:{
    setJoke(state, joke){
        state.joke = joke
    },
    setCategories(state, categories) {
        state.categories = categories
    },
    setTrivia(state, trivia) {
        state.trivia = trivia
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
      },
      fetchRandomTrivia(context) {
        trivia.getAll().then((response) => {
            var trivias = response.data
            // console.log(trivias)
            context.commit('setTrivia', trivias)
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

