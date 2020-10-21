<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn slot="activator" color="primary" class="mr-4 rounded-pill white--text CustomButton2" v-bind="attrs" v-on="on" >
        Nuevo evento
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>NO IMPLEMENTADO</h2>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
            class="CustomButton"
        >
          Close
        </v-btn>
        <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
            class="CustomButton"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "PopupAddEvent",
  data: () => ({
    dialog: false,
  }),
}
</script>

<style scoped>
@font-face {
  font-family: "Gotham-Medium";
  src: url("../assets/fonts/Gotham-Medium.ttf");
}

/*Para que los botones del calendario tengan las propiedades buscadas*/
.CustomButton {
  font-family: Gotham-Medium, sans-serif !important;
  font-size: 20px !important;
  text-transform: none !important;
}

.CustomButton2 {
  font-family: Gotham-Medium, sans-serif !important;
  font-size: 16px !important;
  text-transform: none !important;
}

</style>