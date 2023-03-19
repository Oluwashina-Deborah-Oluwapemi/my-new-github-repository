<template>
  <div class="main">
  <div class="repo_container">
    <nav>
 
        <li><router-link to="/">Home</router-link></li>
    </nav>
    <router-view></router-view>
  </div>
  </div>
</template>


<script>

export default {
  name: 'App',
};
</script>

<style>
    nav{
        background-color: #8A81EF;
        height: 15%;
        border-radius: 0.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    }
    nav li{
        list-style: none;
        padding: 0;
        color:white;

    }

    .repo_container{
        background-color: white;
        width: 22rem;
        height: 30rem;
        border-radius: 1rem;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    body{
      background-color: #F8F9FF;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }
    .main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 90vh;
        width: 5rem;
        background-color: #FFD9B8;
    }

  .repo__container{
        background-color: white;
        width: 22rem;
        height: 30rem;
        border-radius: 1rem;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

</style>
