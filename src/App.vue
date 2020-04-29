<template>
  <v-app>
    <!-- Alle de forksjellige knappene som ligger på vue siden.-->
    <div id="app">
      <div id="map-deep-merge">
        <v-btn class="green lighten-2" to="/home">Hjem</v-btn> |
        <v-btn class="green lighten-2" to="/all-matretter">All matretter</v-btn> |
        <v-btn class="teal lighten-2" to="/all-matretter-admin">All matretter Admin</v-btn> |
        <v-btn class="teal lighten-2" to="/search-matretter">Søk matretter</v-btn>  |
        <v-btn class="teal lighten-2" to="/add-matretter">Add matrett</v-btn> |
        <v-btn class="teal lighten-2" to="/delete-matretter">Slett matretter</v-btn> |
        <v-btn class="teal lighten-2" to="/edit-matretter">Rediger matretter</v-btn> |
        <v-btn class="teal lighten-2" to="/basket">Basket matretter</v-btn> |
        <v-btn class="teal lighten-2" to="/employee-store">Ansatt</v-btn> 
        
      </div>
      <v-content>
        <v-container>
          <router-view/>
        </v-container>
      </v-content>
    </div>
    <appFooter></appFooter>
  </v-app>
  
</template>


<script>
import Footer from './footer/Footer.vue'
export default {
  components:{
    appFooter: Footer
  }
  
}
</script>

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
