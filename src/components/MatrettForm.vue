<template>
    <div>
        <v-row>
            <v-col cols="12" sm="6" lg="4" class="mx-auto">
             <v-text-field v-model.number="newMatrett.id" label="Id"></v-text-field>
            <v-text-field v-model="newMatrett.name" label="Navn"></v-text-field>
            <v-text-field v-model="newMatrett.description" label="Description"></v-text-field>
            <v-text-field v-model.number="newMatrett.price" label="Price"></v-text-field>
            <v-file-input v-model="file" show-size></v-file-input>
            <v-btn @click="postMatrett">Lagre nytt Matrett</v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
//importerer axios
import axios from 'axios'
export default {
    name: "MatrettForm",
    data(){
        return{
            newMatrett: {id:"", name: "", imgName: "", description: "", price: ""},
            file: null
        }
    },

    //metode for å legge til ny matrett i databasen.
    methods:{
        postMatrett(){
            this.newMatrett.imgName = this.file.name;

            let data = new FormData();
            data.append("file", this.file);
                 //endre til admin
            axios.post("https://localhost:5001/konyarestaurantadmin", this.newMatrett)
            .then( result => {

                console.log( result.data );

                axios({
                    method: "POST",
                    url: "https://localhost:5001/konyarestaurantadmin/Uploadimage",
                    data: data,
                    config: { headers: {'Content-Type' : 'multipart/form-data'} }
                })
            })
        }
    }
}
</script>