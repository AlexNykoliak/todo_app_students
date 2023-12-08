<template>
    <div>
      <h2>Tasks</h2>
      <ul>
        <li v-for="task in tasks" :key="task.id">{{ task.caption }}: {{ task.body }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        tasks: []
      };
    },
    mounted() {
      this.fetchTasks();
    },
    methods: {
      async fetchTasks() {
        try {
          const response = await axios.get('http://localhost:8000/api/tasks/');
          this.tasks = response.data;
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>
  