<template>
   <div>
      <h1>Image Slider</h1>
      <img :src="images[index]" alt="random" />
      <div class="form-group">
         <button @click="previous">Previous Image</button>
         <button @click="next">Next Image</button>
      </div>
   </div>
</template>

<script>
import img1 from '../assets/logo.png';
import img2 from '../assets/Screenshot from 2021-07-25 09-04-59.png';
import img3 from '../assets/Screenshot from 2021-07-27 01-56-35.png';
const images = [img1, img2, img3];
export default {
   name: 'Slider',
   data() {
      return {
         images,
         index: 0
      };
   },
   methods: {
      next() {
         if (this.index < images.length - 1) {
            return this.index++;
         }
         return (this.index = 0);
      },
      previous() {
         if (this.index > 0) {
            return this.index--;
         }
         return (this.index = 2);
      },
      autoSlide() {
         setInterval(() => {
             this.next();
         }, 3000);
      }
   },
   beforeMount() {
      this.autoSlide();
   }
};
</script>

<style scoped>
div {
   overflow-x: hidden;
}
img {
   height: 300px;
   transition: 300ms;
}

img:hover {
    opacity: 0.9;
    transform: scale(1.2);
}

</style>
