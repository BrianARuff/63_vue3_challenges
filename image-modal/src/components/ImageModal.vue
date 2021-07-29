<script>
import img1 from '../assets/vue.png';
import img2 from '../assets/react.png';
import img3 from '../assets/angular.png';
const images = [img1, img2, img3];
export default {
   name: 'ImageModal',
   methods: {
      openModal(e) {
         this.showModal = true;
         this.currentImage = e.target.src
      },
      closeModal() {
          this.showModal = false;
      }
   },
   data() {
      return {
         showModal: false,
         images,
         currentImage: '',
      };
   }
};
</script>

<template>
   <div>
       <div class="overlay" v-if="showModal">
           <img :src="currentImage" alt="JS framework icon">
           <button @click="closeModal">Close</button>
       </div>
       <div v-for="(image, index) in images" :key="index">
           <img @click="openModal" width="200" :src="image" :alt="`image-${index}`">
       </div>
   </div>
</template>

<style scoped>
    .overlay {
        height: 500px;
        width: 500px;
        position: fixed;
        top: 50%;
        left: 50%;
        background: rgba(125, 125, 125, 0.5);
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        transform: translate(-50%, -50%);
    }
    img {
        max-width: 200px;
    }
</style>
