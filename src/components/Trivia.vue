<template>
    <div class="content">
        <br>
        <h3>Trivia</h3>
        <br>

        <form @submit.prevent>
            <div class="form-group">
                <label for="triviaCategorySelect">Trivia Category Select</label>
                <select class="form-control" id="triviaCategorySelect" options="triviaCategories" v-model="selectedTriviaCategory">
                    <option v-for="(triviaCategory, index) in triviaCategories" :key="index" v-bind:value="{ triviaCategory }">{{triviaCategory.title}}</option>
                </select>
            </div>
            <button type="button" class="btn btn-success" 
                @click="getCategorizedTrivia(selectedTriviaCategory)">Get new trivia
            </button>
        </form>

        <br><br>

        <h5>Click on question to find out the answer</h5>

        <br><br>

        <div v-if="filteredTrivias" v-for="(trivia, index) in filteredTrivias" :key="index" style="text-align: left">
            <p class="question" style="color: #404040" @click="showAnswer(trivia)">{{trivia.index}}. {{trivia.question}}</p>
            <p v-if="trivia.answerShown" style="color: green">Answer: {{trivia.answer}}</p>
        </div>

    </div>
</template>

<script>
import store from './../store'

export default {
    data() {
        return {
            selectedTriviaCategory: ''
        }
    },
    methods: {
        getRandomTrivia() {
            this.$store.dispatch('fetchRandomTrivia')
        },
        showAnswer(trivia) {
            let index = this.trivias.indexOf(trivia)
            this.trivias[index].answerShown = !this.trivias[index].answerShown
        },
        getTriviaCategories() {
            this.$store.dispatch('fetchTriviaCategories')
        },
        getCategorizedTrivia(selectedTriviaCategory) {
            if(selectedTriviaCategory.triviaCategory) {
                var id = selectedTriviaCategory.triviaCategory.id
                this.$store.dispatch('fetchCategorizedTrivia', id)
            }
            else {
                this.getRandomTrivia()
            }
        }
    },
    computed: {
        trivias: function() {
            return this.$store.state.trivia
        },
        triviaCategories: function() {
            return this.$store.state.triviaCategories
        },
        filteredTrivias: function() {
            return this.$store.state.filteredTrivias
        }
    },
    created() {
        // this.getRandomTrivia()
        this.getTriviaCategories()
    },
    beforeRouteEnter (to, from, next) {
        store.dispatch('fetchRandomTrivia')
        .then(() => {
            next();
        });
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

