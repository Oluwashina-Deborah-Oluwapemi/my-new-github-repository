<template>
    <nav>
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">Previous</a>
        </li>
        <li class="page-item" v-for="page in pages" :key="page" :class="{ active: currentPage === page }">
          <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">Next</a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Pagination',
    props: {
      totalPages: {
        type: Number,
        required: true,
      },
      currentPage: {
        type: Number,
        required: true,
      },
    },
    computed: {
      pages() {
        const pages = [];
  
        for (let i = 1; i <= this.totalPages; i++) {
          pages.push(i);
        }
  
        return pages;
      },
    },
    methods: {
      changePage(page) {
        if (page < 1 || page > this.totalPages) {
          return;
        }
  
        this.$emit('page-changed', page);
      },
    },
  };
  </script>