<template>
  <div class="Worker">
    <v-row>
      <v-col cols="12" sm="6" lg="4" class="mx-auto">
    <h1>Velkommen til Ansatt siden</h1>
    <img src="https://localhost:5001/images/employee.png">
  
  <div>
         <v-text-field v-model.number="editEmployee" label="Søk ansatt" type="number"></v-text-field>
         <v-btn @click="getEmployee">Hent ansatt</v-btn>
        <br>
  
         <v-text-field v-model.number="editEmployee"  label="Slett ansatt" type="number"></v-text-field>
         <v-btn @click="deleteEmployee">slett ansatt</v-btn>
        <br>

        <v-text-field v-model.number="editEmployee"  label="Endre ansatt" type="number"></v-text-field>
         <v-btn @click="putEmployee">Endre ansatt</v-btn>

         <v-text-field v-model.number="editEmployee"  label="Legg til ansatt" type="number"></v-text-field>
         <v-btn @click="postEmployee">Legg til ansatt</v-btn>
        <br>
        <br>
    </div>

    <br>

    <v-card class="mx-auto" max-width="844" color="teal lighten-3">
    <ul>
      <li v-for="employee in employee" :key="employee.id">
       {{employee.id}}, {{ employee.name }}, {{employee.tlf}}, {{employee.email}},{{employee.adress}}
      </li>
    </ul>
    </v-card>
    </v-col>
    </v-row>
  </div>    
</template>

<script>
import axios from 'axios'
import EmployeeStore from '@/stores/EmployeeStore.js'

export default {
  name: "WorkerStore",
  data(){
    return{
      employee: EmployeeStore.getEmployee()
    }
  },
  methods: {
        getEmployee(){
            let webAPIUrl = `https://localhost:5001/konyarestaurantadmin/getId/${this.editId}`;
            axios.get( webAPIUrl )
            .then( result => {
                this.editEmployee = result.data;
            })
        },
        
        putEmployee(){
            let webAPIUrl = "https://localhost:5001/konyarestaurantadmin";
            axios.put ( webAPIUrl, this.editEmployee
             )
         
        },
        deleteEmployee(){
            let webAPIUrl = `https://localhost:5001/konyarestaurantadmin/${this.deleteId}`;

            axios.delete( webAPIUrl )
            .then(
                result =>{
                    this.deleteStatus = JSON.stringify( result.data );
                }
            )
        }, 
         postMatrett(){
            this.newEmployee.image = this.file.name;

            let data = new FormData();
            data.append("file", this.file);
                 
            axios.post("https://localhost:5001/konyarestaurantadmin", this.newEmployee)
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

