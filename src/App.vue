<template>
  <div id="app">

    <nav class="navbar navbar-light sticky-top shadow-sm p-3 mb-5 bg-white rounded">

      <router-link class="navbar-brand" to="/">
        <h3>HINDU</h3>
      </router-link>

      <ul class="nav justify-content-end">

        <router-link class="nav-link" to="/" active-class="active">Home</router-link>

        <router-link class="nav-link" to="/login" active-class="active"> Dashboard </router-link>

        <router-link class="nav-link" to="/about" active-class="active">About</router-link>

        <!-- TODO: tambahin navbar buat liat doa yang udah accepted -->
      </ul>
    </nav>

    <router-view/>

    <footer>
      <h3>Perlu bicara?
        <a class="email" href="mailto:yogiwisesa@gmail.com">Email</a>
        saya
      </h3>
    </footer>
  </div>
</template>

<script>
export default {
  
}
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lora|Noto+Serif|Playfair+Display|Song+Myung");
$linkColor: #66b892;
$linkColorHover: lighten($linkColor, 20%);

* {
  margin: 0;
  padding: 0;
}

.navbar-brand {
  margin-left: 16px;
  margin-top: 8px;
}

.nav-link {
  color: $linkColor;
}

.nav-link:hover {
  color: $linkColorHover;
}

footer {
  background: #41464e;
  height: 30vh;
  text-align: center;
  margin-top: 32px;

  padding-top: 15vh;
  h3 {
    color: white;
    .email {
      color: $linkColor;
      text-decoration: none;
    }
    .email:hover {
      color: $linkColorHover;
    }
  }
}
</style>
