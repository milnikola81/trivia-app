<template>
    <div>
        <h3>Chuck component</h3>
        <p>{{joke}}</p>
                
        <form @submit.prevent>
            <div class="form-group">
                <label for="jokeCategorySelect">Joke Category Select</label>
                <select class="form-control" id="jokeCategorySelect" v-model="selectedCategory">
                    <option v-for="(category, index) in categories" :key="index">{{category}}</option>
                </select>
            </div>
            <button @click="getNewJoke(selectedCategory)">Get new joke</button>
        </form>

        <br><br>

        <!-- <h1>Trivia</h1>

        <br>

        <form @submit.prevent>
            <div class="form-group">
                <label for="triviaCategorySelect">Trivia Category Select</label>
                <select class="form-control" id="triviaCategorySelect" options="triviaCategories" v-model="selectedTriviaCategory">
                    <option v-for="(triviaCategory, index) in triviaCategories" :key="index" v-bind:value="{ triviaCategory }">{{triviaCategory.title}}</option>
                </select>
            </div>
            <button @click="getCategorizedTrivia(selectedTriviaCategory)">Get new trivia</button>
        </form>

        <br><br>

        <h5>Click on question to find out the answer</h5>

        <br><br>

        <div v-if="trivias" v-for="(trivia, index) in trivias" :key="index" style="text-align: left">
            <p class="question" style="color: red" @click="showAnswer(trivia)">{{trivia.index}}. {{trivia.question}}</p>
            <p v-if="trivia.answerShown" style="color: green">Answer: {{trivia.answer}}</p>
        </div> -->


    </div>
</template>

<script>
import { store } from './../store'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
    data() {
        return {
            selectedCategory: '',
            // selectedTriviaCategory: ''
        }
    },
    methods: {
        getNewJoke(selectedCategory) {
            this.$store.dispatch('fetchRandomJoke', selectedCategory)
        },
        getJokeCategories() {
            this.$store.dispatch('fetchJokeCategories')
        },
        // getRandomTrivia() {
        //     this.$store.dispatch('fetchRandomTrivia')
        // },
        // showAnswer(trivia) {
        //     let index = this.trivias.indexOf(trivia)
        //     this.trivias[index].answerShown = !this.trivias[index].answerShown
        // },
        // getTriviaCategories() {
        //     this.$store.dispatch('fetchTriviaCategories')
        // },
        // getCategorizedTrivia(selectedTriviaCategory) {
        //     if(selectedTriviaCategory.triviaCategory) {
        //         var id = selectedTriviaCategory.triviaCategory.id
        //         this.$store.dispatch('fetchCategorizedTrivia', id)
        //     }
        //     else {
        //         this.getRandomTrivia()
        //     }
        // }
    },
    computed: {
        joke: function() {
            return this.$store.state.joke.value
        },
        categories: function() {
            return this.$store.state.categories
        },
        // trivias: function() {
        //     return this.$store.state.trivia
        // },
        // triviaCategories: function() {
        //     return this.$store.state.triviaCategories
        // },
    },
    created() {
        this.getNewJoke()
        this.getJokeCategories()
        // this.getRandomTrivia()
        // this.getTriviaCategories()
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
.question:hover {
    cursor: pointer;
}
</style>

