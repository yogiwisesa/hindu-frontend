<template>
    <div class="card">
          <div class="card-body">
            <form>
              <div class="form-group">
                <label>Nama {{form}}</label>
                <input v-model="nama" class="form-control" placeholder="Nama">
              </div>
              <div class="form-group">
                <label>{{form}}</label>
                <textarea v-model="mantra" class="form-control" placeholder="mantra"> </textarea>
              </div>
              <div class="form-group">
                <label>Terjemahan {{form}}</label>
                <textarea v-model="terjemahan" class="form-control" placeholder="Terjemahan"> </textarea>
              </div>
              <div class="form-group">
                <label>URL Suara (opsional)</label>
                <input v-model="urlSuara" class="form-control" placeholder="URL Suara">
              </div>
              <button v-on:click="simpanMantra" class="btn btn-outline-dark">Simpan</button>
            </form>
          </div>
        </div>
</template>
<script>
export default {
  props: {
      form: {}
  },
  data () {
      return {
          form: ""
      }
  }
};
</script>

<style lang="scss" scoped>
    .card {
        text-align: start
    }
</style>


