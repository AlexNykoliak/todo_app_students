<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Username">
        <input type="password" v-model="password" placeholder="Password">
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserLogin',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
      }
    }
  };
  </script>
  