<template>
  <div id="app">

    <nav class="navbar navbar-light sticky-top shadow-sm p-3 mb-5 bg-white rounded">

      <router-link class="navbar-brand" to="/">
        <h3>HINDU</h3>
      </router-link>

      <ul class="nav justify-content-end">

        <router-link class="nav-link" to="/" active-class="active">Home</router-link>

        <router-link class="nav-link" to="/doa/mantra" active-class="active">Doa & Kidung</router-link>

        <router-link class="nav-link" to="/login" active-class="active"> Dashboard </router-link>

        <router-link class="nav-link" to="/about" active-class="active">About</router-link>

        <!-- TODO: tambahin navbar buat liat doa yang udah accepted -->
      </ul>
    </nav>

    <router-view/>

    <footer>
      <h3>Ngobrol yuk!
        <a class="email" href="mailto:yogiwisesa@gmail.com">Email</a>
        saya
      </h3>
      <p>Saya siap ngobrol tentang apapun! <br> kritik, saran, keluh kesah, inovasi, tawaran kerja sama maupun kerjaan :D</p>
    </footer>
  </div>
</template>

<script>
export default {};
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
  margin-top: 40px;

  padding-top: 10vh;
  h3, p{
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
