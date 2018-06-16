<template>
  <div class="container">
    <h1>Mantra / Doa Sehari-hari</h1>
    <div class="row">
      <div class="col-sm-4">
        <Form form="Mantra" :isMantra="true"> </Form>
      </div>
      <div class="offset-sm-1 col-sm-7">
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
import Form from "@/components/mainpage/AddForm.vue";
import Item from "@/components/mainpage/ItemMantra.vue";
import axios from "axios";
export default {
  components: {
    Form,
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
        .get("http://hindu-id.herokuapp.com/allmantras", {
          headers: {
            page: this.page, 
            Pragma: "no-cache" 
          }
        })
        .then(response => {
          this.mantras.push(...response.data.result.data);
          this.page = this.page + 1;
        })
        .catch(err => {
          // eslint-disable-next-line
          console.log(err)
        });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
