
<template>
    <v-simple-table dark  fixed-header height="180px" >
         <template v-slot:default>
            <thead>
        <tr>
          <th class="text-left">id</th>
        <th class="text-left">Navn</th>
         <th class="text-left">beskrivelse</th>
          <th class="text-left">Pris</th>
        </tr>
      </thead>
      <tbody>           
    <td>{{ id}}</td>
    <td>{{name}}</td>
   <td>{{ description}}</td>
   <td>{{ price}}</td> 
      </tbody>
        
         </template>
    </v-simple-table>
</template>

<script>
export default {
    name: "DrikkeItemAdmin",
    props:{
        id:{
            type: Number
        },
        name:{
            type: String
        },

        description:{
            type: String
        },
        price:{
            type: Number 
        }
    }
}
</script>