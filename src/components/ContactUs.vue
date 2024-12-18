<template>
  <div>
    <div class="text-center">
      <p class="text-h4">Kontakt</p>
    </div>

    <p class="text-body1 text-center">Wir freuen uns, von dir zu hören!</p>

    <div class="row justify-around q-mt-xl">
      <div class="col-md-4 col-xs-12">
        <q-list bordered separator class="text-body1">
          <q-item>
            <q-item-section avatar>
              <q-icon color="primary" name="home" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Römerweg 7/1/4<br />2345 Brunn am Gebirge</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-icon color="primary" name="phone" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Sandra: <span class="text-bold">0699 11878758</span><br />Jacqueline: <span class="text-bold">0676 9157912</span></q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-icon size="sm" color="primary" name="email" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-bold"><a href="mailto:office@jsproject.at" style="text-decoration: none">office@jsproject.at</a></q-item-label>
            </q-item-section>
          </q-item>
        </q-list>

        <div class="q-mt-lg">
          <q-btn href="https://www.facebook.com/profile.php?id=61556112616465" class="socialsButton facebookButton text-white q-mt-md" padding="sm" icon="fa-brands fa-facebook" label="Folge uns auf Facebook!" />
          <q-btn href="https://www.instagram.com/j.s.project.insta/" class="socialsButton instagramButton text-white q-mt-md q-mb-xl" padding="sm" icon="fa-brands fa-instagram" label="Folge uns auf Instagram!" />
        </div>
      </div>

      <q-form @submit="sendEmail" @reset="resetForm" class="col-md-6 col-xs-12">
        <!-- Big screens -->
        <div class="row gt-sm q-mb-md">
          <q-input outlined v-model="firstnameInput" label="Vorname" class="col q-mr-md" />
          <q-input outlined v-model="lastnameInput" label="Nachname" class="col q-ml-md" />
        </div>
        <!-- Small screens -->
        <div class="row lt-md q-mb-md">
          <q-input outlined v-model="firstnameInput" label="Vorname" class="col-12" />
          <q-input outlined v-model="lastnameInput" label="Nachname" class="col-12 q-mt-md" />
        </div>

        <q-input v-model="emailInput" outlined type="email" label="Email" class="q-mb-md" />
        <q-input v-model="phoneInput" outlined type="tel" label="Telefonnummer" class="q-mb-md" />
        <q-input v-model="messageInput" outlined autogrow label="Nachricht" class="q-mb-md" />
        <q-checkbox v-model="agreeInput" label="Mit dem Absenden des Formulars erklären Sie sich mit der Verarbeitung Ihrer angegebenen Daten zum Zweck der Bearbeitung Ihrer Anfrage einverstanden." />

        <div class="q-mt-md">
          <q-btn label="Senden" type="submit" color="primary" rounded />
          <q-btn label="Reset" type="reset" color="primary" flat rounded class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const firstnameInput = ref('')
const lastnameInput = ref('')
const emailInput = ref('')
const phoneInput = ref('')
const messageInput = ref('')
const agreeInput = ref(false)

function sendEmail(): void {
  alert('Tut uns Leid, das funktioniert leider noch nicht. Bitte nutzen Sie ihr normales Mail-Programm (Outlook, etc.).\n\nEmail: office@jsproject.at')
}

function resetForm(): void {
  firstnameInput.value = ''
  lastnameInput.value = ''
  emailInput.value = ''
  phoneInput.value = ''
  messageInput.value = ''
}
</script>

<style lang="scss" scoped>
.socialsButton {
  width: 100%;
  border-radius: 999px;
}

.facebookButton {
  background-color: #4267b2;
}

.instagramButton {
  background: rgb(131, 58, 180);
  background: -moz-linear-gradient(270deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%);
  background: -webkit-linear-gradient(270deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%);
  background: linear-gradient(270deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#833ab4",endColorstr="#fcb045",GradientType=1);
}
</style>
