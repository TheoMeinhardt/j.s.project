<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
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

.text-h5 {
  font-family: 'Oswald-Regular';
}

.darkGreenBG {
  background-color: #126e2a;
}
</style>
