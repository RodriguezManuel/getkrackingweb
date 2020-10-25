<template>
  <v-container>
    <v-row justify="space-around">
      <v-card color="white" min-width="85%" style="border-radius: 25px">
        <v-row justify="space-around" class=" mt-3">
          <p class="titulo">{{ titulo }}</p>
        </v-row>

        <v-row>
          <v-col cols="8">
            <div style="max-width: 500px" class="mx-15">
              <v-row>
                <v-text-field label="Nombre de rutina" type="text" v-model="nombre" class="textoRutina"
                              :rules="[rules.required(nombre), rules.counterMAX(nombre)]"/>
                <v-icon small color="red">mdi-asterisk</v-icon>
              </v-row>
              <v-row>
                <v-textarea label="Descripcion" v-model="descripcion" class="textoRutina" rows="1" auto-grow
                            :rules="[rules.required(descripcion), rules.counterMAXDESC(descripcion)]"
                            prepend-icon="mdi-text-short"/>
                <v-icon small color="red">mdi-asterisk</v-icon>
              </v-row>
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
                  <div>
                    <a v-for="n in 5" :key="n">
                      <v-icon x-large v-if="n <= category.value" @click="category.value = n">
                        mdi-checkbox-blank-circle
                      </v-icon>
                      <v-icon x-large v-else @click="category.value = n">mdi-checkbox-blank-circle-outline</v-icon>
                    </a>
                  </div>
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
                <v-img height="100%" width="100%"
                       src="../assets/images/workout.png"/>
              </v-card>
            </v-row>
            <v-row justify="space-around" class="mt-6">
              <v-btn v-on:click="generateRoutine()" width="300px" height="60px" color="#FBB13E"
                     class="CustomButton rounded-pill white--text">
                Publicar
              </v-btn>
            </v-row>
            <v-row justify="space-around" class="mt-6">
              <v-btn width="300px" height="60px" class="CustomButton rounded-pill">Guardar borrador</v-btn>
            </v-row>
            <v-row justify="space-around" class="mt-6">
              <v-btn width="300px" height="60px" class="CustomButton rounded-pill" to="/rutinas">Eliminar</v-btn>
            </v-row>

            <v-row class="my-15" justify="center" v-if="loading">
              <v-progress-circular size="80" width="15" style="position: relative; top: 40%"
                                   indeterminate
                                   color="primary"/>
            </v-row>
          </v-col>
        </v-row>

        <v-spacer/>
        <p class="textoSecciones ml-12 mt-12">SECCIONES</p>

        <v-container v-for="(section, index) in sections" :key="index">
          <v-row class="justify-space-between">

            <v-col>
              <v-row>
                <v-col>
                  <!--                  Condicion de que la rutina no sea una nueva y la seccion no haya sido ya limpiada-->
                  <v-btn v-if="id !== 0 && !section.cleaned"
                         @click="cleanSection(section)"
                         class="ml-3 my-auto CustomButton rounded-pill">
                    Limpiar seccion
                  </v-btn>

                  <!-- solo se pueden remover las secciones exercise agregadas(arrancan desde el indice 2) que ya fueron limpiadas-->
                  <v-btn v-on:click="removeSection(section, sections)" large icon class="ml-6"
                         v-else-if="section.name === 'exercise' && index !== 1">
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
              <popup-add-exercise class="mt-9" :added-exercises="section.exercises" v-if="section.cleaned"/>
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
              <div></div>
            </v-col>
          </v-row>

          <v-row justify="center" v-if="index === (sections.length-2)">
            <!--              solo se pueden agregar secciones de ejercicios-->
            <v-btn @click="addSection()" width="450px" height="60px" class="CustomButton rounded-pill ml-4 mb-7">
              Agregar otra seccion principal
            </v-btn>
          </v-row>
        </v-container>

        <v-btn fab text color="grey darken-2" @click="$router.go(-1)"
               style="position: absolute; top: 1%; left: 5%; z-index: 1;">
          <v-icon size="85">
            mdi-chevron-left
          </v-icon>
        </v-btn>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
import PopupAddExercise from "@/components/PopupAddExercise";
import {RoutineApi} from "@/api/routines";
import {ExercisesApi} from "@/api/exercises";
import {CycleApi} from "@/api/cycle";

