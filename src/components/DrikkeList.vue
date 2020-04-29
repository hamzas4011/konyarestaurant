<template>
    <div>
        <v-row>
            <v-col cols="12" sm="6" lg="4" v-for="drikke in drikker" :key="drikke.id">
               <DrikkeItem
               :id="drikke.id"
               :name="drikke.name"
               :imgName="drikke.imgName"
               :description="drikke.description"
               :price="drikke.price" />   
            </v-col>
        </v-row>
    </div>
</template>

<script>
import axios from 'axios'
import DrikkeItem from '@/components/DrikkeItem'
export default {
    name:"DrikkeList",
    data(){
        return{
            drikker:[{
                id: 999, name: "TESTDRIKKE", imgName: "fido.jpg"
            }]
        }
    },
    //endre til admin
    created(){
        axios.get("https://localhost:5001/konyarestaurantadmin/getdrikke")
        .then( result => {
            this.drikker = result.data;

        })
    },
    components:{
        DrikkeItem
    }
    
}
</script>