<template>
    <div>
        <h3>chuck</h3>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.commit.setJoke()
    }
}
</script>

