<template>
  <div class="container">
    <h1>Mantra / Doa Sehari-hari</h1>
    <div class="row">
      <div class="col-sm-12">
        <p v-for="mantra in mantras">
          <Item v-bind:item="mantra" />
        </p>
        <button class="btn btn-outline-dark" @click="fetchMantra">
          Load More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Item from "@/components/mainpage/ItemMantra.vue";
import axios from "axios";
export default {
  components: {
    Item
  },
  data() {
    return {
      mantras: [],
      page: 1
    };
  },
  created() {
    this.fetchMantra();
  },
  methods: {
    fetchMantra() {

      axios
        .get("http://hindu-id.herokuapp.com/mantra", {
          headers: {
            page: this.page, 
            Pragma: "no-cache" 
          }
        })
        .then(response => {
          this.mantras.push(...response.data.result.data);
          this.page = this.page + 1;
          console.log("======================");
          console.log(response.data.result.data);
          console.log("======================");
        })
        .catch(err => {
          console.log("======================");
          console.log(err);
          console.log("======================");
        });
    }
  }
};
</script>
