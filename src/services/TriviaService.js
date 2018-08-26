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
}

export const trivia = new Trivia ()