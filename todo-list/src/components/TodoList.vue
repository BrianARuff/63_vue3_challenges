<template>
   <div>
      <input type="text" v-model="newTodo.name" />
      <button type="submit" @click="addTodo">Add Todo</button>
      <ul>
         <div v-for="(todo, index) in todos" :key="index">
            <h4>{{ todo.name }}</h4>
            <button @click="removeTodo(index)">Remove</button>
            <button @click="showEditItem">Show Edit</button>
            <EditTodo
               @edit-todo="handleEditTodo(todo)"
               :showEdit="showEdit"
               :todo="todo"
               :todos="todos"
            />
         </div>
      </ul>
   </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import EditTodo from './EditTodo.vue';
export default {
   name: 'TodoList',
   components: {
      EditTodo,
   },
   data() {
      return {
         todos: [],
         newTodo: { name: '' },
         editTodo: { name: '' },
         showEdit: false,
      };
   },
   methods: {
      addTodo() {
         this.todos = [...this.todos, { ...this.newTodo, id: uuidv4() }];
      },
      removeTodo(index) {
         this.todos = this.todos.filter(
            (todo) => todo.id !== this.todos[index].id
         );
      },
      showEditItem() {
         this.showEdit = !this.showEdit;
      },
      handleEditTodo(todo) {
         todo = { ...todo, ...this.editTodo };
      },
   },
};
</script>

<style>
</style>