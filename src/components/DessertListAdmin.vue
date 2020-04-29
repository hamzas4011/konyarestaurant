
<template>
    <div>
        <v-row>
            <v-col cols="12" sm="6" lg="4" v-for="dessert in desserts" :key="dessert.id">
               <DessertItemAdmin
               :id="dessert.id"
               :name="dessert.name"
               :description="dessert.description"
               :price="dessert.price" />   
            </v-col>
        </v-row>
    </div>
</template>

<script>
import axios from 'axios'
import DessertItemAdmin from '@/components/DessertItemAdmin'
export default {
    name:"DessertListAdmin",
    data(){
        return{
            desserts:[{
                id: 999, name: "TESTDRIKKE", imgName: "fido.jpg"
            }]
        }
    },
    //endre til admin
    created(){
        axios.get("https://localhost:5001/konyarestaurantadmin/getdessert")
        .then( result => {
            this.desserts = result.data;

        })
    },
    components:{
        DessertItemAdmin
    }
    
}
</script>