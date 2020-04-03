<template>
    <v-card>
        <v-img
         :src="`https://localhost:5001/images/${imgName}`"
         height="200px" >
        </v-img>
    <v-card-tittle>{{ name }}</v-card-tittle>
    </v-card>
</template>

<script>
export default {
    name: "MatrettItem",
    props:{
        name:{
            type: String
        },
        imgName:{
            type: String
        }
    }
}
</script>