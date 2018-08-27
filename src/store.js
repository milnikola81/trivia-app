import Vue from 'vue'
import Vuex from 'vuex'
import ChuckService from './services/ChuckService'
import { trivia } from './services/TriviaService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    joke: {},
    categories: [],
    trivia: [],
    triviaCategories: [],
    filteredTrivias: []
  },
  mutations:{
    setJoke(state, joke){
        state.joke = joke
    },
    setCategories(state, categories) {
        state.categories = categories
    },
    setTrivia(state, trivia) {
        for (var i = 0; i < trivia.length; i++) {
            trivia[i].answerShown = false
            trivia[i].index = i + 1
        }
        state.trivia = trivia
        state.filteredTrivias = trivia
    },
    setTriviaCategories(state, triviaCategories) {
        state.triviaCategories = triviaCategories
    },
    setFilteredTrivia(state, value) {
        state.filteredTrivias = state.trivia.filter(trivia => 
        trivia.question.toLowerCase().match(value))
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
            context.commit('setTrivia', response.data)
        })
      },
      fetchTriviaCategories(context) {
        trivia.getCategories().then((response) => {
            context.commit('setTriviaCategories', response.data)
        })
      },
      fetchCategorizedTrivia(context, category_id) {
        trivia.getCategorizedTrivia(category_id).then((response) => {
            var trivias = response.data
            for (var i = 0; i < trivias.length; i++) {
                trivias[i].answerShown = false
                trivias[i].index = i + 1
            }
            context.commit('setTrivia', response.data)
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

