const Chuck  = require('chucknorris-io'),
client = new Chuck();

export default {
    getRandomJoke(){
       return client.getRandomJoke()
    }
}
