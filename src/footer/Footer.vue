<template>
 <div class="layout">
    <v-footer absolute="" color="teal darken-1" padless>
    <v-row justify="center" no-gutters >
      
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
      {{ link }}
      </v-btn>
      <v-col
        class="teal darken-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Konya Restaurant</strong>

 </v-col>
 </v-row>
 </v-footer>
 </div>
</template>
<script>
  export default {
    data: () => ({
      links: [
        'Om oss',
        'Sosiale medier',
        'Blog',
        'Service',
        'Ris og Ros',
        'Kontakt oss',
      ],
    }),
  }
  </script>

