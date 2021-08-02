<template>
   <div>
      <input v-if="this.ediTable" v-model="editedText" type="text" />
      <button @click="toggleEditable">Edit</button>
      <button @click="editTodo">Finish Editing</button>
   </div>
</template>

<script>
export default {
   name: 'EditTodo',
   props: {
      todoText: String,
      index: Number,
   },
   data() {
      return {
         editedText: '',
         ediTable: false,
      };
   },
   methods: {
      editTodo() {
         this.ediTable = false;
         this.$emit('editTodo', this.editedText, this.index);
      },
      toggleEditable() {
         this.ediTable = !this.ediTable;
      },
   },
};
</script>

<style>
</style>