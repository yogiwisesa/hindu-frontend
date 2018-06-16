<template>
    <div class="container">
        <h1>Kidung</h1>
        <div class="row">
            <div class="col-sm-12">
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
import Item from "@/components/acceptedpage/ItemKidung.vue";
import axios from "axios";
export default {
  components: {
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
        .get("http://hindu-id.herokuapp.com/kidung", {
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
        });
    }
  }
};
</script>