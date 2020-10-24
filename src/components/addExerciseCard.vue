<template>
  <v-card width="380px" height="100%" :color="(!added)? '#4DB6AC' : 'primary'" style="border-radius:25px">
    <div style="height: 35px">
      <p class="nombre">{{ exercise_object.name }}</p>
    </div>
    <v-img :src="require('../assets/images/workout.png')" alt="Imagen rutina" class="ma-5"></v-img>
    <v-btn v-if="!added" v-on:click="addExercise()" large icon
           style="position: absolute; top: 2%; right: 5px; z-index: 1;">
      <v-icon size="80" color="gray">mdi-plus</v-icon>
    </v-btn>
    <v-btn v-else v-on:click="deleteExercise()" large icon style="position: absolute; top: 2%; right: 5px; z-index: 1;">
      <v-icon size="50" color="gray">mdi-delete</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: "addExerciseCard",
  props: ["exercise_object", "addedExercises"],
  data() {
    return {
      added: false,
    }
  },
  methods: {
    addExercise() {
      this.added = true;
      this.addedExercises.push(this.exercise_object);
    },
    deleteExercise() {
      this.added = false;
      const index = this.addedExercises.indexOf(this.exercise_object);
      if(index > -1)
        this.addedExercises.splice(index, 1);
      else
        console.log("ERROR: SE INTENTO REMOVER ALGO INEXISTENTE DE LA LISTA DE EJERCICIOS");
    }
  }

}
</script>

<style scoped>
@font-face {
  font-family: "NotoSans-Bold";
  src: url("../assets/fonts/NotoSans-Bold.ttf");
}

.nombre {
  font-family: NotoSans-Bold, sans-serif;
  font-size: 26px;
  text-align: center;
  color: #FFFFFF;
  position: relative;
  top: 5px;
}


</style>