<template>
    <div>
        <!-- Radene i editmatretter -->
        <v-row>
         <v-col cols="12" sm="6" lg="4" class="mx-auto">
        <h1>Rediger matretter</h1>
        <label>Id</label>
         <v-text-field v-model.number="editId" type="number"></v-text-field>
         <v-btn @click="getMatretter">Hent matretter</v-btn>
        <br>
        <label>Id</label>
         <v-text-field v-model.number="editMatretter.id"  type="number"></v-text-field>
        <label>Name</label>
        <v-text-field v-model="editMatretter.name" type="text"></v-text-field>
        <label>Image</label>
        <v-file-input v-model="file" show-size></v-file-input>
        <label>Description</label>
        <v-text-field v-model="editMatretter.description" type="text"></v-text-field>
        <label>Price</label>
        <v-text-field v-model.number="editMatretter.price"  type="number"></v-text-field>
         <v-btn @click="putMatretter">lagre matretter</v-btn>
         </v-col>
        </v-row>
    </div>
</template>

<script>
//importerer axios
import axios from 'axios'
export default {
    name: "EditMatretter",
    data(){
        return{
            editId: "",
            editMatretter: {id:"", name: "", imgName: "", description: "", price: ""},
          
        }
    },
    //Henter matretter fra databasen
    methods: {
        getMatretter(){
            let webAPIUrl = `https://localhost:5001/konyarestaurantadmin/getId/${this.editId}`;
            axios.get( webAPIUrl )
            .then( result => {
                this.editMatretter = result.data;
            })
        },
        //Legger til matrett
        putMatretter(){
            let webAPIUrl = "https://localhost:5001/konyarestaurantadmin";
            axios.put ( webAPIUrl, this.editMatretter
             )
         
        }
    }
    
}
</script>