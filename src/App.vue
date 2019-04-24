<template>
  <div id="app">
    <div id="header_wrapper">
      <header>
        <h1 class="site-title"><router-link to="/">DQXさいほう支援ツール</router-link></h1>
      </header>
      <navbar/>
    </div>
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
  display: flex;
}
#header_wrapper {
  width: 300px;
}
</style>
