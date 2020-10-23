<template>
  <v-card style="border-radius: 25px;" color="#EDEAEA">

    <v-card-title>
      <p class="textoTitulo mx-auto">{{ title }}</p>
    </v-card-title>

    <v-card-text>
      <v-form class="mx-15">
        <v-text-field v-model="name" class="texto mt-7" label="name" height="60"
                      :rules="[rules.required(name), rules.counterMAX(name)]"
                      rounded background-color="white"/>
        <v-textarea label="Descripcion" v-model="descripcion" class="texto"
                    auto-grow rounded background-color="white" height="150"
                    :rules="[rules.required(descripcion), rules.counterMAXDESC(descripcion)]"
                    prepend-icon="mdi-text-short"/>
        <div style="width: 300px;" class="mt-4">
          <v-select :items="categories" label="Categoria" height="60" background-color="white" style="font-family: NotoSans-Regular, sans-serif;color: #8B8686;"
                    rounded v-model="categorieSelected"/>
        </div>
        <v-btn depressed color="white" min-width="240px" min-height="45px" class="rounded-pill mt-4 CustomButton">
          Agregar imagen o video
        </v-btn>
        <v-row>
          <v-col v-for="image in images" :key="image">
            <v-img :src="image"/>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-btn v-on:click="editCard()" depressed color="primary" min-width="290px" min-height="75px"
                 class="rounded-pill ma-4 CustomButton2 white--text">
            <v-icon>mdi-content-save-outline</v-icon>
            Guardar cambios
          </v-btn>
        </v-row>
      </v-form>
    </v-card-text>
    <v-btn icon color="grey darken-2" @click="$router.go(-1)"
           style="position: absolute; top: 4%; left: 3%; z-index: 1;">
      <v-icon size="80">mdi-chevron-left</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
import {ExercisesApi} from "@/api/exercises";

export default {
  name: "editExercise",
  props: ['title', 'id'],
  data: () => ({
    name: '',
    descripcion: '',
    categories: ['Biceps', 'Triceps', 'Pecho', 'Espalda', 'Abdominales', 'Piernas'],
    categorieSelected: null,
    images: [],
    rules: {
      required: value => !!value || 'Requerido.',
      counterMAX: value => value.length < 20 || 'Inserte menos de 20 caracteres.',
      counterMAXDESC: value => value.length < 100 || 'Inserte menos de 100 caracteres',
    },
  }),
  methods: {
    async editCard() {
      if (this.rules.required(this.name) !== true || this.rules.counterMAX(this.name) !== true
          || this.rules.required(this.descripcion) !== true || this.rules.counterMAXDESC(this.descripcion) !== true) {
        // SI FALLA ALGUNOS DE LOS REQUISITOS(SUCEDE CUANDO NO RETORNAN TRUE(ALGUNOS AL FALLAR RETORNAN UN STRING)), IMPIDO EL POST
        return
      }

      let result = null;
      if (this.title === "CREAR NUEVO EJERCICIO") {
        if ( this.categorieSelected == null ){
          return;
        }
        const data = {
          name: this.name,
          detail: this.descripcion,
          type: this.categorieSelected,
        },
        result = await ExercisesApi.postMasterExercise(data, null);
        console.log(result);
      } else {
        if ( this.categorieSelected != null){
          return;
        }
        const data = {
          name: this.name,
          detail: this.descripcion,
          id: this.id
        }
        result = await ExercisesApi.editMasterExercise(data, null);
      }
      if (!result.code) {
        location.assign("../ejercicios");
      } else
        console.log("ERROR");
    }
  },
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

.texto {
  font-family: NotoSans-Regular, sans-serif;
  font-size: 26px;
  color: #8B8686;
}

.CustomButton {
  font-family: NotoSans-Regular, sans-serif !important;
  font-size: 24px !important;
  text-transform: none !important;
}

.CustomButton2 {
  font-family: NotoSans-Regular, sans-serif !important;
  font-size: 28px !important;
  text-transform: none !important;
}
</style>