<template>
  <nav>
    <v-toolbar flat color=#D1D1D1 height=125px>
      <router-link to="/">
        <img :src="require('../assets/images/getkrackinname.png')" alt="Get krackin">
      </router-link>
      <v-tabs left slider-color="white" color="white">
        <v-tab v-for="item in items" :key="item.icon" :to="item.path" class="tabCustom">
          {{ item.desc }}
        </v-tab>
      </v-tabs>

      <v-spacer/>
      <!--      CAMBIAR PARA QUE SOLO ENTRE CUANDO ESTE LOGUEADO-->
      <v-btn to="/loggedhome" width="338px" height="78px" depressed color=#3C3C3C class="white--text rounded-pill">
        Iniciar sesión
      </v-btn>
    </v-toolbar>
  </nav>

</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      items: [
        {desc: 'Home', path: '/'},
        {desc: 'Quienes somos', path: 'quienes_somos'},
        {desc: 'Ayuda', path: '/ayuda'}
      ]
    };
  }
}
</script>

<style scoped>
@font-face {
  font-family: "NotoSansSemiBold";
  src: url("../assets/fonts/NotoSans-SemiBold.ttf");
}

.tabCustom {
  color: #626262;
  font-family: NotoSansSemiBold;
  font-size: 30px;
  text-decoration: none;
  margin: 50px;
}

/* Para las propiedades del boton de iniciar sesion */
.v-btn.v-size--default {
  font-family: NotoSansSemiBold;
  font-size: 30px;
  text-transform: none;
  text-decoration: none;
}

/*Logo get krackin*/
img {
  margin-right: 30px;
  padding-top: 15px;
}

</style>
