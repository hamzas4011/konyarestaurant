<template>
    <div>
        <v-row>
            <v-col cols="12" sm="6" lg="4" v-for="matrett in matretts" :key="matrett.id">
               <MatrettItemAdmin
               :id="matrett.id"
               :name="matrett.name"
               :description="matrett.description"
               :price="matrett.price" />   
            </v-col>
        </v-row>
    </div>
</template>

<script>
import axios from 'axios'
import MatrettItemAdmin from '@/components/MatrettItemAdmin'
export default {
    name:"MatrettListAdmin",
    data(){
        return{
            matretts:[{
                id: 999, name: "TESTMAT", imgName: "fido.jpg"
            }]
        }
    },
    //endre til admin
    created(){
        axios.get("https://localhost:5001/konyarestaurantadmin")
        .then( result => {
            this.matretts = result.data;

        })
    },
    components:{
        MatrettItemAdmin
    }
    
}
</script>