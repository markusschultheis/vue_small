<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about/John">About</router-link>
    </nav>

    <router-view />

  </div>
</template>

<script>

  import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
      HelloWorld
  }

}
</script>

<style>

  body {
    background-color: #EEEEEE;
    font-family: 'Monserrat', sans-serif;
    display: grid;
    grid-template-rows: auto;
    justify-items: center;
  }

  body, html {
    margin: 0;
    height: 100%;
  }


  nav{
    padding: 20px 20px 20px 0;
  }

  nav a {
    padding: 10px;
    text-decoration: none;
    background: #fff;
    border-radius: 3px;
    color: rgb(0,110,255);
    font-weight: bold;
    margin-right: 15px;
  }
</style>
