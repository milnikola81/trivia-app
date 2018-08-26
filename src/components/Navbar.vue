<template>
    <div>
        <nav class="navbar navbar-dark bg-info">
            <a class="navbar-brand" href="/">Trivia App</a>
            <router-link to="/trivia">Trivia</router-link>
            <router-link to="/chuck">Chuck Norris Facts</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

a {
  color: hsla(360, 100%, 100%, 0.8);
  text-decoration: none;
}

</style>


