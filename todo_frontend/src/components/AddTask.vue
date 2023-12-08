<template>
    <div>
      <h2>Add Task</h2>
      <form @submit.prevent="addTask">
        <input type="text" v-model="caption" placeholder="Caption">
        <textarea v-model="body" placeholder="Body"></textarea>
        <button type="submit">Add Task</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        caption: '',
        body: ''
      };
    },
    methods: {
      async addTask() {
        try {
          const response = await axios.post('http://localhost:8000/api/tasks/', {
            caption: this.caption,
            body: this.body
          });
          this.caption = '';
          this.body = '';
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>
  