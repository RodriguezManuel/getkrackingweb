<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn slot="activator" color="#FBAC31" class="mr-4 rounded-pill white--text" v-bind="attrs" v-on="on">
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
        >
          Close
        </v-btn>
        <v-btn
            color="blue darken-1"
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
  name: "PopupAddEvent",
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

/* Para las propiedades de los botones del calendario */
.v-btn.v-size--default {
  font-family: GothamMedium;
  font-size: 16px;
  text-transform: none;
}
</style>