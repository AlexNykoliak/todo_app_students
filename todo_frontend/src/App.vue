<template>
  <div id="app" class="container mt-3">
    <h1>My Todo List</h1>
    <add-task @task-added="fetchTasks"></add-task>
    <!-- ...rest of your code -->
  </div>
</template>

<script>
import AddTask from './components/AddTask.vue';
// import other components as necessary

export default {
  components: {
    AddTask,
    // ... other components
  },
  methods: {
    fetchTasks() {
      // Method to fetch tasks
    }
  },
  mounted() {
    this.fetchTasks();
  }
};
</script>
