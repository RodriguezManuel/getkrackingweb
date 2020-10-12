<template>

  <div>
    <v-card width="341px" height="260px" depressed color=#3C3C3C class="white--text" style="border-radius: 10%">
      <div class="inputCustom" style=" position: absolute; margin-top: 15%; margin-left: 20%">
        <p class="titulo">Iniciar sesión</p>
        <div class="input">
          <input type="text" placeholder="Usuario" style="font-size: 16px">
        </div>
        <div class="input" style="margin-top: 5%">
          <input :type="visibility" placeholder="Contraseña" style="font-size: 16px">
          <v-icon v-on:click="visibility = 'text'" v-if="visibility=='password'">mdi-eye</v-icon>
          <v-icon v-on:click="visibility = 'password'" v-else>mdi-eye-off</v-icon>
        </div>
        <p class="olvidaste" style="margin-top:7% ">Olvidaste tu contraseña?</p>
      </div>

      <v-col v-for="icon in icons" :key="icon.name">
        <router-link to="/implementar">
          <v-icon align="center">{{ icon.name }}</v-icon>
        </router-link>
      </v-col>

<!--      DEBERIA APUNTAR A ALGUN LADO-->
    </v-card>
  </div>

</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        visibility: "password",
        icons: [
          {name: 'fab fa-google'},
          {name: 'fab fa-facebook'},
          {name: 'fab fa-instagram'},
        ]
      }
    }
  }
</script>

<style scoped>
.olvidaste {
    font-family: NotoSans-Regular;
    font-size: 15px;
    text-decoration: underline;
    text-align: center;
}

.titulo {
  font-family: NotoSansBold;
  font-size: 25px;
  text-align: center;
}
</style>