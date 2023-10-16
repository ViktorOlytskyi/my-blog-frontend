<template>
  <div>
    <h2>Авторизація</h2>
    <form @submit.prevent="loginUser">
      <input v-model="username" type="text" placeholder="Ім'я користувача">
      <input v-model="password" type="password" placeholder="Пароль">
      <button type="submit">Увійти</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    loginUser() {
      const data = {
        username: this.username,
        password: this.password,
      };

      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        },
      };

      this.$axios
        .post('/login', data, config)
        .then(response => {
          localStorage.setItem('token', response.data.access_token);

          this.$router.push('/');
        })
        .catch(error => {
          alert('Помилка авторизації: ' + error.response.data.message);
        });
    },
  },
};
</script>
