import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import About from '../views/FavoriteCatView.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: About,
  }, 
    // 404
    {
      path: '/:catchall(.*)',
      name: 'NotFound',
      component: NotFound,
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
