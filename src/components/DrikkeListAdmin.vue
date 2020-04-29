
<template>
    <div>
        <v-row>
            <v-col cols="12" sm="6" lg="4" v-for="drikke in drikker" :key="drikke.id">
               <DrikkeItemAdmin
               :id="drikke.id"
               :name="drikke.name"
               :description="drikke.description"
               :price="drikke.price" />   
            </v-col>
        </v-row>
    </div>
</template>

<script>
import axios from 'axios'
import DrikkeItemAdmin from '@/components/DrikkeItemAdmin'
export default {
    name:"DrikkeListAdmin",
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
        DrikkeItemAdmin
    }
    
}
</script>