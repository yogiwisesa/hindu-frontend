// Nama
// Kidung
// Terjemahannya
// URL Suara
// Pengirim
// Status

<template>

    <div class="card">
        <h3>{{item.nama_kidung }}</h3>
        <h3>{{item.kidung }}</h3>
        <h3>{{item.translated_mantra }}</h3>
        <h3>{{item.submitted_by }}</h3>
        <h3>{{item.status }}</h3>
        <h3>{{item.sound_url }}</h3>
    </div>

</template>

<script>
export default {
    props: {
        item: {}
    }
    
}
</script>

<style lang="scss" scoped>

</style>
