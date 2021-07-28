<script>
import SearchFilter from './components/SearchFilter.vue';
export default {
  name: "App",
  components: {
    SearchFilter,
  }
}
</script>


<template>
  <div class="container">
    <h1>Search Filter</h1>
    <search-filter></search-filter>
  </div>
</template>

<style scoped>
  .container {
    text-align: center;
  }
</style>