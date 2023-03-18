<template>
    <div>
      <h2>{{ repo.name }}</h2>
      <p>{{ repo.description }}</p>
      <p><strong>Language:</strong> {{ repo.language }}</p>
      <p><strong>Stars:</strong> {{ repo.stargazers_count }}</p>
      <p><strong>Created:</strong> {{ repo.created_at }}</p>
      <p><strong>Last updated:</strong> {{ repo.updated_at }}</p>
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
h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  line-height: 1.5;
  margin-bottom: 0.5rem;
}

strong {
  margin-right: 0.5rem;
}

a {
  color: #333;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>