export default {
  name: "EditarRutinaComp",
  components: {PopupAddExercise},
  props: ['titulo', 'id'],
  data() {
    return {
      loading: true,
      nombre: '',
      descripcion: '',
      duracion: 5,
      categories: [{name: 'Dificultad', value: 3}, {name: 'Flexibilidad', value: 3},
        {name: 'Resistencia', value: 3}, {name: 'Fuerza', value: 3,}],
      requires: [{name: 'fas fa-dumbbell', value: false}, {
        name: 'far fa-futbol',
        value: false
      }, {name: 'fas fa-football-ball', value: false}, {name: 'mdi-yoga', value: false}],
      sections: [],
      rules: {
        required: value => !!value || 'Requerido.',
        counterMAX: value => value.length < 20 || 'Inserte menos de 20 caracteres.',
        counterMAXDESC: value => value.length < 100 || 'Inserte menos de 100 caracteres',
        valorMIN: value => value > 0 || 'Duracion invalida.'
      },
    }
  },
  methods: {
    addSection() {
      this.sections.splice(this.sections.length - 1, 0, {name: 'exercise', series: 1, exercises: [], cleaned: true});
      // agrego la seccion exercise antes de cooldown
    },
    removeSection(section, sections) {
      const index = sections.indexOf(section);
      if (index > -1)
        sections.splice(index, 1);
      else
        console.log("ERROR: SE INTENTO REMOVER ALGO INEXISTENTE DE LA LISTA DE EJERCICIOS");
    },
    cleanSection(section) {
      section.cleaned = true;
      CycleApi.deleteAllCycles(this.id, section.id, null);
      let length = section.exercises.length;
      for (let i = 0; i < length; i++) {
        section.exercises.pop();
      }
    },
    async generateRoutine() {
      if (this.rules.required(this.nombre) !== true || this.rules.counterMAX(this.nombre) !== true
          || this.rules.required(this.descripcion) !== true || this.rules.counterMAXDESC(this.descripcion) !== true
          || this.rules.required(this.duracion) !== true || this.rules.valorMIN(this.duracion) !== true) {
        // SI FALLA ALGUNOS DE LOS REQUISITOS(SUCEDE CUANDO NO RETORNAN TRUE(ALGUNOS AL FALLAR RETORNAN UN STRING)), IMPIDO EL POST
        return
      }
      this.loading = true;
      let id;
      if (this.id === 0) {
        id = await RoutineApi.newRoutine(this.nombre, this.descripcion, this.categories[0].value, null);
      } else {
        await CycleApi.deleteAllCycles(this.id, null);
        id = this.id;
      }
      let cycle_id;
      let i, j;
      let data_exercise = {
        name: '',
        detail: '',
      }
      for (i = 0; i < this.sections.length; i++) {
        cycle_id = await CycleApi.addCycle(this.sections[i].name, i + 1, this.sections[i].series, id, null);
        for (j = 0; j < this.sections[i].exercises.length; j++) {
          data_exercise.name = this.sections[i].exercises[j].name;
          data_exercise.detail = this.sections[i].exercises[j].detail;
          await ExercisesApi.addExercise(data_exercise, id, cycle_id, null);
        }
      }
      this.loading = false;
      location.assign('/rutinas');
    },
    async fillCycle(index, cycleId) {
      const exercises = await ExercisesApi.getExerciseFromCycle(this.id, cycleId, null);
      for (let i = 0; i < exercises.length; i++) {
        this.sections[index].exercises.push(exercises[i]);
      }
    },
    async updateCycles() {
      const cycles = await CycleApi.getAllCycles(this.id, null);
      for (let i = 0; i < cycles.length; i++) {
        this.sections.push({
          name: cycles[i].name,
          series: cycles[i].repetitions,
          exercises: [],
          id: cycles[i].id,
          cleaned: false
        });
        await this.fillCycle(i, cycles[i].id);
      }
    },
  },
  async created() {
    if (this.id !== 0) {
      this.id = this.$route.params.id;
      if (this.id === 1) {
        location.assign('/rutinas');
      }
      const result = await RoutineApi.getSingleRoutine(this.id, null);
      if (result.code) {
        location.assign('/rutinas');
      }
      this.nombre = result.name;
      this.descripcion = result.detail;
      this.creador = result.creator.username.toUpperCase();
      this.categories[0].value = result.level;
      await this.updateCycles();
    } else {
      this.sections = [{
        name: 'warmup', series: 1, exercises: [], cleaned: true
      }, {
        name: 'exercise', series: 1, exercises: [], cleaned: true
      }, {
        name: 'cooldown', series: 1, exercises: [], cleaned: true
      },];
    }
    this.loading = false;
  }
}
</script>

<style scoped>
@font-face {
  font-family: "NotoSans-Regular";
  src: url("../assets/fonts/NotoSans-Regular.ttf");
}

@font-face {
  font-family: "NotoSans-Bold";
  src: url("../assets/fonts/NotoSans-Bold.ttf");
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