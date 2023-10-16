<template>
  <div id="app">
    <header>
      <h1>Мій Додаток</h1>
      <nav>
        <!-- Навігаційне меню (якщо потрібно) -->
      </nav>
    </header>
    <main>
      <!-- Вставляємо компоненти Vue в залежності від маршрута -->
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Стилі за вашим вибором */
</style>
