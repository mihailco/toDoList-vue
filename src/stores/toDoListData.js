import { ref, } from "vue";
import { defineStore } from "pinia";

export const useToDoStore = defineStore("ToDo", () => {
    const newTodo = ref('')
    let id = 0
    const todos = ref([
        { id: id++, text: 'Learn HTML' },
        { id: id++, text: 'Learn JavaScript' },
        { id: id++, text: 'Learn Vue' }
    ])
    function addTodo() {
        todos.value.push({ id: id++, text: newTodo.value })
        newTodo.value = ''
    }
    function removeTodo(todo) {
        todos.value = todos.value.filter((t) => t !== todo)
      }
    return { newTodo, todos, addTodo, removeTodo };
});
