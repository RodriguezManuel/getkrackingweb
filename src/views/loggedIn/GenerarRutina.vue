<template>
  <div>

    <side-bar/>
    <top-bar/>

    <v-container>
      <v-row justify="space-around">
        <v-card color="white" min-width="85%" style="border-radius: 25px">
          <v-row justify="space-around" class=" mt-3">
            <p class="titulo">NUEVA RUTINA</p>
          </v-row>

          <v-row>
            <v-col cols="8">
              <div style="max-width: 500px" class="mx-15">
                <v-text-field label="Nombre de rutina" type="text" v-model="nombre" class="textoRutina"
                              :rules="[rules.required(nombre), rules.counterMAX(nombre), rules.counterMIN(nombre)]"/>
                <v-textarea label="Descripcion" v-model="descripcion" class="textoRutina" rows="1" auto-grow
                            :rules="[rules.required(descripcion), rules.counterMAXDESC(descripcion), rules.counterMIN(descripcion)]"
                            prepend-icon="mdi-text-short"/>
                <v-row>
                  <v-icon x-large>mdi-clock-outline</v-icon>
                  <p class="my-auto textoRutina"> Duracion estimada en minutos: </p>
                  <v-spacer/>
                  <div style="width: 110px;" class="mt-6">
                    <v-text-field type="number" min="1" v-model="duracion" outlined
                                  :rules="[rules.required(duracion), rules.valorMIN(duracion)]"/>
                  </div>
                </v-row>
              </div>
              <v-row class="ml-15">
                <v-col>
                  <v-row class="mt-3" v-for="category in categories" :key="category.name">
                    <a class="textoCaracteristicas" style="margin-bottom: 0;">{{ category.name }}</a>
                    <v-spacer/>
                    <a v-for="n in 5" :key="n">
                      <v-icon x-large v-if="n <= category.value" @click="category.value = n">
                        mdi-checkbox-blank-circle
                      </v-icon>
                      <v-icon x-large v-else @click="category.value = n">mdi-checkbox-blank-circle-outline</v-icon>
                    </a>
                  </v-row>
                </v-col>
                <v-col class="my-auto ml-4">
                  <v-btn class="rounded-pill CustomButton" x-large>
                    Agregar etiqueta
                  </v-btn>
                </v-col>
              </v-row>
              <v-row justify="space-around">
                <a class="textoCaracteristicas my-10">
                  Requerimientos - Seleccionar los que apliquen
                </a>
              </v-row>
              <v-row justify="space-around">
                <v-icon x-large class="mx-4" v-for="require in requires" @click="require.value= !require.value"
                        :key="require.name" :color="(require.value)? 'black' : 'gray'">
                  {{ require.name }}
                </v-icon>
              </v-row>
            </v-col>
            <v-col cols="4">
              <v-row justify="space-around">
                <v-card style="height: 240px; width: 290px" outlined>
                  <div v-if="foto === false" style="height: 100%">
                    <h1 @click="foto = true" class="textoFoto">Añadir foto</h1>
                  </div>
                  <v-img height="100%" width="100%" v-else
                         src="../../assets/images/workout.png"/>
                </v-card>
              </v-row>
              <v-row justify="space-around" class="mt-6">
                <v-btn v-on:click="generateRoutine()" width="300px" height="60px" color="#FBB13E" class="CustomButton rounded-pill white--text">
                  Publicar
                </v-btn>
              </v-row>
              <v-row justify="space-around" class="mt-6">
                <v-btn width="300px" height="60px" class="CustomButton rounded-pill">Guardar borrador</v-btn>
              </v-row>
              <v-row justify="space-around" class="mt-6">
                <v-btn width="300px" height="60px" class="CustomButton rounded-pill" to="/rutinas">Eliminar</v-btn>
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
                    <v-btn v-on:click="removeSection(section, sections)" large icon class="ml-6">
                      <v-icon size="45" color="gray">mdi-delete</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col>
                    <p class="textoCaracteristicas my-auto mx-auto">{{ section.name }}</p>
                  </v-col>
                </v-row>
              </v-col>

              <v-col>
                <div style="width: 250px;">
                  <v-row justify="space-around">
                    <v-icon class="mb-6" x-large @click="(section.series > 1)? section.series-- : null">fas fa-minus
                    </v-icon>
                    <div style="width: 110px;">
                      <v-text-field v-model="section.series" type="numeric" min="1" outlined
                                    :rules="[rules.required(section.series), rules.valorMIN(section.series)]"/>
                    </div>
                    <v-icon class="mb-6" x-large @click="section.series++">fas fa-plus</v-icon>
                  </v-row>
                </div>
              </v-col>

              <v-col>
                <p class="textoCaracteristicas" style="text-align: center">Modo</p>
              </v-col>

              <v-col>
                <p class="textoCaracteristicas" style="text-align: center">quantity</p>
              </v-col>

              <v-col>
                <popup-add-exercise class="mt-9" :added-exercises="section.exercises"/>
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
                    <v-icon class="mb-6" x-large @click="(exercise.quantity > 1)? exercise.quantity-- : null">fas
                      fa-minus
                    </v-icon>
                    <div style="width: 110px;">
                      <v-text-field v-model="exercise.quantity" type="numeric" min="1" outlined
                                    :rules="[rules.required(exercise.quantity), rules.valorMIN(exercise.quantity)]"/>
                    </div>
                    <v-icon class="mb-6" x-large @click="exercise.quantity++">fas fa-plus</v-icon>
                  </v-row>
                </div>
              </v-col>
              <v-col>
                <v-icon x-large class="mt-3" @click="removeExercise(exercise, section.exercises)">mdi-close</v-icon>
              </v-col>
            </v-row>
          </v-container>

          <v-row justify="center">
            <div style="width: 300px; height: 60px" class="mr-4">
              <v-select :items="possibleSections"
                  label="Tipo de seccion"
                  v-model="selectedSection"
                  outlined class="textoRutina"
              ></v-select>
            </div>
            <v-btn @click="addSection()" width="300px" height="60px" class="CustomButton rounded-pill ml-4 mb-7">
              Agregar
            </v-btn>
          </v-row>

          <v-btn fab text color="grey darken-2" @click="$router.go(-1)"
                 style="position: absolute; top: 1%; left: 5%; z-index: 1;">
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
import PopupAddExercise from "@/components/PopupAddExercise";
import { RoutineApi} from "@/api/routines";
import { ExercisesApi} from "@/api/exercises";

