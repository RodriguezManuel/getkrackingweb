<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn slot="activator" v-bind="attrs" v-on="on" color="#FBAC31" width="24%" min-width="350px" min-height="90px" class="aux mx-auto white--text rounded-pill">
        Generar ejercicio nueva
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>NO IMPLEMENTADO</h2>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="grey darken-2"
            text
            @click="dialog = false"
        >
          Close
        </v-btn>
        <v-btn
            color="grey darken-2"
            text
            @click="dialog = false"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
name: "PopupAddExercise",
  data: () => ({
    dialog: false,
  }),
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