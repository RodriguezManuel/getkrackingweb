<template>
  <v-dialog v-model="dialog" persistent max-width="700px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn slot="activator" v-bind="attrs" v-on="on" color="primary" width="24%" min-width="350px" min-height="90px"
             class="CustomButton2 mx-auto white--text rounded-pill">
        Generar nuevo ejercicio
      </v-btn>
    </template>
    <v-card style="border-radius: 25px;" color="#EDEAEA">

      <v-card-title>
        <p class="textoTitulo mx-auto">CREAR NUEVO EJERCICIO</p>
      </v-card-title>

      <v-card-text>
        <v-form class="mx-15">
          <v-text-field v-model="nombre" class="textoNombre mt-7" label="Nombre"
                        :rules="[rules.required(nombre), rules.counterMAX(nombre)]"
                        rounded background-color="white"/>
          <v-textarea label="Descripcion" v-model="descripcion" class="textoRutina"
                      auto-grow rounded background-color="white"
                      :rules="[rules.required(descripcion), rules.counterMAXDESC(descripcion)]"
                      prepend-icon="mdi-text-short"/>
          <v-btn depressed color="white" min-width="240px" min-height="45px" class="rounded-pill mt-4 CustomButton">
            Agregar imagen o video</v-btn>
        </v-form>
      </v-card-text>


      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" depressed min-width="280px" min-height="65px" @click="dialog = true"
               class="rounded-pill white--text CustomButton mb-7">
          Guardar rutina
        </v-btn>
        <v-btn icon @click="dialog = false" style="position: absolute; top: 17px; left: 4%;">
          <v-icon x-large color="gray darken-2">mdi-close</v-icon>
        </v-btn>
        <v-spacer/>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "PopupAddExercise",
  data: () => ({
    dialog: false,
    nombre: '',
    descripcion: '',
    rules: {
      required: value => !!value || 'Requerido.',
      counterMAX: value => value.length < 20 || 'Inserte menos de 20 caracteres.',
      counterMAXDESC: value => value.length < 100 || 'Inserte menos de 100 caracteres',
    },
  }),
}
</script>

<style scoped>
@font-face {
  font-family: "NotoSans-Regular";
  src: url("../assets/fonts/NotoSans-Regular.ttf");
}

.textoTitulo {
  font-family: NotoSans-Regular, sans-serif;
  font-size: 35px;
  color: #8B8686;
  letter-spacing: 4px;
}

/* Para las propiedades del boton flotante que abre el popup */
.CustomButton2 {
  font-family: NotoSans-Regular, sans-serif !important;
  font-size: 26px !important;
  text-transform: none !important;
  position: -webkit-sticky;
  position: sticky;
  left: 48.2%;
  bottom: 25px;
  z-index: 3;
}

.CustomButton{
  font-family: NotoSans-Regular, sans-serif !important;
  font-size: 24px !important;
  text-transform: none !important;
}

</style>