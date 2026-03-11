<template>
  <div>
    <div class="text-center">
      <span class="text-h4">Aktuelle Workshops</span>
    </div>

    <div v-for="(workshop, key) in workshops" class="row justify-around reverse-wrap q-mt-xl" :key=key>
      <div class="col-12 col-md-5">
        <p class="text-h5">{{ workshop.titel }}</p>
        <span class="text-body1"> {{ workshop.text }} </span>

        <q-list bordered separator class="q-mt-lg">
          <q-item>
            <q-item-section avatar>
              <q-icon color="secondary" name="timer" />
            </q-item-section>
            <q-item-section>
              <q-item-label overline> Wann </q-item-label>
              <q-item-label> <span class="text-weight-bold">{{ format(workshop.begin, 'dd.MM.yyyy') }}</span>,
                {{ format(workshop.begin, 'HH:mm') }} - {{ format(workshop.end, 'HH:mm') }} </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-icon color="secondary" name="location_on" />
            </q-item-section>
            <q-item-section>
              <q-item-label overline> Wo </q-item-label>
              <q-item-label> {{ workshop.location.name }}, <span class="text-weight-bold">
                  {{ workshop.location.address }}
                  {{ workshop.location.houseNumber }}
                </span></q-item-label>
              <q-item-label caption> {{ workshop.location.zip }} {{ workshop.location.city }} </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-icon color="secondary" name="euro" />
            </q-item-section>
            <q-item-section>
              <q-item-label overline>Preis</q-item-label>
              <q-item-label><span class="text-weight-bold">€{{ workshop.price }}</span> pro Person</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-icon color="secondary" name="login" />
            </q-item-section>
            <q-item-section>
              <q-item-label overline>Anmeldung</q-item-label>
              <q-item-label><span class="text-weight-bold"> {{ workshop.signUp }} </span></q-item-label>
            </q-item-section>
          </q-item>

          <q-item v-for="(feature, key) in workshop.features" :key=key>
            <q-item-section avatar>
              <q-icon color="secondary" name="arrow_forward" />
            </q-item-section>
            <q-item-section>
              <q-item-label> {{ feature }} </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>

      <div class="gt-sm col-1"></div>
      <div class="lt-md col-12 q-my-md"></div>

      <div class="col-12 col-md-6">
        <q-img @click="() => (bigImagePopUp = true)" :src="workshop.image.square" class="poster" />
      </div>

      <q-dialog v-model="bigImagePopUp" backdrop-filter="blur(4px)" maximized>
        <q-card>
          <q-bar>
            <q-space />
            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>
          <q-img @click="() => (bigImagePopUp = false)" :src="workshop.image.regular" />
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'
import { format } from 'date-fns'

import type { Workshop } from '@/types'
import { parseWorkshops } from '@/helpers'

import workshopData from '@/assets/data/workshops.json'

const bigImagePopUp = ref(false)
const workshops: Ref<Workshop[]> = ref(parseWorkshops(workshopData))

// Sort the workshops descending by their date
workshops.value.sort((lhs, rhs) => { return Number(lhs.begin) - Number(rhs.begin) }).reverse()
console.log(workshops.value[0].image)
</script>

<style lang="scss" scoped>
.poster:hover {
  cursor: zoom-in;
}
</style>
