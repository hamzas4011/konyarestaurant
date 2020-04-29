<template>

<!-- Footer sin design og størrelse -->

 <div class="layout">
    <v-footer absolute inset app height="100" width="auto" class="mx-auto" color="teal darken-1" padless>

  <v-row justify="center" no-gutters >

    <!-- knapp som er på footer-->
      <v-btn v-for="link in links" :key="link"
        color="white"
        text
        rounded
        class="mx-auto"
      >
      {{ link }}
      </v-btn>
 </v-row>
 </v-footer>
 </div>
</template>

<!-- Navnet på kanppene som er på footer-->
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