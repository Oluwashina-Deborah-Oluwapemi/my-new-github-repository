<template>
<div class="pag">
        <li class="page-item button" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">Previous</a>
        </li>
 
        <li class="page-item button" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">Next</a>
        </li>
    </div>
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
  <style>
  li{
    list-style: none;
  }
  .pag{
        display: flex;
        justify-content: space-between;
    }

  .pagination{
    display: flex;
        justify-content: space-between;

  }
    .button{
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 50px;
        padding-right: 50px;
        background-color: #8A81EF;
        color: white;
        border-radius: 0.5rem;
        border: 0;
        margin: 20px;

    }
</style>