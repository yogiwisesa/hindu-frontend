<template>
    <div class="card">
        <h3 class="card-title">{{item.nama_mantra}}</h3>
        <div class="mantra-box">
            <p class="mantra">{{item.mantra}}</p>
            <p class="translated">{{item.translated_mantra }}</p>
        </div>

        <p></p>
        <p>
            URL Suara: {{ getSoundUrl() }} <br>
            Kontributor: {{item.submitted_by }} <br>
            Status: {{item.status}} <br>
        </p>
    </div>

</template>

<script>
export default {
  props: {
    item: {}
  },
  data() {
      return {
      }
  },
  methods: {
      getSoundUrl(){
          return this.item.sound_url == "" ? "-" : this.item.sound_url
      }
  }
};
</script>

<style lang="scss" scoped>
.card {
  text-align: left;
  padding: 15px;
  margin-top: 18px;
  


  .mantra-box {
    text-align: center;
    .mantra {
      font-style: italic;
    }

    .translated {
        font-weight: bold
    }
  }
    p {
        margin-top: 10
    }
}

@media (max-width: 768px) { 
 .card{
     margin-top: 18px;
 }
}
</style>
