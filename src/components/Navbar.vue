<template>
    <div>
        <nav class="navbar navbar-dark bg-info">
            <a class="navbar-brand" href="/">Trivia App</a>
            <router-link to="/trivia">Trivia</router-link>
            <router-link to="/chuck">Chuck Norris Facts</router-link>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" @input="searchTrivia">
                <button class="btn bg-light my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    </div>
</template>

<script>
import store from './../store'

export default {
    methods: {
        searchTrivia(event) {
            this.$store.commit('setFilteredTrivia', event.target.value)
        }
    }
}
</script>

<style scoped>
a {
  color: hsla(360, 100%, 100%, 0.8);
  text-decoration: none;
}
</style>


