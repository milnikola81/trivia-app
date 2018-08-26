<template>
    <div>
        <h3>Chuck component</h3>
        <p>{{joke}}</p>
        <p style="color: red">Random question:</p>
        <p>{{question}}</p>
        
        <form @submit.prevent>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Example select</label>
                <select class="form-control" id="exampleFormControlSelect1" v-model="selectedCategory">
                    <option v-for="(category, index) in categories" :key="index">{{category}}</option>
                </select>
            </div>
            <button @click="getNewJoke(selectedCategory)">Get new joke</button>
        </form>

    </div>
</template>

<script>
import { store } from './../store'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
    data() {
        return {
            selectedCategory: ''
        }
    },
    methods: {
        getNewJoke(selectedCategory) {
            this.$store.dispatch('fetchRandomJoke', selectedCategory)
        },
        getJokeCategories() {
            this.$store.dispatch('fetchJokeCategories')
        },
        getRandomTrivia() {
            this.$store.dispatch('fetchRandomTrivia')
        }
    },
    computed: {
        joke: function() {
            return this.$store.state.joke.value
        },
        categories: function() {
            return this.$store.state.categories
        },
        question: function() {
            return this.$store.state.trivia[3].question
        }
    },
    created() {
        this.getNewJoke()
        this.getJokeCategories()
        this.getRandomTrivia()
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

