<template>
  <div class="banner row window-height content-center">
    <div class="col-5">
      <q-img src="/images/Logo.png" class="col q-ml-xl logoBubble" width="40%"></q-img>

      <div class="text-weight-bold text-white text-h2 q-ml-xl q-mt-xl">
        <span>
          TRAINING & ERNÄHRUNG <br />
          WORKSHOPS <br />
          VORTRÄGE
        </span>
      </div>
    </div>

    <div class="col-7 text-center">
      <q-img src="https://via.assets.so/img.jpg?w=500&h=500&tc=blue&bg=#121212" class="imageBubble" width="70%"></q-img>
    </div>
  </div>

  <div class="q-pa-xl">
    <IntroParagraph />
  </div>
</template>

<script setup lang="ts">
import IntroParagraph from '@/components/IntroParagraph.vue'
</script>

<style lang="scss" scoped>
.banner {
  background-color: $darkGreen;
}

.logoBubble {
  border-radius: 9999px;
  background-image: linear-gradient(#2b793e, #43a15c, #51c975);
}

.imageBubble {
  border-radius: 9999px;
}
</style>
