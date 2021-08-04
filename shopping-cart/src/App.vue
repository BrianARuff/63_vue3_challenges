<template>
   <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/cart">Cart</router-link>
      <router />
   </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    'router-link': RouterLink
};
</script>

<style>
</style>
