<template>
  <div>
    <side-bar/>
    <top-bar/>

    <v-container>
      <v-row justify="space-around">
        <v-card color="white" min-width="85%" style="border-radius: 25px">
          <v-row justify="space-around" class=" mt-3">
            <p class="titulo">RUTINA DE {{ creador }}</p>
          </v-row>

          <v-row>
            <v-col cols="8">
              <div style="max-width: 500px" class="mx-15">
                <v-text-field label="Nombre" type="text" v-model="nombre" class="textoRutina" disabled/>
                <v-textarea label="Descripcion" v-model="descripcion" class="textoRutina" rows="1" auto-grow disabled
                            prepend-icon="mdi-text-short"/>
                <v-row>
                  <v-icon x-large>mdi-clock-outline</v-icon>
                  <p class="my-auto textoRutina"> Duracion estimada en minutos: </p>
                  <v-spacer/>
                  <div style="width: 110px;" class="mt-6">
                    <v-text-field type="number" min="1" v-model="duracion" outlined disabled/>
                  </div>
                </v-row>
              </div>
              <v-row class="ml-15">
                <v-col>
                  <v-row class="mt-3" v-for="category in categories" :key="category.name">
                    <a class="textoCaracteristicas" style="margin-bottom: 0;">{{ category.name }}</a>
                    <v-spacer/>
                    <a v-for="n in 5" :key="n">
                      <v-icon x-large v-if="n <= category.value">
                        mdi-checkbox-blank-circle
                      </v-icon>
                      <v-icon x-large v-else>mdi-checkbox-blank-circle-outline</v-icon>
                    </a>
                  </v-row>
                </v-col>
                <v-col class="my-auto ml-4">
                </v-col>
              </v-row>
              <v-row justify="space-around">
                <a class="textoCaracteristicas my-10">
                  Requerimientos
                </a>
              </v-row>
              <v-row justify="space-around">
                <v-icon x-large class="mx-4" v-for="require in requires" :key="require.name"
                        :color="(require.value)? 'black' : 'gray'">
                  {{ require.name }}
                </v-icon>
              </v-row>
            </v-col>
            <v-col cols="4">
              <v-row justify="space-around">
                <v-card style="height: 240px; width: 290px" outlined>
                  <v-img height="100%" width="100%"
                         src="../../assets/images/workout.png"/>
                </v-card>
              </v-row>
              <v-row justify="space-around" class="mt-6">
                <v-btn width="300px" height="60px" color="#FBB13E" class="CustomButton rounded-pill white--text">
                  Reproducir
                </v-btn>
              </v-row>
              <v-row justify="space-around" class="mt-6">
                <v-btn width="300px" height="60px" class="CustomButton rounded-pill" @click="$router.go(-1)">
                  Volver
                </v-btn>
              </v-row>
              <v-row justify="center" class="mt-12">
                <p class="textoCaracteristicas">Mi puntuacion:</p>
              </v-row>
              <v-row justify="center" class="mt-2">
                <a v-for="n in 10" :key="n">
                  <v-icon medium v-if="n <= myRating" color="primary" @click="myRating = n">
                    fas fa-star
                  </v-icon>
                  <v-icon medium v-else color="gray darken-2" @click="myRating = n">
                    far fa-star
                  </v-icon>
                </a>
              </v-row>
            </v-col>
          </v-row>

          <v-spacer/>
          <p class="textoSecciones ml-12 mt-12">SECCIONES</p>

          <v-container v-for="section in sections" :key="section.name">
            <v-row class="justify-space-between">

              <v-col>
                <v-row>
                  <v-col>
                  </v-col>
                  <v-col>
                    <p class="textoCaracteristicas my-auto mx-auto">{{ section.name }}</p>
                  </v-col>
                </v-row>
              </v-col>

              <v-col>
                <div style="width: 250px;">
                  <v-row justify="space-around">
                    <div style="width: 110px;">
                      <v-text-field v-model="section.series" type="numeric" min="1" outlined disabled/>
                    </div>
                  </v-row>
                </div>
              </v-col>

              <v-col>
                <p class="textoCaracteristicas" style="text-align: center">Modo</p>
              </v-col>

              <v-col>
                <p class="textoCaracteristicas" style="text-align: center">quantity</p>
              </v-col>

            </v-row>
            <v-row v-for="exercise in section.exercises" :key="exercise.id">
              <v-col cols="5">
                <v-text-field v-model="exercise.name" outlined prepend-icon="mdi-menu"/>
              </v-col>
              <v-col style="text-align: center">
                <v-icon class="mt-3" x-large @click="exercise.repetitions = false"
                        :color="(!exercise.repetitions)? 'black':'gray'">
                  mdi-sync
                </v-icon>
                <v-icon class="mt-3" x-large @click="exercise.repetitions = true"
                        :color="(exercise.repetitions)? 'black':'gray'">
                  mdi-timer-outline
                </v-icon>
              </v-col>
              <v-col>
                <div style="width: 250px;">
                  <v-row justify="space-around">
                    <div style="width: 110px;">
                      <v-text-field v-model="exercise.quantity" type="numeric" min="1" outlined disabled/>
                    </div>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </v-container>

          <v-btn fab text color="grey darken-2" @click="$router.go(-1)"
                 style="position: absolute; top: 1%; left: 2%; z-index: 1;">
            <v-icon size="85">
              mdi-chevron-left
            </v-icon>
          </v-btn>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar"
import TopBar from "@/components/TopBar"
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  name: "VisualizarRutina",
  components: {SideBar, TopBar},
  data() {
    return {
      creador: 'mbeh',
      nombre: '',
      descripcion: '',
      duracion: 5,
      myRating: 7,
      rating: 5,
      foto: false,
      categories: [{name: 'Dificultad', value: 3}, {name: 'Flexibilidad', value: 3},
        {name: 'Resistencia', value: 3}, {name: 'Fuerza', value: 3,}],
      requires: [{name: 'fas fa-dumbbell', value: false}, {
        name: 'far fa-futbol',
        value: false
      }, {name: 'fas fa-football-ball', value: false}, {name: 'mdi-yoga', value: false}],
      sections: [],
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: "NotoSans-Regular";
  src: url("../../assets/fonts/NotoSans-Regular.ttf");
}

@font-face {
  font-family: "NotoSans-Bold";
  src: url("../../assets/fonts/NotoSans-Bold.ttf");
}

.titulo {
  font-family: NotoSans-Regular, sans-serif;
  font-size: 55px;
  text-align: center;
  color: #8B8686;
  letter-spacing: 4px;
}

.textoRutina {
  font-size: 24px;
  font-family: NotoSans-Regular, sans-serif;
  color: #8B8686;
}

.textoCaracteristicas {
  font-family: NotoSans-Regular, sans-serif;
  color: #8B8686;
  font-size: 28px;
}

.textoSecciones {
  font-family: NotoSans-Bold, sans-serif;
  font-size: 32px;
  color: #8B8686;
}

/* Para las propiedades de los botones */
.CustomButton {
  font-family: NotoSans-Regular, sans-serif !important;
  font-size: 20px !important;
  text-transform: none !important;
}
</style>