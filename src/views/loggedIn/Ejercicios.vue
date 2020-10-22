<template>
  <div>
    <side-bar/>
    <top-bar/>

    <v-container>

      <v-card style="width: 98%; height: 75px; margin-left: 1%; border-radius: 36px">
        <v-row style="width: 98%;" class="ma-1">
          <v-col class="ml-4">
            <v-select :items="grupoMuscular" label="Grupo muscular" solo flat append-icon="mdi-menu-swap" class="opciones"/>
          </v-col>

          <v-col>
            <v-select :items="intensidad" label="Intensidad" solo flat append-icon="mdi-menu-swap" class="opciones"/>
          </v-col>

          <v-col>
            <div>
              <v-text-field v-model="search" label="Buscar por nombre" prepend-icon="mdi-magnify" class="opciones" solo flat/>
            </div>
          </v-col>
        </v-row>
      </v-card>
      <v-row class="my-10" justify="space-around">
        <v-col  v-for="n in exercises.length" :key="n">
          <exercise-card  :exercise_object='exercises[n-1]' class="mx-auto"/>
        </v-col>
      </v-row>


    </v-container>

    <boton-generar texto="Generar nuevo ejercicio" path="/generar_ejercicio"/>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar"
import TopBar from "@/components/TopBar"
import ExerciseCard from "@/components/exerciseCard";
import { ExercisesApi } from "@/api/exercises";
import BotonGenerar from "@/components/BotonGenerar";

export default {
  name: "exercises",
  components: {BotonGenerar, ExerciseCard, TopBar, SideBar},
  data() {
    return {
      exercises : [],
      grupoMuscular: ['Biceps', 'Triceps', 'Pecho', 'Espalda', 'Abdominales', 'Piernas', 'Todos'],
      intensidad: ['Sin orden', 'Ascendente', 'Descendente'],
      search: '',
    }
  },
  async created()  {
    this.exercises = await ExercisesApi.getExercises()
  },

}
</script>

<style scoped>
@font-face {
  font-family: "NotoSans-Regular";
  src: url("../../assets/fonts/NotoSans-Regular.ttf");
}

.opciones {
  font-size: 20px;
  font-family: NotoSans-Regular,sans-serif;
}
</style>