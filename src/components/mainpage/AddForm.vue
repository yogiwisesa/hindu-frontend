<template>
  <div class="card">
    <div class="card-body">
      <form>
        <div class="form-group">
          <label>Nama {{form}}</label>
          <input v-model="name" class="form-control" placeholder="Nama">
        </div>
        <div class="form-group">
          <label>{{form}}</label>
          <textarea v-model="mantra" class="form-control" :placeholder="form"> </textarea>
        </div>

        <div class="form-group" v-if="isMantra">
          <label>Terjemahan {{form}}</label>
          <textarea v-model="translated" class="form-control" placeholder="Terjemahan"> </textarea>
        </div>
        <div class="form-group">
          <label>URL Suara (opsional)</label>
          <input v-model="url_suara" class="form-control" placeholder="URL Suara">
        </div>
        <button v-on:click="WhichPost" class="btn btn-outline-dark">Simpan</button>
        <b-alert :variant="alertVariant" :show="isVisible" dismissible>{{ message }}</b-alert>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: {
    form: {},
    isMantra: {}
  },
  data() {
    return {
      name: "",
      mantra: "",
      translated: "",
      url_suara: "",
      isVisible: false,
      message: "",
      alertVariant: "",
    };
  },
  methods: {
    WhichPost (){
      if (this.isMantra){
        this.postMantra();
      } 

      this.postKidung()
    },
    postMantra() {
      const email = this.$store.state.email;
      const bodyFormData = new FormData();

      bodyFormData.append("nama_mantra", this.name);
      bodyFormData.append("mantra", this.mantra);
      bodyFormData.append("translated_mantra", this.translated);
      bodyFormData.append("sound_url", this.url_suara);
      bodyFormData.append("submitted_by", email);
      bodyFormData.append("status", "Pending");
      this.postWithAxios(bodyFormData);
    },

    postKidung() {
      const email = this.$store.state.email;
      const bodyFormData = new FormData();

      bodyFormData.append("nama_kidung", this.name);
      bodyFormData.append("kidung", this.mantra);
      bodyFormData.append("sound_url", this.url_suara);
      bodyFormData.append("submitted_by", email);
      bodyFormData.append("status", "Pending");
      this.postWithAxios(bodyFormData);
    },

    postWithAxios(bodyForm){
      const token = this.$store.state.token;
      axios.defaults.headers.common['Authorization'] = token

      let url;
      url = 'kidung'
      if (this.isMantra){
        url = 'mantra'
      } 

      axios({
        method: "post",
        url: `http://hindu-id.herokuapp.com/${url}`,
        data: bodyForm,
        config: {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          withCredentials: true,
          credentials: "same-origin"
        }
      })
        .then(response => {
            this.isVisible = true;
            this.message = "Berhasil menambahkan!"
            this.alertVariant = "success"
        })
        .catch(err => {
            this.isVisible = false;
            this.message = "Gagal menambahkan :("
            this.alertVariant = "danger"
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  text-align: start;
  margin-top: 18px;
}

</style>


