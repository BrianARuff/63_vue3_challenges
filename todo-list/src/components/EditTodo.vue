<template>
   <div v-if="showEdit">
      <input type="text" v-model="editTodo.name" />
      <button @click="editTodoItem">Save</button>
   </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
   name: 'EditTodo',
   data() {
      return {
         localTodo: this.todo,
         editTodo: { name: '' },
      };
   },
   props: {
      todo: Object,
      todos: Array,
      showEdit: Boolean,
   },
   methods: {
      showTodo() {
         this.showEditTodo = !this.showEditTodo;
      },
      editTodoItem() {
         this.$emit('edit-todo', { ...this.editTodo, id: uuidv4() });
      },
   },
};
</script>

<style>
</style>