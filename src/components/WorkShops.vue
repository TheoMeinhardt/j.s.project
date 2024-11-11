<template>
  <div>
    <div class="text-center">
      <p class="text-h4">Angebote & Workshops</p>
      <p class="text-subtitle1">Workshops zu ausgewählten Schwerpunkten im Bereich Training, Gesundheit und Ernährung für Privat- und Firmenkunden</p>
    </div>

    <div class="row justify-center text-center text-white text-body1">
      <q-btn class="button col-auto q-mx-md q-my-sm" to="privatkunden" size="lg" unelevated rounded label="Privatkunden" />
      <q-btn class="button col-auto q-mx-md q-my-sm" to="firmenkunden" size="lg" unelevated rounded label="Firmenkunden" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.button {
  background-image: linear-gradient(#2b793e, #43a15c, #51c975);
}
</style>
