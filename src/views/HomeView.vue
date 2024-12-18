<template>
  <HomeBanner />

  <!-- Big screens: -->
  <div class="gt-sm q-pa-xl">
    <IntroParagraph />
    <Divider />
    <WorkShops />
    <Divider />
    <AboutUs />
    <Divider />
    <ContactUs />
    <Divider />
    <Galery />
  </div>

  <!-- Small screens: -->
  <div class="lt-md q-px-lg q-py-md">
    <IntroParagraph />
    <Divider />
    <WorkShops />
    <Divider />
    <AboutUs />
    <Divider />
    <ContactUs />
    <Divider />
    <Galery />
  </div>
</template>

<script setup lang="ts">
import HomeBanner from '@/components/HomeBanner.vue'
import IntroParagraph from '@/components/IntroParagraph.vue'
import AboutUs from '@/components/AboutUs.vue'
import WorkShops from '@/components/WorkShops.vue'
import Divider from '@/components/ParagraphDivider.vue'
import Galery from '@/components/GaleryParagraph.vue'
import ContactUs from '@/components/ContactUs.vue'
</script>

<style lang="scss" scoped></style>
