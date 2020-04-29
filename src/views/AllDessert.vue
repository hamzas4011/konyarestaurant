
<template>
    <div>
        <h1>Alle desserter</h1>
        <DessertList />
    </div>
</template>

<script>
import DessertList from '@/components/DessertList'
export default {
    name: "AllDessert",
    components: {
        DessertList
    }
}
</script>