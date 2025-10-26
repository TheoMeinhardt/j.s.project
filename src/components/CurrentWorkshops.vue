<template>
  <div>
    <div class="text-center">
      <span class="text-h4">Aktuelle Workshops</span>
    </div>

    <div class="row justify-around reverse-wrap q-mt-xl">
      <div class="col-12 col-md-5">
        <p class="text-h5">Krafttraining - deine Power Formel</p>
        <span class="text-body1"> wie gezieltes Krafttraining zu mehr Energie, einem stärkeren Herzen, gesünderen Knochen und einer höheren Stressresistenz führt. Teilnehmende lernen, wie sie durch den richtigen Trainingsreiz, strukturierte Planung und konsequente Motivation ihre Muskulatur stärken, den Körper straffen und ihre Lebensqualität langfristig verbessern können. </span>

        <q-list bordered separator class="q-mt-lg">
          <q-item>
            <q-item-section avatar>
              <q-icon color="secondary" name="timer" />
            </q-item-section>
            <q-item-section>
              <q-item-label overline> Wann </q-item-label>
              <q-item-label> <span class="text-weight-bold">06.12.2025</span>, 11:30 - 13:00 </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-icon color="secondary" name="location_on" />
            </q-item-section>
            <q-item-section>
              <q-item-label overline> Wo </q-item-label>
              <q-item-label>LifeLine Fitnessstudio, <span class="text-weight-bold">Albert-Schweizer-Gasse 6</span></q-item-label>
              <q-item-label caption>1140 Wien</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-icon color="secondary" name="euro" />
            </q-item-section>
            <q-item-section>
              <q-item-label overline>Preis</q-item-label>
              <q-item-label><span class="text-weight-bold">€35,--</span> pro Person</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-icon color="secondary" name="login" />
            </q-item-section>
            <q-item-section>
              <q-item-label overline>Anmeldung</q-item-label>
              <q-item-label><span class="text-weight-bold"> office@jsproject.at </span></q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-icon color="secondary" name="arrow_forward" />
            </q-item-section>
            <q-item-section>
              <q-item-label>inkl. <span class="text-weight-bold"> Q&A </span></q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>

      <div class="gt-sm col-1"></div>
      <div class="lt-md col-12 q-my-md"></div>

      <div class="col-12 col-md-6">
        <q-img @click="() => (bigImagePopUp = true)" src="/images/posters/WS_0612_2025_quadratisch.png" class="poster" />
      </div>
    </div>

    <q-dialog v-model="bigImagePopUp" backdrop-filter="blur(4px)" maximized>
      <q-card>
        <q-bar>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-img @click="() => (bigImagePopUp = false)" src="/public/images/posters/WS_0612_2025.png" />
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const bigImagePopUp = ref(false)
</script>

<style lang="scss" scoped>
.poster:hover {
  cursor: zoom-in;
}
</style>
