<template>
  <v-card width="380px" height="100%" color="#4DB6AC" style="border-radius:25px">
    <div style="height: 30px">
      <p class="nombre">{{ nombre }}</p>
    </div>
    <v-row >
      <v-col cols="7">
        <v-img :src="require('../assets/images/workout.png')" alt="Imagen rutina" style="margin-left: 5px"></v-img>

        <div style="text-align: center;">
          <v-icon small color="#FFFFFF"> mdi-clock-time-five-outline</v-icon>
          <a class="texto"> {{ time }} minutos</a>
        </div>
      </v-col>

      <v-col>
        <p class="texto" style="margin-bottom: 0;">Dificultad</p>
        <div>
          <a v-for="n in 5" :key="n">
            <v-icon small v-if="n <= dif">mdi-checkbox-blank-circle</v-icon>
            <v-icon small v-else>mdi-checkbox-blank-circle-outline</v-icon>
          </a>
        </div>
        <div>
          <p class="texto" style="margin-bottom: 0;">Flexibilidad</p>
          <a v-for="n in 5" :key="n">
            <v-icon small v-if="n <= flex">mdi-checkbox-blank-circle</v-icon>
            <v-icon small v-else>mdi-checkbox-blank-circle-outline</v-icon>
          </a>
        </div>
      </v-col>
    </v-row>

    <v-row class="mx-3" style="margin-top:-10px">
      <p class="texto">{{ descripcion }}</p>
    </v-row>

    <v-btn x-large icon @click="favorite = !favorite" style="position: absolute; top: 4%; right: 3px; z-index: 1;">
      <v-icon color="pink">{{ (favorite === true) ? 'mdi-heart' : 'mdi-heart-plus-outline' }}</v-icon>
    </v-btn>

    <v-btn small icon v-if="instrumentos" style="position: absolute; top: 20%; right: 13px; z-index: 1;">
      <v-icon color="black">fas fa-dumbbell</v-icon>
    </v-btn>

    <v-btn large icon style="position: absolute; top: 29%; right: 7px; z-index: 1;">
      <v-icon color="black">mdi-pencil</v-icon>
    </v-btn>

    <v-btn large icon style="position: absolute; top: 40%; right: 7px; z-index: 1;">
      <v-icon color="black">mdi-trash-can-outline</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  name: "workoutCard",
  data() {
    return {
      nombre: 'NOMBRE RUTINA',
      time: 5,
      dif: 3,
      flex: 1,
      descripcion: 'Gana resistencia muscular y energizate con esta rutina de abdominales y piernas.',
      instrumentos: true,
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

@font-face {
  font-family: "NotoSans-Regular";
  src: url("../assets/fonts/NotoSans-Regular.ttf");
}

.nombre {
  font-family: NotoSans-Bold;
  font-size: 26px;
  text-align: center;
  color: #FFFFFF;
  position: relative;
  top: 5px;
}

.texto {
  font-family: NotoSans-Regular;
  font-size: 16px;
  color: #FFFFFF;
}

</style>