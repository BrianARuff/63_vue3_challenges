<template>
   <div>
      <form @submit.prevent="calculate">
         <fieldset>
            <label>Subtotal</label>
            <input v-model.number="tip.subtotal" />
         </fieldset>
         <fieldset>
            <label>Number of people sharing the bill</label>
            <input v-model.number="tip.numDiners" />
         </fieldset>
         <fieldset>
            <label>Tip Percentage</label>
            <select v-model="tip.tipPercentage">
               <option
                  v-for="(percent, index) in tip.percentages"
                  :value="percent / 100"
                  :key="index"
                  >{{ percent }}%</option
               >
            </select>
         </fieldset>
         <button type="submit">Calculate</button>
      </form>
      <h4>${{ tip.tipAmount }} per person</h4>
   </div>
</template>

<script>
export default {
   data() {
      return {
         tip: {
            subtotal: 0,
            tipPercentage: 0,
            numDiners: 0,
            percentages: [0, 5, 10, 15, 20, 25, 30],
            tipAmount: 0
         }
      };
   },
   methods: {
      calculate() {
         const { subtotal, tipPercentage, numDiners } = this.tip;
         subtotal &&
            tipPercentage &&
            numDiners &&
            (this.tip.tipAmount =
               ((subtotal * tipPercentage) / numDiners).toFixed(2) || 0);
      }
   },
   computed: {
      subtotalValid() {
         return this.tip.subtotal >= 0;
      },
      numDinersValid() {
         return this.tip.numDiners >= 0;
      },
      tipPercentageValid() {
         return this.tip.tipPercentage >= 0;
      }
   }
};
</script>

<style></style>
