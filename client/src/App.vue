<script setup>
import { RouterLink, RouterView } from "vue-router";
import Main from "./components/Main.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
      rounded="lg"
    />

    <div class="wrapper">
      <Main msg="Let The Game Begin!" />

      <nav>
        <RouterLink to="/">Create Characters</RouterLink>
        <RouterLink to="/view">View All Characters</RouterLink>
      </nav>
      <v-card
        class="mx-auto text-white"
        color="black"
        max-width="300"
        prepend-icon="mdi-account"
        title="Owner"
      >
        <template v-slot:prepend>
          <v-icon size="large"></v-icon>
        </template>
        <v-card-actions>
          <v-list-item class="w-100">
            <template v-slot:prepend>
              <v-avatar
                color="grey-darken-3"
                image="./assets/pfp.jpg"
              ></v-avatar>
            </template>

            <v-list-item-title>Hassan Iftikhar</v-list-item-title>

            <v-list-item-subtitle>Vue Creator</v-list-item-subtitle>

            <template v-slot:append>
              <div class="justify-self-end">
                <v-icon class="me-1" icon="mdi-heart"></v-icon>
                <span class="subheading me-2">256</span>
                <span class="me-1">·</span>
                <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
                <span class="subheading">45</span>
              </div>
            </template>
          </v-list-item>
        </v-card-actions>
        <v-card-text class="text-h5 py-2">
          "Turns out semicolon-less style is easier and safer in TS because most
          gotcha edge cases are type invalid as well."
        </v-card-text>
      </v-card>
    </div>
  </header>

  <RouterView />
  <v-footer></v-footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
