import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import CreateArticle from '../views/CreateArticle.vue';
import EditArticle from '../views/EditArticle.vue';
import AllArticles from '../views/AllArticles.vue';


const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView,
  },
  {
    path: '/create-article',
    name: 'CreateArticle',
    component: CreateArticle,
    meta: { requiresAuth: true } // Перевірка автентифікації
  },
  {
    path: '/edit-article/:id', // Використовуйте динамічні маршрути для редагування
    name: 'editArticle',
    component: EditArticle,
    meta: { requiresAuth: true } // Перевірка автентифікації
  },  
  {
    path: '/all-articles', 
    name: 'AllArticles',
    component: AllArticles,
  },
  


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
