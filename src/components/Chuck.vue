<template>
    <div>
        <h3>Chuck component</h3>
        <p>{{joke}}</p>
    </div>
</template>

<script>
import { store } from './../store'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
    computed: {
        joke: function() {
            return this.$store.state.joke.value
        }
    },
    created() {
        this.$store.dispatch('fetchRandomJoke')
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

