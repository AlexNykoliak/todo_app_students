<template>
  <b-list-group>
    <b-list-group-item v-for="task in tasks" :key="task.id">
      {{ task.caption }}
    </b-list-group-item>
  </b-list-group>
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
    fetchTasks() {
      axios.get('http://localhost:8000/api/tasks/')
        .then(response => {
          this.tasks = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
