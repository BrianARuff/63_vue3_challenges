<template>
   <div class="app">
      <div class="app__header">
         <h1>Tip Calculator</h1>
         <TipCalculator />
      </div>
   </div>
</template>

<script>
import TipCalculator from './components/TipCalculator.vue';
export default {
   name: 'App',
   components: {
      TipCalculator
   }
};
</script>

<style></style>