export default {
  name: "GenerarRutina",
  components: {PopupAddExercise, SideBar, TopBar},
  data() {
    return {
      nombre: '',
      descripcion: '',
      duracion: 5,
      foto: false,
      categories: [{name: 'Dificultad', value: 3}, {name: 'Flexibilidad', value: 3},
        {name: 'Resistencia', value: 3}, {name: 'Fuerza', value: 3,}],
      requires: [{name: 'fas fa-dumbbell', value: false}, {
        name: 'far fa-futbol',
        value: false
      }, {name: 'fas fa-football-ball', value: false}, {name: 'mdi-yoga', value: false}],
      possibleSections: ['warmup', 'exercise', 'cooldown'],
      selectedSection: 'exercise',
      sections: [],
      rules: {
        required: value => !!value || 'Requerido.',
        counterMAX: value => value.length < 20 || 'Inserte menos de 20 caracteres.',
        counterMIN: value => value.length > 6 || 'Inserte mas de 6 caracteres.',
        counterMAXDESC: value => value.length < 100 || 'Inserte menos de 100 caracteres',
        valorMIN: value => value > 0 || 'Duracion invalida.'
      },
    }
  },
  methods: {
    addSection() {
      this.sections.push({name: this.selectedSection, series: 1, exercises: []});
    },
    removeSection(section, sections) {
      const index = sections.indexOf(section);
      if (index > -1)
        sections.splice(index, 1);
      else
        console.log("ERROR: SE INTENTO REMOVER ALGO INEXISTENTE DE LA LISTA DE EJERCICIOS");
    },
    removeExercise(exercise, exercises) {
      const index = exercises.indexOf(exercise);
      if (index > -1)
        exercises.splice(index, 1);
      else
        console.log("ERROR: SE INTENTO REMOVER ALGO INEXISTENTE DE LA LISTA DE EJERCICIOS");
    },
    async generateRoutine(){
      if(this.rules.required(this.nombre) !== true || this.rules.counterMAX(this.nombre) !== true || this.rules.counterMIN(this.nombre) !== true
          || this.rules.required(this.descripcion) !== true || this.rules.counterMAXDESC(this.descripcion) !== true || this.rules.counterMIN(this.descripcion) !== true
          || this.rules.required(this.duracion) !== true || this.rules.valorMIN(this.duracion) !== true){
        // SI FALLA ALGUNOS DE LOS REQUISITOS(SUCEDE CUANDO NO RETORNAN TRUE(ALGUNOS AL FALLAR RETORNAN UN STRING)), IMPIDO EL POST
        return
      }
      console.log(this.categories[0].value);
      const id = await RoutineApi.newRoutine(this.nombre, this.descripcion , this.categories[0].value , null);
      let cycle_id;
      let i , j ;
      let data_exercise = {
        name: '',
        detail: '',
      }
      for( i = 0  ; i < this.sections.length;i++ ){
        cycle_id = await RoutineApi.addCycle(this.sections[i].name , i +1 , this.sections[i].series , id , null);
        for ( j = 0 ; j < this.sections[i].exercises.length ; j++){
          data_exercise.name = this.sections[i].exercises[j].name;
          data_exercise.detail = this.sections[i].exercises[j].detail;
          console.log( 'Adding exercise: ' + data_exercise.name + ' With details: ' + data_exercise.detail);
          await ExercisesApi.addExercise( data_exercise , id , cycle_id , null);
        }
      }
      console.log("sent routine id: " +id);
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

.textoFoto {
  font-family: NotoSans-Regular, sans-serif;
  color: #8B8686;
  font-size: 28px;
  text-decoration: underline;
  text-align: center;
  position: relative;
  top: 45%;
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