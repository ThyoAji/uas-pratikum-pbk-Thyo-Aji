import { createRouter, createWebHistory } from 'vue-router';
import Widget from '../components/Widget.vue';
import Tugas from '../components/Tugas.vue';

const routes = [
  {
    path: '/',
    redirect: '/page1'
  },
  {
    path: '/page1',
    name: 'weather',
    component: Widget
  },
  {
    path: '/page2',
    name: 'tugas',
    component: Tugas
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
