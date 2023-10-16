<template>
  <div>
    <h2>Реєстрація</h2>
    <form @submit.prevent="registerUser">
      <input v-model="username" type="text" placeholder="Ім'я користувача">
      <input v-model="password" type="password" placeholder="Пароль">
      <button type="submit">Зареєструватися</button>
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
    registerUser() {
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
        .post('/register', data, config)
        .then(response => {
          localStorage.setItem('token', response.data.access_token);
          this.$router.push('/login');
        })
        .catch(error => {
          alert('Помилка реєстрації: ' + error.response.data.message);
        });
    },
  },
};
</script>
