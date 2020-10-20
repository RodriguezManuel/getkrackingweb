<template>
  <v-btn color="#FBAC31" width="24%" min-width="350px" min-height="90px" class="aux mx-auto white--text rounded-pill">
    {{ texto }}
  </v-btn>
</template>

<script>
export default {
  name: "BotonGenerarRutina",
  props: ['texto']
}
</script>

<style scoped>
@font-face {
  font-family: "GothamMedium";
  src: url("../assets/fonts/Gotham-Medium.ttf");
}

/* Para que no tome el default que es relative y pueda seguir el scrolleo de la pantalla*/
.aux {
  position: -webkit-sticky;
  position: sticky;
  left: 48.2%;
  bottom: 25px;
  z-index: 3;
}

/* Para las propiedades del boton, el div.aux me permite evitar que herede las propiedades del boton del padre(componente donde sea contenido) */
.v-btn.v-size--default.aux {
  font-family: GothamMedium;
  font-size: 26px;
  text-transform: none;
  text-decoration: none;
}
</style>