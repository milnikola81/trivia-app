<template>
    <div>
        <h3>Chuck component</h3>
        <p>{{joke}}</p>
                
        <form @submit.prevent>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Example select</label>
                <select class="form-control" id="exampleFormControlSelect1" v-model="selectedCategory">
                    <option v-for="(category, index) in categories" :key="index">{{category}}</option>
                </select>
            </div>
            <button @click="getNewJoke(selectedCategory)">Get new joke</button>
        </form>

        <br><br>

        <h1>Trivia</h1>

        <br>

        <div v-if="trivias" v-for="(trivia, index) in trivias" :key="index" style="text-align: left">
            <p style="color: red" @click="showAnswer(trivia)">{{trivia.index}}. {{trivia.question}}</p>
            <p v-if="trivia.answerShown" style="color: green">Answer: {{trivia.answer}}</p>
        </div>


    </div>
</template>

<script>
import { store } from './../store'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
    data() {
        return {
            selectedCategory: '',
        }
    },
    methods: {
        getNewJoke(selectedCategory) {
            this.$store.dispatch('fetchRandomJoke', selectedCategory)
            this.getRandomTrivia()
        },
        getJokeCategories() {
            this.$store.dispatch('fetchJokeCategories')
        },
        getRandomTrivia() {
            this.$store.dispatch('fetchRandomTrivia')
        },
        showAnswer(trivia) {
            let index = this.trivias.indexOf(trivia)
            this.trivias[index].answerShown = !this.trivias[index].answerShown
        }
    },
    computed: {
        joke: function() {
            return this.$store.state.joke.value
        },
        categories: function() {
            return this.$store.state.categories
        },
        trivias: function() {
            return this.$store.state.trivia
        }
    },
    created() {
        this.getNewJoke()
        this.getJokeCategories()
        // this.getRandomTrivia()
    },
    beforeRouteEnter(to, from, next) {
        // nacin 1
        // next(vm => {

        //     vm.$store.dispatch('fetchRandomJoke')
        // })

        // nacin 2
        // store.dispatch('fetchRandomJoke').then(()=>{
        //     next()
        // })

        // nacin 3
        // store.dispatch('fetchRandomJoke', next);
    }
}
</script>

<style scoped>

form {
    max-width: 30%;
    margin: 0 auto;
}
</style>

