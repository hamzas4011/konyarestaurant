<template>
    <v-card>
        <v-img
         :src="`https://localhost:5001/images/${imgName}`"
         height="200px" >
        </v-img>
      <div class=blue>
    <v-rating v-model="rating"></v-rating>
    <v-card-tittle>{{ id}}.{{name}}</v-card-tittle>
    <hr>
   <v-card-text>{{ description}}</v-card-text>
   <hr>
   <v-card-subtitle.font-weight-black>{{ price}}</v-card-subtitle.font-weight-black> 
   <hr>
   <v-btn depressed small class="green white--text">
    <span>Bestill</span>
    <v-icon right small color="black lighten-1">mdi-cart-plus</v-icon>
   </v-btn>
      </div>  
    </v-card>
</template>

<script>
export default {
    name: "MatrettItem",
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