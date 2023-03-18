<template>
    <div>
      <h2>All Repositories</h2>
      <ul>
        <li v-for="repo in displayedRepos" :key="repo.id">
                  <router-link :to="{ name: 'RepoDetails', params: { name: repo.name } }">
            {{ repo.name }}
          </router-link>
        </li>
      </ul>
    <Pagination :total-pages="totalPages" :current-page="currentPage" @page-changed="changePage" />
    </div>
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
        perPage: 3,
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
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

.pagination button {
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.pagination button:hover {
  background-color: #555;
}

.pagination span {
  margin: 0 1rem;
  font-weight: bold;
}
</style>