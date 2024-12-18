<script setup lang="ts">
import { RouterView } from 'vue-router'

import Footer from '@/components/PageFooter.vue'
</script>

<template>
  <RouterView />

  <Footer></Footer>
</template>

<style scoped></style>

<style lang="scss">
@font-face {
  font-family: 'Oswald-Medium';
  src: url('./assets/fonts/Oswald/Oswald-Medium.ttf') format('truetype');
}

@font-face {
  font-family: 'Oswald-Regular';
  src: url('./assets/fonts/Oswald/Oswald-Regular.ttf') format('truetype');
}

.text-h4 {
  font-family: 'Oswald-Medium';
}

.text-h5,
.text-h2 {
  font-family: 'Oswald-Regular';
}

.darkGreenBG {
  background-color: #126e2a;
}
</style>
