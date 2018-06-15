<template>
  <div id="app">

    <nav class="navbar navbar-light sticky-top shadow-sm p-3 mb-5 bg-white rounded">

       <router-link class="navbar-brand" to="/"><h3>HINDU</h3></router-link>

      <ul class="nav justify-content-end">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
         <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>

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

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lora|Noto+Serif|Playfair+Display|Song+Myung");
$linkColor: #66B892;
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

.nav-link:hover{
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
