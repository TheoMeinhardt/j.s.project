<template>
  <div class="banner row window-height content-md-center content-sm-start">
    <div class="col-md-5 col-xs-12">
      <!-- Big Screens -->
      <q-img src="/images/Logo.png" class="logoBubble gt-sm q-ml-xl q-mt-xl" width="40%"></q-img>
      <p class="gt-sm text-weight-bold text-white text-h2 q-ml-xl q-mt-xl">
        TRAINING & ERNÄHRUNG <br />
        WORKSHOPS <br />
        VORTRÄGE
      </p>

      <!-- Small Screens -->
      <div class="text-center q-my-md">
        <q-img src="/images/Logo.png" class="logoBubble lt-md" width="50%" fit="contain"></q-img>
      </div>
      <p class="lt-md text-center text-weight-bold text-white text-h4">
        TRAINING & ERNÄHRUNG <br />
        WORKSHOPS <br />
        VORTRÄGE
      </p>
    </div>

    <div class="col-md-7 col-xs-12 text-center">
      <q-img src="/images/8575.jpg" class="imageBubble q-mt-xl" width="70%"></q-img>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

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
