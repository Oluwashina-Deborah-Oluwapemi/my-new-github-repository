<template>
    <div class="details">
      <h2>{{ repo.name }}</h2>
      <p>{{ repo.description }}</p>
      <p><strong>Language:</strong> {{ repo.language }}</p>
      <p><strong>Stars:</strong> {{ repo.stargazers_count }}</p>
      <p><strong>Created:</strong> {{ repo.created_at }}</p>
      <p><strong>Last updated:</strong> {{ repo.updated_at }}</p>
    </div>

    <div class="oi">

    </div>
  </template>
  
  <script>
  import { getRepoDetails } from '@/api';
  
  export default {
    name: 'RepoDetails',
    props: {
      name: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        repo: {},
      };
    },
    mounted() {
      getRepoDetails(this.name)
        .then(response => {
          this.repo = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
  };
  </script>

<style>
.details{
    display: flex;
    flex-direction: column;
    align-items: center;
}        
.oi{
    height: 5rem;
}
h2 {
  font-size: 2rem;
  margin-bottom: -0.4rem;
}

p {
  line-height: 1.5;
  margin-bottom: 0.5rem;
}

strong {
  margin-right: 0.5rem;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>