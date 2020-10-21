<template>
  <v-dialog v-model="dialog" persistent max-width="700px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn slot="activator" v-bind="attrs" v-on="on" color="#FBAC31" width="24%" min-width="350px" min-height="90px"
             class="aux mx-auto white--text rounded-pill">
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
          <v-btn depressed color="white" min-width="240px" min-height="45px" class="rounded-pill mt-4 CustomButton">Seleccionar imagen</v-btn>
        </v-form>
      </v-card-text>


      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="#FBAC31" depressed min-width="280px" min-height="65px" @click="dialog = false"
               class="rounded-pill white--text CustomButton mb-7">
          Guardar rutina
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

/* Para las propiedades del boton flotante que abre el popup,
 el div.aux me permite evitar que herede las propiedades del boton del padre(componente donde sea contenido) */
.v-btn.v-size--default.aux {
  font-family: NotoSans-Regular, sans-serif;
  font-size: 26px;
  text-transform: none;
  text-decoration: none;
}

/* Para que no tome el default que es relative y pueda seguir el scrolleo de la pantalla*/
.aux {
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