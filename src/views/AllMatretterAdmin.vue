<template>
    <div>
        <h1>Alle Matretter Admin</h1>
        <MatrettListAdmin />
    </div>
</template>

<script>
import MatrettListAdmin from '@/components/MatrettListAdmin'
export default {
    name: "AllMatretterAdmin",
    components: {
        MatrettListAdmin
    }
}
</script>