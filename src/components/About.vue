<template>
    <div id="about">
        <h1>Hello {{ their_name }}, at About section</h1>
    </div>
</template>

<script>
    export default {
        name: "About",
        data(){
            return {
                their_name: this.$route.params.name
            }
        }
    }
</script>

<style scoped>

</style>