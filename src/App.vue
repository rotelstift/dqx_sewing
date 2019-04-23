<template>
  <div id="app">
    <header>
      <h1 class="site-title"><router-link to="/">DQXさいほう支援ツール</router-link></h1>
    </header>
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/parts/NavBar'
export default {
  name: 'App',
  components: {
    navbar: NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
