<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">

        <div class="card text-center">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">

              <router-link class="nav-item nav-link" tag="li" to="/main/mantra" active-class="active">Mantra</router-link>
              <router-link class="nav-item nav-link" tag="li" to="/main/kidung" active-class="active">Kidung</router-link>

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
  created() {
    this.routeBackToLogin()
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
    routeBackToLogin() {
      if (!this.$store.state.authenticated) {
        this.$router.push({ path: "/login" });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
