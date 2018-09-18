<template>
    <div class="content">
        <br>
        <h3>Chuck Norris Facts</h3>
        <br>
        <p>{{joke}}</p>
        <br>
                
        <form @submit.prevent>
            <div class="form-group">
                <label for="jokeCategorySelect">Joke Category Select</label>
                <select class="form-control" id="jokeCategorySelect" v-model="selectedCategory">
                    <option v-for="(category, index) in categories" :key="index">{{category}}</option>
                </select>
            </div>
            <button  type="button" class="btn btn-success" 
                @click="getNewJoke(selectedCategory)">Get new joke
            </button>
        </form>

        <br><br>

    </div>
</template>

<script>
import store from './../store'

export default {
    data() {
        return {
            selectedCategory: '',
        }
    },
    methods: {
        getNewJoke(selectedCategory) {
            this.$store.dispatch('fetchRandomJoke', selectedCategory)
        },
        getJokeCategories() {
            this.$store.dispatch('fetchJokeCategories')
        }
    },
    computed: {
        joke: function() {
            return this.$store.state.joke.value
        },
        categories: function() {
            return this.$store.state.categories
        }
    },
    created() {
        // this.getNewJoke()
        this.getJokeCategories()
    },
    beforeRouteEnter (to, from, next) {
        store.dispatch('fetchRandomJoke')
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
/* testing commits 1 */
/* testing commits 2 */
</style>




