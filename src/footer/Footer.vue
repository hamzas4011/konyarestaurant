<template>
 <div class="layout" >
    <v-footer absolute inset app height="100" width="auto" class="py-12" color="teal darken-1" padless>

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