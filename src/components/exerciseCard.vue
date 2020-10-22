<template>
  <v-card width="380px" height="100%" color="#4DB6AC" style="border-radius:25px">
    <div style="height: 35px">
      <p class="nombre">{{ exercise_object }}</p>
    </div>
    <v-img :src="require('../assets/images/workout.png')" alt="Imagen rutina" class="ma-5"></v-img>

    <v-btn large icon style="position: absolute; top: 2%; right: 5px; z-index: 1;" to="/editar_ejercicio">
      <v-icon color="black">mdi-pencil</v-icon>
    </v-btn>
    <v-btn large icon style="position: absolute; top: 2%; left: 5px; z-index: 1;">
      <v-icon color="black">mdi-trash-can-outline</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: "exerciseCard",
  props: ["exercise_object"],
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