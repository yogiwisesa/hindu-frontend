<template>
    <div class="container">
        <h1>Kidung</h1>
        <div class="row">
            <div class="col-sm-4">
                <Form form="Kidung" :isMantra="false"> </Form>
            </div>
            <div class="offset-sm-1 col-sm-7">
                <p v-for="kidung in kidungs">
                    <Item v-bind:item="kidung" />
                </p>
            <button class="btn btn-outline-dark"  v-on:click="fetchKidung">
              Load More
            </button>
            </div>
            
        </div>
    </div>
</template>

<script>
import Form from "@/components/mainpage/AddForm.vue";
import Item from "@/components/mainpage/ItemKidung.vue";
import axios from "axios";
export default {
  components: {
    Form,
    Item
  },
  data() {
    return {
      kidungs: [],
      page: 1
    };
  },
  created() {
    this.fetchKidung();
  },
  methods: {
    fetchKidung() {
      axios
        .get("http://hindu-id.herokuapp.com/allkidungs", {
          headers: {
            page: this.page,
            Pragma: "no-cache" 
          }
        })
        .then(response => {
          this.kidungs.push(...response.data.result.data);
          this.page = this.page + 1 ;
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
