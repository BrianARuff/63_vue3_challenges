<template>
   <div>
      <h1>Todo List</h1>
      <input type="text" class="input" v-model="newTodo" />
      <button @click="add">Add</button>
      <ul
         style="list-style-type: none"
         v-for="(todo, index) in existingTodos"
         :key="index"
      >
         <li>{{ index + 1 }}. {{ todo.text }}</li>
         <button @click="deleteTodo(index)">Delete</button>
         <EditTodo @editTodo="handleEditTodo" :index="index" />
      </ul>
   </div>
</template>

<script>
import EditTodo from './EditTodo.vue';
export default {
   name: 'TodoList',
   components: {
      EditTodo,
   },
   data() {
      return {
         newTodo: '',
         existingTodos: [
            {
               text: 'Learn Vue.js',
               id: 1,
            },
            {
               text: 'Learn JavaScript',
               id: 2,
            },
            {
               text: 'Build something awesome',
               id: 3,
            },
            {
               text: 'Make a cool game',
               id: 4,
            },
            {
               text: 'Have a good day',
               id: 5,
            },
         ],
      };
   },
   methods: {
      add() {
         this.existingTodos.push({
            text: this.newTodo,
            id: this.existingTodos.length + 1,
         });
      },
      deleteTodo(index) {
         this.existingTodos.splice(index, 1);
      },
      handleEditTodo(text, index) {
         this.existingTodos[index].text = text;
         this.editable = false;
      },
   },
};
</script>

<style>
</style>