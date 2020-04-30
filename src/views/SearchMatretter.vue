<template>
    <div>
       <v-row>
            <v-col cols="12" sm="6" lg="4" class="mx-auto">
            <h1>Søk på matretten</h1>
            <v-text-field v-model="searchTerm" type="text" label="Skriv navnet på matretten"></v-text-field>
            <v-btn @click="searchByName">Søk matrett</v-btn>
        <article v-for="matrett in matrettSearch" :key="matrett.id">
      <h1>{{matrett.imgName}}</h1>
      <h2> {{matrett.id}} {{matrett.name}} </h2>
      <p1>{{matrett.description}}</p1>
      <h1>{{matrett.price}}</h1>
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
           matrettSearch: [{imgName: "", id:"", name:"", description: "", price:""}],
           searchTerm: ""
        }
    },
    methods: {
        searchByName(){
            const webAPIUrl = `https://localhost:5001/konyarestaurantadmin/getdishesaftername/${this.searchTerm}`;

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