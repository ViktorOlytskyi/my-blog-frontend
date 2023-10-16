<template>
    <div>
      <h2>Редагування статті</h2>
      <form @submit.prevent="editArticle">
        <input v-model="title" type="text" placeholder="Назва статті">
        <textarea v-model="content" placeholder="Зміст статті"></textarea>
        <input v-model="category" type="text" placeholder="Категорія">
        <button type="submit">Зберегти зміни</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        content: '',
        category: '',
        article: {},
      };
    },
    created() {
      
      const articleId = this.$route.params.id; 
      this.$axios
        .get(`/articles/${articleId}`) 
        .then((response) => {
          this.article = response.data;
        })
        .catch((error) => {
          console.error('Помилка завантаження статті для редагування:', error);
        });
    },
    methods: {
      editArticle() {
        const articleData = {
          title: this.title,
          content: this.content,
          category: this.category,
        };
  
        this.$axios
          .put(`/articles/${this.article.id}`, articleData) 
          .then(() => {
            this.$router.push('all-articles'); 
          })
          .catch((error) => {
            console.error('Помилка редагування статті:', error);
          });
      },
    },
  };
  </script>
  