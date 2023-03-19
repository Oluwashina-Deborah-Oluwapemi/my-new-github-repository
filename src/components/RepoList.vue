<template>
    <div>
      <ul>
        <li class="li" v-for="repo in displayedRepos" :key="repo.id">
                  <router-link :to="{ name: 'RepoDetails', params: { name: repo.name } }">
            {{ repo.name }}
          </router-link>
        </li>
      </ul>
    </div>

    <Pagination :total-pages="totalPages" :current-page="currentPage" @page-changed="changePage" />
  </template>
  
  <script>
  import { getRepos } from '@/api';
  import Pagination from '@/components/Pagination.vue';
  
  export default {
    name: 'RepoList',
    components: {
      Pagination,
    },
    data() {
      return {
        repos: [],
        perPage: 5,
        currentPage: 1,
      };
    },
    computed: {
      displayedRepos() {
        const start = (this.currentPage - 1) * this.perPage;
        const end = start + this.perPage;
  
        return this.repos.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.repos.length / this.perPage);
      },
    },
    mounted() {
      getRepos()
        .then(response => {
          this.repos = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
   methods: {
      changePage(page) {
        this.currentPage = page;
      },
    },
  };
  </script>

<style>
   .li{
        list-style-image: url('../assets/icons8-lock-24.png');
        margin: 1.5rem;
      }
      .li :hover{
        text-decoration: none;
      }
    .li a{
        color: #333;
    }  


</style>
