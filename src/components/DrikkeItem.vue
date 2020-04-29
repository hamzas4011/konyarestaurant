<template>
    <v-card>
        <v-img
         :src="`https://localhost:5001/images/${imgName}`"
         height="200px">
        </v-img>
      <div class= "green lighten-4">
    <v-rating v-model="rating"></v-rating>
    <v-card-title>{{ id}}.{{name}}</v-card-title>
    <hr>
   <v-card-text>{{ description}}</v-card-text>
   <v-row justify="center">
   <v-btn depressed small class="green darken-1 white--text">
    <span>Les mer</span>
    <v-icon right small color="white lighten-1">mdi-arrow-right</v-icon>
   </v-btn>
   </v-row>
   <hr>
   <v-card-subtitle.font-weight-black>{{ price}}</v-card-subtitle.font-weight-black> 
  <v-row justify="center">
   <v-btn  depressed small class="green darken-1 white--text">
    <span>Bestill</span>
    <v-icon right small color="white lighten-1">mdi-cart-plus</v-icon>
   </v-btn>
  </v-row>
   <hr>
      </div>  
    </v-card>
</template>

<script>
export default {
    name: "DrikkeItem",
    props:{
        id:{
            type: Number
        },
        name:{
            type: String
        },
        imgName:{
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