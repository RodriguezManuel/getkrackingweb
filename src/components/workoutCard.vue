<template>
  <div>

    <div>
      <v-card width="338px" height="222px" color="#4DB6AC" style="border-radius:15px">
        <p class="nombre"> NOMBRE RUTINA</p>
        <v-row style="margin-top: -20px">
          <v-col>
            <v-img :src="require('../assets/images/workout.png')" alt="Imagen rutina" style="margin-left: 5px"></v-img>
          </v-col>

          <v-col>
            <v-row>
              <p class="texto">Dificultad</p>
            </v-row>
            <v-row style="margin-top:-20px">
              <p v-for="n in 5" :key="n">
                <v-icon small v-if="n<=dif">mdi-checkbox-blank-circle</v-icon>
                <v-icon small v-else>mdi-checkbox-blank-circle-outline</v-icon>
              </p>
            </v-row>
            <v-row>
              <p class="texto">Flexibilidad</p>
            </v-row>
            <v-row style="margin-top:-20px">
              <p v-for="n in 5" :key="n">
                <v-icon small v-if="n<=flex">mdi-checkbox-blank-circle</v-icon>
                <v-icon small v-else>mdi-checkbox-blank-circle-outline</v-icon>
              </p>
            </v-row>
          </v-col>
        </v-row>

        <div style="margin-top:-15px; margin-left: 30px">
          <v-row>
            <v-icon small style="margin-top:-10px" color="#FFFFFF"> mdi-clock-time-five-outline</v-icon>
            <p class ="duracion" style="margin-top: 5px" color="#FFFFFF">5 minutos</p>
          </v-row>
        </div>

        <v-row style="margin-top:-10px">
          <p class="descripcion">Gana resistencia muscular y energizate con esta rutina de abdominales y piernas.</p>
        </v-row>

      </v-card>


    </div>
  </div>
</template>

<script>
export default {
  name: "workoutCard",
  data() {
    return {
      dif: 3,
      flex:1
    }
  }
}
</script>

<style scoped>

.nombre {
  margin-top: 15px;
  font-family: NotoSansBold;
  font-size: 20px;
  text-align: center;
  color: #FFFFFF;
}
.texto {
  font-family: NotoSans-Regular;
  font-size: 13px;
  color: #FFFFFF;
}

.duracion {
  font-family: NotoSans-Regular;
  font-size: 11px;
  color: #FFFFFF;
}

.descripcion{
  font-family:NotoSans-Bold;
  font-size: 12px;
  color:#ffffff;
  text-align: center;
  margin-left: 5%;
  margin-right: 5%;

}

</style>