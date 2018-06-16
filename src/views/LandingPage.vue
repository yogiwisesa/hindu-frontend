<template>
  <div class="home container">

    <div class="header row">
      <div class="offset-md-1 col-md-10">
        <h1 class="title">Dapatkan daftar doa & kidung Hindu!</h1>
        <h3 class="subtitle">Sebuah proyek open source untuk umat Hindu di Indonesia</h3>
        <p>Mari berkontribusi untuk menambahkan dan mengoreksi doa & kidung yang ada. Untuk para developer dapat menggunakan REST API untuk mengembangkan aplikasinya sendiri.</p>
         <router-link class="btn btn-outline-dark btn-login" to="/main/tambahmantra" >Login</router-link>
        <button class="btn btn-outline-dark btn-github">Github</button>
      </div>
    </div>
    
    <div class="api-documentation row">
      <div class="offset-sm-1 col-sm-10">
        <p v-for="endpoint in endpoints">
          <Card v-bind:endpointItem="endpoint" />
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
          title: "GET semua mantra",
          method: "GET",
          url: "hindu.org/mantra",
          parameters: [
            {
              key: "header",
              value: "11100"
            },
            {
              key: "header2",
              value: "11100"
            }
          ]
        },
        {
          title: "GET semua kidung",
          method: "GET",
          url: "hindu.org/mantra",
          parameters: [
            {
              key: "header",
              value: "11100"
            },
            {
              key: "header2",
              value: "11100"
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
}

</style>
