<template>
  <div>
    <h1>Image Modal</h1>
    <ImageModal />
    <Modal />
  </div>
</template>

<script>
import ImageModal from './components/ImageModal.vue';
import Modal from './components/Modal.vue';
export default {
  name: 'App',
  components: {
    ImageModal,
    Modal,
  }
}
</script>

<style>
</style>
