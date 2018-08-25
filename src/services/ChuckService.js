import { createClient } from 'http';

const Chuck  = require('chucknorris-io'),
client = new Chuck();

export default {
    getRandomJoke(category){
       return client.getRandomJoke(category)
    },
    getJokeCategories() {
        return client.getJokeCategories()
    }
}
