<template>
    <div>
       <v-row>
            <v-col cols="12" sm="6" lg="4" class="mx-auto">
            <h1>Slett matretter</h1>
            <v-text-field v-model="deleteId" type="Navn" label="Skriv inn id på matretten"></v-text-field>
            <v-btn @click="deleteMatretter">Slett Matrett</v-btn>
            <p> {{ deleteStatus }}</p>
            </v-col>
       </v-row>
        
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "DeleteMatretter",
    data(){
        return {
            deleteId: null,
            deleteStatus: "Ingenting er slettet enda"
        }
    },
    methods: {
        //endret til admin
        deleteMatretter(){
            let webAPIUrl = `https://localhost:5001/konyarestaurantadmin/${this.deleteId}`;

            axios.delete( webAPIUrl )
            .then(
                result =>{
                    this.deleteStatus = JSON.stringify( result.data );
                }
            )
        }
    }

}
</script>