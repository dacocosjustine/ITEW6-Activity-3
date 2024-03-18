<template>
  <nav>
    <router-link to="/login">Login</router-link> |
    <router-link to="/browse">Browse</router-link>
  </nav>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  color: white;
}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #2c3e50;
  background-color: #42b983;
  border-radius: 10px;
  padding: 10px;
}
</style>