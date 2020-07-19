<template>
<table class="table table-striped" >
  <thead>
    <tr>
      <th>Task list</th>
      <th></th>
    </tr>
  </thead>
  <tbody id="tasks-index">
    <tr v-for="task in tasks" :key="task.name">
    <td>{{ name }}</td>
    <td>
      <div class="btn btn-danger">完了</div>
    </td>
    </tr>
    <tr>
      <td><input class="form-control"></td>
      <td>
        <div class="btn btn-default">Create Task</div>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>



</script>