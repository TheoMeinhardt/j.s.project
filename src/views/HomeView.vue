<template>
  <HomeBanner />

  <!-- Big screens: -->
  <div class="gt-sm q-pa-xl">
    <IntroParagraph />
    <Divider />
    <AboutUs />
  </div>

  <!-- Small screens: -->
  <div class="lt-md q-px-lg q-py-md">
    <IntroParagraph />
    <Divider />
    <AboutUs />
  </div>
</template>

<script setup lang="ts">
import HomeBanner from '@/components/HomeBanner.vue'
import IntroParagraph from '@/components/IntroParagraph.vue'
import AboutUs from '@/components/AboutUs.vue'
import Divider from '@/components/ParagraphDivider.vue'
</script>

<style lang="scss" scoped></style>
