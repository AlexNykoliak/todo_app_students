<template>
  <b-card>
    <b-form @submit.prevent="addTask">
      <b-form-group label="New Task">
        <b-form-input v-model="newTaskCaption" placeholder="Enter a task"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Add Task</b-button>
    </b-form>
  </b-card>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newTaskCaption: ''
    };
  },
  methods: {
    addTask() {
      if (this.newTaskCaption.trim()) {
        axios.post('http://localhost:8000/api/tasks/', { caption: this.newTaskCaption })
          .then(() => {
            this.newTaskCaption = '';
                        this.$emit('task-added');
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }
};
</script>

           
