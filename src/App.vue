<template>
  <v-app>
    <div id="app">
      <div id="map-deep-merge">
        <v-btn class="secondary" to="/">Home</v-btn> |
        <v-btn class="secondary" to="/about">About</v-btn> |
        <v-btn class="secondary" to="/all-matretter">All matretter</v-btn> |
        <v-btn class="secondary" to="/add-matretter">Add matrett</v-btn> |
        <v-btn class="secondary" to="/delete-matretter">Slett matretter</v-btn> |
        <v-btn class="secondary" to="/edit-matretter">Rediger matretter</v-btn> |
        <v-btn class="secondary" to="/search-matretter">Søk matretter</v-btn> 
      </div>
      <v-content>
        <v-container>
          <router-view/>
        </v-container>
      </v-content>
    </div>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
