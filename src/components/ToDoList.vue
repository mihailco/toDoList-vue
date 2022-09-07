
<script setup>
import { useToDoStore } from '../stores/toDoListData.js'
const toDo = useToDoStore()
</script>


<template>
  <div class="center">
    <form @submit.prevent="toDo.addTodo">
      <input v-model="toDo.newTodo">
      <button>Add Todo</button>
    </form>
    <ul>
      <li v-for="todo in toDo.todos" :key="toDo.id">
        {{ todo.text }}
        <button @click="toDo.removeTodo(todo)">X</button>
      </li>
    </ul>
  </div>
    
</template>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.center{
  font-size: large;
  margin: 35px;
  margin-left: auto;
    margin-right: auto;
    width: 15em
}
</style>
