<template>
  <div>
    <div class="text-center">
      <p class="text-h4">Galerie</p>
    </div>

    <div class="q-my-xl">
      <q-carousel swipeable animated height="500px" v-model="slide" thumbnails infinite autoplay>
        <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
        <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
        <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
      </q-carousel>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const slide = ref(1)
</script>
