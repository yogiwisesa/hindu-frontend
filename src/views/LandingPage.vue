<template>
  <div class="home container">

    <div class="header row">
      <div class="offset-md-1 col-md-10">
        <h1 class="title">Dapatkan daftar doa & kidung Hindu!</h1>
        <h3 class="subtitle">Sebuah proyek open source untuk umat Hindu di Indonesia</h3>
        <p>Mari berkontribusi untuk menambahkan dan mengoreksi doa & kidung yang ada. Para developer dapat menggunakan REST API untuk mengembangkan aplikasinya sendiri.</p>
         <router-link class="btn btn-outline-dark btn-login" to="/main/mantra" >Login</router-link>
        <a href="http://github.com/yogiwisesa" target="_blank" class="btn btn-outline-dark btn-github">Github</a>
      </div>
    </div>
    
    <div class="api-documentation row">
      <div class="offset-sm-1 col-sm-10">
        <p v-for="endpoint in endpoints">
          <Card class="endpoint-container" v-bind:endpointItem="endpoint" />
        </p>
      </div>
    </div>

  </div>
</template>

<script>
import Card from "@/components/home/card.vue";

export default {
  data() {
    return {
      endpoints: [
        {
          title: "Get semua mantra",
          method: "GET",
          url: "http://hindu-id.herokuapp.com/allmantras",
          parameters: [
            {
              key: "page",
              value: "int"
            }
          ]
        },
        {
          title: "Get mantra yang telah diverifikasi",
          method: "GET",
          url: "http://hindu-id.herokuapp.com/mantra",
          parameters: [
            {
              key: "page",
              value: "int"
            }
          ]
        },
         {
          title: "Get semua kidung",
          method: "GET",
          url: "http://hindu-id.herokuapp.com/allkidungs",
          parameters: [
            {
              key: "page",
              value: "int"
            }
          ]
        },
         {
          title: "Get kidung yang telah diverifikasi",
          method: "GET",
          url: "http://hindu-id.herokuapp.com/kidung",
          parameters: [
            {
              key: "page",
              value: "int"
            }
          ]
        }
      ]
    };
  },
  components: {
    Card
  }
};
</script>

<style lang="scss" scoped>
$linkColor: #66B892;
$linkColorHover: lighten($linkColor, 20%);

.header {
  height: 70vh;
  margin-top: 20vh;
  font-family: "Lora", serif;

  .title {
    font-weight: 550;
  }

  .subtitle {
    margin-bottom: 20px;
  }

  .btn {
    width: 30%;
  }

  .btn-login {
    margin-right: 8px;
  }

  .btn-github {
    margin-left: 8px;
  }

  .btn-outline-dark:hover {
    @extend .btn-outline-dark;
    background: $linkColor;
    border: $linkColor;
  }

  .endpoint-container{
    margin-top: 18px;
  }
}

@media (max-width: 768px) { 
 .header {
   margin-top: 10vh;
 }
}
</style>
