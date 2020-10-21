<template>
  <nav>
    <v-toolbar flat color=#D1D1D1 height=125px style="z-index: 1;">
      <router-link to="/" >
        <img :src="require('../assets/images/getkrackinname.png')" alt="Get krackin">
      </router-link>
      <v-tabs left slider-color="white" color="white" v-bind:style="($vuetify.breakpoint.lgAndDown === false)? {} : {'width': '450px'}" >
        <v-tab v-for="item in items" :key="item.icon" :to="item.path" class="tabCustom" >
          {{ item.desc }}
        </v-tab>
      </v-tabs>

      <v-spacer/>

      <div v-show="visibilityLogin">
        <Login style="position: absolute  ; top: 19%; right: 0.7%; z-index: 2;"/>
        <v-btn icon @click="visibilityLogin = !visibilityLogin"
               style="position: absolute  ; top: 20%; right: 0.9%; z-index: 3;">
          <v-icon color="white">mdi-close-box-outline</v-icon>
        </v-btn>
      </div>

      <v-btn @click="visibilityLogin = !visibilityLogin" width="338px" height="78px" depressed color=#3C3C3C
             class="white--text rounded-pill CustomButton">
        Iniciar sesión
      </v-btn>
    </v-toolbar>
  </nav>

</template>

<script>
import Login from "./Login"

export default {
  name: "NavBar",
  components: {
    Login
  },
  data() {
    return {
      visibilityLogin: false,
      items: [
        {desc: 'Home', path: '/'},
        {desc: 'Quienes somos', path: 'quienes_somos'},
        {desc: 'Ayuda', path: '/ayuda'}
      ]
    };
  },
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

/*Para que el boton tenga las propiedades buscadas*/
.CustomButton {
  font-family: NotoSansSemiBold, sans-serif !important;
  font-size: 30px !important;
  text-transform: none !important;
}

/*Logo get krackin*/
img {
  margin-right: 30px;
  padding-top: 15px;
}

</style>
