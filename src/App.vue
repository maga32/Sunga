<template>
  <nav class="sticky-top bg-white">
    <router-link to="/">Home</router-link>&nbsp;&nbsp;|&nbsp;
    <router-link to="/project">Project</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: omyu_pretty;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
