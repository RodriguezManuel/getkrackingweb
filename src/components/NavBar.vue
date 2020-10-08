<template>

  <nav>
    <v-toolbar flat color= #D1D1D1 height=125px>
      <router-link to="/">
        <img :src = "require('../assets/images/getkrackinname.png')" alt="Get krackin">
      </router-link>

      <v-toolbar-title>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/QuienesSomos">Quienes somos</router-link></li>
          <li><router-link to="/Ayuda">Ayuda</router-link></li>
        </ul>
      </v-toolbar-title>

      <v-spacer/>

      <v-btn width="338px" height="78px" depressed color = #3C3C3C class = "white--text rounded-pill" >
        Iniciar sesión
      </v-btn>
    </v-toolbar>
  </nav>

</template>

<script>
export default {

}
</script>

<style scoped>
  @font-face {
    font-family: "NotoSansRegular";
    src:url("../assets/fonts/NotoSans-Regular.ttf");
  }

  ul{
    list-style-type: none;
    margin: 0;
  }

  li{
    display: inline-block;
    margin: 50px;
  }

  a{
    color: #626262;
    font-family: NotoSansRegular;
    font-size: 30px;
    text-decoration: none;
  }

  /* Para cambiar el tamanio del boton de iniciar sesion */
  .v-btn.v-size--default{
    font-family: NotoSansRegular;
    font-size: 30px;
    text-transform: none;
  }

  img{
    margin-right: 30px;
  }

  .router-link-exact-active{
    color: white;
  }

</style>
