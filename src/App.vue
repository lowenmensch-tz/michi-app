<template>
  <header>
    <h1>Michi app</h1>
      <nav>
      <router-link to="/">Random</router-link> |
      <router-link to="/favorites">Favorites</router-link>
    </nav>
  </header> 
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #595959;
}


nav {
  padding: 10px;
}

nav a {
  font-weight: bold;
  color: #595959;
}

nav a.router-link-exact-active {
  color: #0D0D0D;
}
</style>
