import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/UserLogin.vue';
import TaskList from '../components/TaskList.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: TaskList },
    { path: '/login', component: Login },
  ]
});
