import axios from 'axios'
// importujem axios

export default class Trivia {
    constructor () {
      axios.defaults.baseURL = 'http://jservice.io/api/'
      // definisem default url na koji ce se nastavljati http requesti
    }

    getAll() {
        return axios.get('random?count=30')
    }
    getCategories() {
        return axios.get('categories?count=10')
    }
    getCategorizedTrivia(id) {
        return axios.get(`clues?category=${id}`)
    }
}

export const trivia = new Trivia ()