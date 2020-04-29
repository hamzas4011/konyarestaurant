<template>
    <div>
        <h1>Alle Matretter</h1>
        <MatrettList />
    </div>
</template>

<script>
//Importerer MatrettList fra Components
import MatrettList from '@/components/MatrettList'
export default {
    name: "AllMatretter",
    components: {
        MatrettList
    }
}
</script>