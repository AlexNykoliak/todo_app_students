import { createRouter, createWebHistory } from 'vue-router';
import TaskList from '../components/TaskList.vue'; // Make sure this component exists
// Import other components as necessary

const routes = [
  { path: '/', component: TaskList }, // Use TaskList or another component
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
