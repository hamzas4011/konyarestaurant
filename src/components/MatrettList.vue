<template>
    <div>
        <v-row>
            <v-col cols="12" sm="6" lg="4" v-for="matrett in matretts" :key="matrett.id">
               <MatrettItem
               :id="matrett.id"
               :name="matrett.name"
               :imgName="matrett.imgName"
               :description="matrett.description"
               :price="matrett.price" />   
            </v-col>
        </v-row>
    </div>
</template>

<script>
import axios from 'axios'
import MatrettItem from '@/components/MatrettItem'
export default {
    name:"MatrettList",
    data(){
        return{
            matretts:[{
                id: 999, name: "TESTMAT", imgName: "fido.jpg"
            }]
        }
    },
    created(){
        axios.get("https://localhost:5001/konyarestaurant")
        .then( result => {
            this.matretts = result.data;

        })
    },
    components:{
        MatrettItem
    }
    
}
</script>