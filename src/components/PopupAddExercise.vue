<template>
  <v-dialog v-model="dialog" persistent max-width="1500px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn slot="activator" color="primary" height="40px" class="mr-4 rounded-pill white--text CustomButton"
             v-bind="attrs" v-on="on">
        Agregar ejercicio
      </v-btn>
    </template>
    <v-card style="border-radius:25px">
      <v-card-title>
        <p class="titulo mx-auto mt-5">SELECCIONAR EJERCICIOS</p>
        <v-row class="my-10" justify="space-around">
          <v-col v-for="n in exercises.length" :key="n">
            <add-exercise-card :exercise_object='exercises[n-1]' :addedExercises='addedExercises' class="mx-auto"/>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-actions>
        <v-spacer/>
        <v-btn
            @click="save()"
            class="CustomButton2 white--text rounded-pill mb-5"
            color="primary" width="300px" height="60px"
        >
          Guardar
        </v-btn>
        <v-spacer/>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {ExercisesApi} from "@/api/exercises";
import AddExerciseCard from "@/components/addExerciseCard";

export default {
  name: "PopupAddExercise",
  components: {AddExerciseCard},
  props: ["addedExercises"],
  data() {
    return {
      dialog: false,
      exercises: [],
    }
  },
  async created() {
    this.exercises = await ExercisesApi.getExercises()
  },
  methods: {
    cancel() {
      this.dialog = false;
    },
    save() {
      console.log("GUARDADO");
      console.log(this.addedExercises);
      this.dialog = false;
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: "Gotham-Medium";
  src: url("../assets/fonts/Gotham-Medium.ttf");
}

.CustomButton {
  font-family: Gotham-Medium, sans-serif !important;
  font-size: 20px !important;
  text-transform: none !important;
}

.CustomButton2 {
  font-family: Gotham-Medium, sans-serif !important;
  font-size: 32px !important;
  text-transform: none !important;
}

.titulo {
  text-align: center;
  font-family: Gotham-Medium, sans-serif;
  font-size: 42px;
  color: #8B8686;
}

</style>