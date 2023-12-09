<template>
  <div>
    <h1>My Todo List</h1>
    <add-task></add-task>
    <task-list></task-list>
  </div>
  <add-task @task-added="refreshTasks"></add-task>

</template>

<script>
import TaskList from './TaskList.vue';
import AddTask from './AddTask.vue';

export default {
  components: {
    TaskList,
    AddTask
  }
};
methods: {
  refreshTasks() {
    this.$refs.taskList.fetchTasks();
  }
};
</script>
