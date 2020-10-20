<template>
  <v-card width="380px" height="100%" color="#4DB6AC" style="border-radius:25px">
    <div style="height: 35px">
      <p class="nombre">{{ nombre }}</p>
    </div>
    <v-img :src="require('../assets/images/workout.png')" alt="Imagen rutina" class="ma-5"></v-img>
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
  font-family: NotoSans-Bold, sans-serif;
  font-size: 26px;
  text-align: center;
  color: #FFFFFF;
  position: relative;
  top: 5px;
}

</style>