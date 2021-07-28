<template>
   <div>
      <input type="text" v-model="selectedPerson" list="people" />
      <datalist class="scrollable" id="people">
         <option
            v-for="person in people"
            :value="person.name"
            :key="person.id"
            >{{ person.name }}</option
         >
      </datalist>
      <br>
      <input v-model="keyword" type="text" placeholder="Filter by name">
      <div v-for="person in filterPeople" :key="person.id">
        <p>{{person.name}}</p>
      </div>
   </div>
</template>

<script>
const people = [
   {
      id: 0,
      name: 'Brian',
      age: 32
   },
   {
      id: 1,
      name: 'Shawn',
      age: 40
   },
   {
      id: 2,
      name: 'Doris T',
      age: 66
   },
      {
      id: 24,
      name: 'Doris',
      age: 66
   },
];
export default {
   name: 'SearchFilter',
   data() {
      return {
         people,
         selectedPerson: null,
         keyword: ''
      };
   },
   computed: {
     filterPeople() {
       const {people, keyword} = this;
       return people.filter(person => person.name.toLowerCase().includes(keyword));
     }
   }
};
</script>

<style scoped>
.scrollable {
   max-height: 100px;
   overflow-y: auto;
}
</style>
