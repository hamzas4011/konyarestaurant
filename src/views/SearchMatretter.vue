<template>
    <div>
       <v-row>
            <v-col cols="12" sm="6" lg="4" class="mx-auto">
            <h1>Slett matretter</h1>
            <v-text-field v-model="searchTerm" type="Navn"></v-text-field>
            <v-btn @click="seacrhByName">Søk Matrett</v-btn>
        <article v-for="matrett in matrettSearch" :key="matrett.id">
      <h1>{{matrett.name}} ({{matrett.id}})</h1>
      <p>{{matrett.description}}</p>
    </article>
            </v-col>
       </v-row>  
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "SearchByName",
    data(){
        return {
           matrettSearch: [{id:22, name:"hamza", description: "very good"}],
           searchTerm: "Not set"
        }
    },
    methods: {
        searchByName(){
            const webAPIUrl = `https://localhost:5001/konyarestaurant/${this.searchTerm}`;

            axios.get( webAPIUrl )
            .then(
                response =>{
                    this.matrettSearch =  response.data;
                }
            )
        }
    }

}
</script>