import { createRouter, createWebHistory } from 'vue-router';
import PassGen from '../views/PassGen.vue';
import Home from '../views/Home.vue';
import ToDo from '../views/ToDoList.vue';

const routes = [
  {
    path: '/leqi',
    name: 'passgen',
    component: PassGen,
  },
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/abhishek',
    name: 'todo',
    component: ToDo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
