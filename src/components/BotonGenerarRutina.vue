<template>
  <div class="aux">
  <v-btn color="#FBAC31" width="24%" height="10%" class=".v-btn.v-size--default white--text rounded-pill">
    Generar rutina nueva
  </v-btn>
  </div>
</template>

<script>
export default {
name: "BotonGenerarRutina"
}
</script>

<style scoped>
@font-face {
  font-family: "GothamMedium";
  src: url("../assets/fonts/Gotham-Medium.ttf");
}

/* Para que no tome el default que es relative y pueda seguir el scrolleo de la pantalla*/
div.aux {
  position: -webkit-sticky;
  position: sticky;
  top: 85%;
  left: 38%;
  z-index: 3;
}

/* Para las propiedades del boton, el div.aux me permite evitar que herede las propiedades del boton del padre(componente donde sea contenido) */
div.aux .v-btn.v-size--default {
  font-family: GothamMedium;
  font-size: 26px;
  text-transform: none;
  text-decoration: none;
}
</style>