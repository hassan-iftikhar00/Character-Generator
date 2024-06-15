<script setup></script>

<template>
  <v-form>
    <v-row>
      <v-col>
        <v-text-field
          v-model="name"
          rounded="lg"
          elevation="24"
          hint="Enter the name of your new character"
          label="Character Name"
          variant="outlined"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        ><v-select
          v-model="profession"
          clearable
          elevation="24"
          rounded="lg"
          label="Profession"
          hint="Select the profession of your new character"
          :items="[
            'King',
            'Mage',
            'Thief',
            'Warrior',
            'Archer',
            'Ranger',
            'Knight',
            'Assassin',
            'Pirate',
          ]"
          variant="outlined"
        ></v-select
      ></v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          rounded="lg"
          elevation="24"
          color="purple-darken-2"
          @click="postCharacter"
        >
          <v-icon left>mdi-plus</v-icon>Button
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";

const name = ref(null);
const profession = ref(null);

const postCharacter = () => {
  axios.post("http://localhost:3000/characters", {
    name: name.value,
    profession: profession.value,
  });
};
</script>
