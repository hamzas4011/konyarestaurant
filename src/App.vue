<template>
  <v-app>
    <!-- Alle de forksjellige knappene som ligger på vue siden.-->
    <div id="app">
      <div id="map-deep-merge">
        <v-btn class="green lighten-2" to="/">Home</v-btn> |
        <v-btn class="green lighten-2" to="/om-oss">Om oss</v-btn> |
        <v-btn class="green lighten-2" to="/all-matretter">Alle matretter</v-btn> |
        <v-btn class="green lighten-2" to="/all-drikke">Alle drikker</v-btn> |
        <v-btn class="green lighten-2" to="/all-dessert">Alle desserter</v-btn> |
        <v-btn class="teal lighten-2" to="/all-matretter-admin">Alle matretter admin</v-btn> |
        <v-btn class="teal lighten-2" to="/all-drikke-admin">Alle drikker admin</v-btn> |
        <v-btn class="teal lighten-2" to="/all-dessert-admin">Alle desserter admin</v-btn> |
        <v-btn class="teal lighten-2" to="/search-matretter">Søk matretter</v-btn>  |
        <v-btn class="teal lighten-2" to="/add-matretter">Legg til matrett</v-btn> |
        <v-btn class="teal lighten-2" to="/delete-matretter">Slett matrett</v-btn> |
        <v-btn class="teal lighten-2" to="/edit-matretter">Rediger matrett</v-btn> |
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
