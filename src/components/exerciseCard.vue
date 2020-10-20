<template>
  <v-card width="380px" height="100%" color="#4DB6AC" style="border-radius:25px">
    <div style="height: 35px">
      <p class="nombre">{{ nombre }}</p>
    </div>
    <v-img :src="require('../assets/images/workout.png')" alt="Imagen rutina" class="ma-5"></v-img>

    <v-btn x-large icon @click="favorite = !favorite" style="position: absolute; top: 2%; right: 3px; z-index: 1;">
      <v-icon color="pink">{{ (favorite === true) ? 'mdi-heart' : 'mdi-heart-plus-outline' }}</v-icon>
    </v-btn>

  </v-card>
</template>

<script>
export default {
  name: "exerciseCard",
  data() {
    return {
      nombre: 'NOMBRE EJERCICIO',
      favorite: false,
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
  font-family: NotoSans-Bold;
  font-size: 26px;
  text-align: center;
  color: #FFFFFF;
  position: relative;
  top: 5px;
}

</style>