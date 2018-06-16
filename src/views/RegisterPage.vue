<template>
  <div class="container">
    <div class="row">
      <div class="offset-sm-3 col-sm-6">
        <div class="card">
          <div class="card-header">
            <h3>Registrasi Akun Baru</h3>
          </div>

          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </div>
              <button type="submit" v-on:click="login" class="btn btn-outline-dark">Registrasi</button>
               <b-alert variant="danger" :show="isLoginFailed" dismissible>{{ loginFailedMessage }}</b-alert>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// TODO: REFACTOR

import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      isLoginFailed: false,
      loginFailedMessage: "",
    };
  },
  computed: {},
  created() {
    if (this.$store.state.authenticated) {
      this.$router.push({ path: "/main/mantra" });
    }
  },
  methods: {
    login() {
      let bodyFormData = new FormData();
      bodyFormData.append("email", this.email);
      bodyFormData.append("password", this.password);
      axios({
        method: "post",
        url: "http://hindu-id.herokuapp.com/register",
        data: bodyFormData,
        config: {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          withCredentials: true,
          credentials: "same-origin"
        }
      })
        .then(response => {
          const token = response.data.token;
          this.$store.commit("setLogin", {
            email: this.email,
            token: `bearer ${token}`
          });
          this.$router.push({ path: "/main/mantra" });
        })
        .catch(err => {
          this.isLoginFailed =true
          this.loginFailedMessage = `Registrasi gagal: ${err}`
        });
    }
  }
};
</script>


<style lang="scss" scoped>
.card {
  margin-bottom: 32px;
}

button {
  margin-bottom: 16px;
}

form {
  .create-account {
    text-align: end
  }
}
</style>
