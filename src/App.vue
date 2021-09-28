<template>
  <div>
    <b-navbar id="nav" shadow>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/' }"
          ><i class="fas fa-home"></i> Главная страница</b-navbar-item
        >
        <b-navbar-item tag="router-link" :to="{ path: '/helper' }"
          ><i class="fas fa-hands-helping"></i> Перечень вспомогательных
          предметов</b-navbar-item
        >
        <b-navbar-item tag="router-link" :to="{ path: '/house' }"
          ><i class="fas fa-couch"></i> Как приспособить жилище</b-navbar-item
        >
        <b-navbar-item tag="router-link" :to="{ path: '/skills' }"
          ><i class="fas fa-list-ul"></i> Перечень навыков</b-navbar-item
        >
        <b-navbar-item tag="router-link" :to="{ path: '/media' }"
          ><i class="fas fa-video"></i> Видео раздел</b-navbar-item
        >
        <b-navbar-item tag="router-link" :to="{ path: '/violations' }"
          ><i class="fas fa-wheelchair"></i> Двигательные
          нарушения</b-navbar-item
        >
      </template>
      <!-- <template slot="end">
        <b-navbar-item @click="logout"
          ><i class="fas fa-door"></i>Выйти</b-navbar-item
        >
      </template> -->
    </b-navbar>

    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Cinzel+Decorative:400,700|Nunito:600");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
  letter-spacing: 1px;
  margin: 0 20px;
}

#nav a {
  font-weight: 600;
  color: #68c8b7;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
