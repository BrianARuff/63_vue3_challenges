<script>
import img1 from '../assets/vue.png';
import img2 from '../assets/react.png';
import img3 from '../assets/angular.png';
const images = [img1, img2, img3];
export default {
   name: 'Modal',
   data() {
      return {
         index: 0,
         image: images[0],
         displayModal: false
      };
   },
   methods: {
      next() {
         this.index = (this.index + 1) % images.length;
         this.image = images[this.index];
      },
      prev() {
         this.index = (this.index - 1 )% images.length;
         this.image = images[this.index];
      },
      onClickOutside(e) {
          if (e.target.localName !== "button") {
              this.displayModal = false;
          }
      }
   },
   mounted() {
       window.addEventListener('click', this.onClickOutside);
   }
};
</script>

<template>
   <div>
      <button @click.stop="displayModal = true">Open Modal</button>
      <div id="modal" v-if="displayModal">
         <button @click="displayModal = false">Close</button>
         <div>
            <button @click="prev">&lt;</button>
            <img :src="image" alt="react, vue or angular framwork icon">
            <button @click="next">&gt;</button>
         </div>
      </div>
   </div>
</template>

<style scoped>
    img {
        max-width: 100px;
        height: 100px;
    }
</style>