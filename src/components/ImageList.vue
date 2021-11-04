<template>
  <div>
    <div v-if="isLoggedIn" class="img-container">
      <img v-for="image in getImages" :src="image.link" :key="image.id" alt="Imgur image">
    </div>
    <h2 v-else>Login to get started!</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ImageList',
  computed: mapGetters(['getImages', 'isLoggedIn']),
  methods: mapActions(['fetchImages']),
  created() {
    this.fetchImages();
  }
}
</script>

<style scoped>
.img-container {
  column-count: 3;
  column-gap: 0;
}

img {
  max-width: 100%;
  padding: 5px;
}
</style>