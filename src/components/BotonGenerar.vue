<template>
  <v-btn to="/generar_rutina" color="#FBAC31" width="24%" min-width="350px" min-height="90px" class="CustomButtonGenerar mx-auto white--text rounded-pill">
    Generar nueva rutina
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
  font-family: "NotoSans-Regular";
  src: url("../assets/fonts/NotoSans-Regular.ttf");
}

/* Para las propiedades del boton flotante */
.CustomButtonGenerar {
  font-family: NotoSans-Regular, sans-serif !important;
  font-size: 30px !important;
  text-transform: none !important;
  position: -webkit-sticky;
  position: sticky;
  left: 48.2%;
  bottom: 25px;
  z-index: 3;
}

</style>