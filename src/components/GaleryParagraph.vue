<template>
  <div>
    <div class="text-center">
      <p class="text-h4">Galerie</p>
    </div>

    <div class="q-my-xl gt-sm">
      <q-carousel swipeable animated height="95vh" v-model="slide" thumbnails infinite autoplay>
        <q-carousel-slide :name="1" img-src="/images/Galery01.jpg" />
        <q-carousel-slide :name="2" img-src="/images/Galery02.jpg" />
        <q-carousel-slide :name="3" img-src="/images/Galery03.jpg" />
        <q-carousel-slide :name="4" img-src="/images/Galery04.jpg" />
        <q-carousel-slide :name="5" img-src="/images/Galery05.jpg" />
        <q-carousel-slide :name="6" img-src="/images/Galery06.jpg" />
        <q-carousel-slide :name="7" img-src="/images/Galery07.jpg" />
        <q-carousel-slide :name="8" img-src="/images/Galery08.jpg" />
      </q-carousel>
    </div>

    <div class="q-my-xl lt-md">
      <q-carousel swipeable animated height="35vh" v-model="slide" thumbnails infinite autoplay>
        <q-carousel-slide :name="1" img-src="/images/Galery01.jpg" />
        <q-carousel-slide :name="2" img-src="/images/Galery02.jpg" />
        <q-carousel-slide :name="3" img-src="/images/Galery03.jpg" />
        <q-carousel-slide :name="4" img-src="/images/Galery04.jpg" />
        <q-carousel-slide :name="5" img-src="/images/Galery05.jpg" />
        <q-carousel-slide :name="6" img-src="/images/Galery06.jpg" />
        <q-carousel-slide :name="7" img-src="/images/Galery07.jpg" />
        <q-carousel-slide :name="8" img-src="/images/Galery08.jpg" />
      </q-carousel>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const slide = ref(1)
</script>
