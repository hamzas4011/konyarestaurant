<template>
  <div class="about">
    <h1>Velkommen til Konya Restaurant</h1>
    <img src="https://localhost:5001/images/fido.jpg">
    <h3>Leverandører</h3>
    <ul>
      <li v-for="supplier in supplier" :key="supplier.id">
        {{ supplier.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import SupplierStore from '@/stores/SupplierStore.js'
export default {
  name: "About",
  data(){
    return{
      supplier: SupplierStore.getSupplier()
    }
  }
  
}
</script>
