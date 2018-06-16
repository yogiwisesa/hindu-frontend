<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">

        <div class="card text-center">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">

              <router-link class="nav-item nav-link" tag="li" to="/main/mantra" active-class="active">Tambah Mantra</router-link>
              <router-link class="nav-item nav-link" tag="li" to="/main/kidung" active-class="active">Tambah Kidung</router-link>

            </ul>
          </div>
          <div class="card-body">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MainPage",
  data() {
    return {
      namaMantra: "",
      mantra: "",
      terjemahanMantra: "",
      urlSuara: ""
    };
  },
  computed: {
    getCredentials() {
      return {
        email: this.$store.state.email,
        token: this.$store.state.token
      };
    }
  },
  methods: {
    simpanMantra() {
      console.log("======================");
      console.log(this.mantra);
      console.log("======================");
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
