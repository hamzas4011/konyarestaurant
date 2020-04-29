
<template>
    <div>
        <h1>Alle drikker</h1>
        <DrikkeList />
    </div>
</template>

<script>
import DrikkeList from '@/components/DrikkeList'
export default {
    name: "AllDrikke",
    components: {
        DrikkeList
    }
}
</script>