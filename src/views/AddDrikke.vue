<template>
    <div>
        <h1>Legg til nytt drikke</h1>
        <DrikkeForm />
    </div>
</template>

<script>
import DrikkeForm from '@/components/DrikkeForm'
export default {
    name: "AddDrikke",
    components: {
        DrikkeForm
    }
}
</script>