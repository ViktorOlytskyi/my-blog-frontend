<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h2>Створення статті</h2>
        <form @submit.prevent="createArticle">
          <div class="form-group">
            <label for="title">Назва статті:</label>
            <input type="text" class="form-control" id="title" v-model="title" required>
          </div>
          <div class="form-group">
            <label for="text">Текст статті:</label>
            <textarea class="form-control" id="text" v-model="content" required></textarea>
          </div>
          <div class="form-group">
            <label for="title">Категорія:</label>
            <input type="text" class="form-control" id="category" v-model="category" required>
          </div>
          <button type="submit" class="btn btn-primary">Створити статтю</button>
        </form>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        content: '',
        category: '',
      };
    },
    methods: {
      createArticle() {
        const articleData = {
          title: this.title,
          content: this.content,
          category: this.category,
        };

        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        };
        this.$axios
          .post('/articles', articleData, config) 
          .then(() => {

            this.$router.push('/all-articles'); 
          })
          .catch((error) => {

            console.error('Помилка створення статті:', error);
          });
      },
    },
  };
  </script>
  