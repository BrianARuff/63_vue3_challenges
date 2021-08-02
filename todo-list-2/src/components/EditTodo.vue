<template>
   <div style="display: inline">
      <div v-if="this.editable">
         <input v-if="this.editable" v-model="editedText" type="text" />
         <button @click="editTodo">Finish</button>
      </div>
      <button v-if="!this.editable" @click="toggleeditable">Edit</button>
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
         editable: false,
      };
   },
   methods: {
      editTodo() {
         this.editable = false;
         this.$emit('editTodo', this.editedText, this.index);
      },
      toggleeditable() {
         this.editable = !this.editable;
      },
   },
};
</script>

<style>
</style>