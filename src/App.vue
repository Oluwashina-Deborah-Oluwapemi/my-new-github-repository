<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>


<script>

export default {
  name: 'App',
};
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

nav {
  padding: 1rem;
  background-color: grey;
}

nav a {
  color: white;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
}
nav a:hover {
  color: black;
  background: white;
}
main {
  flex-grow: 1;
  padding: 1rem;
}
</style>
