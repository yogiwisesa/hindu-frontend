<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">

        <div class="card text-center">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">

              <router-link class="nav-item nav-link" tag="li" to="/doa/mantra" active-class="active">Mantra</router-link>
              <router-link class="nav-item nav-link" tag="li" to="/doa/kidung" active-class="active">Kidung</router-link>

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

    };
  },
  created() {

  },
  computed: {
    
  },
  methods: {
   
  }
};
</script>
<style lang="scss" scoped>
</style>
