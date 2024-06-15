<template>
  <div class="character-viewer">
    <v-form>
      <v-row>
        <v-col cols="">
          <h1>Character In Game</h1>
        </v-col>
        <v-col cols="1">
          <v-icon
            left
            class="ma-3"
            size="30px"
            color="purple-darken-4"
            @click="getCharacters"
            >mdi-refresh</v-icon
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <ul v-if="characters && characters.length > 0">
            <li v-for="character in characters" :key="character._id">
              <v-col cols="12" md="12">
                <v-card
                  class="mx-auto"
                  color="deep-purple-accent-2"
                  rounded="xl"
                >
                  <template v-slot:prepend>
                    <v-icon color="purple-darken-4" icon="mdi-account"></v-icon>
                  </template>
                  <template v-slot:append>
                    <v-icon
                      color="purple-darken-4"
                      icon="mdi-delete"
                      @click="deleteCharacter(character._id)"
                    ></v-icon>
                  </template>
                  <v-card-text>
                    {{ character.name }} is a
                    {{ character.profession }}</v-card-text
                  >
                </v-card>
              </v-col>

              <br />
            </li>
          </ul>
          <p v-else>No characters found.</p>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// Axios are used to communicate between the data base and the client
import axios from "axios";

// its just a variable "character" which hold the value null
// used ref so the data value becomes responsive to any changes
const characters = ref(null);

const getCharacters = () => {
  axios
    .get("http://localhost:3000/characters")
    .then((response) => (characters.value = response.data));
};

// function to delete data
const deleteCharacter = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/characters/${id}`);
    getCharacters(); // Refresh the list after deletion
  } catch (error) {
    console.error("Error deleting character:", error);
  }
};

// as the get function runs when the component is mounted, so we have to reload page everytime we want to view the new data entered
// so we just add a button to refresh the page
onMounted(() => {
  getCharacters();
});
</script>
<style scoped>
.character-viewer {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
