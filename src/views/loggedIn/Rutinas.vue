<template>
  <div>
    <side-bar/>
    <top-bar/>

    <v-container>

      <v-card style="width: 98%; height: 75px; margin-left: 1%; border-radius: 36px">
        <v-row style="width: 98%;" class="ma-1">
          <v-col class="ml-4">
            <v-select v-on:input="sortByType()" :items="tipos" label="Tipo" v-model="type" solo flat
                      append-icon="mdi-menu-down" class="opciones" style="overflow: hidden; !important;"/>
          </v-col>

          <v-col>
            <div class="mt-2">
              <div class="opciones" v-on:click="sortByDifi()">
                Dificultad
                <v-icon large class="ml-7">{{ dificultad[difi % 3].icon }}</v-icon>
              </div>
            </div>
          </v-col>

          <v-col>
            <div class="mt-2">
              <div class="opciones" v-on:click="sortByRating()">
                Rating
                <v-icon large class="ml-7">{{ dificultad[rating % 3].icon }}</v-icon>
              </div>
            </div>
          </v-col>

          <v-col>
            <div>
              <v-text-field v-model="searchTerm" v-on:input="search()" v-on:keydown.enter="reset()"
                            label="Buscar por nombre" prepend-icon="mdi-magnify" class="opciones" solo flat/>
            </div>
          </v-col>
        </v-row>
      </v-card>

      <div class="text-center my-15" v-if="loading">
        <v-progress-circular size="200" width="15" style="position: relative; top: 40%"
                             indeterminate
                             color="primary"/>
      </div>
      <v-row class="my-10" justify="space-around" v-else>
        <v-col v-for="n in routines.length" :key="n">
          <workout-card :routine='routines[n - 1]' class="mx-auto"/>
        </v-col>
      </v-row>


    </v-container>

    <boton-generar texto="Generar nueva rutina" path="/generar_rutina"/>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar"
import TopBar from "@/components/TopBar"
import WorkoutCard from "@/components/workoutCard"
import BotonGenerar from "@/components/BotonGenerar"
import {RoutineApi} from "@/api/routines";

export default {
  name: "Rutinas",
  components: {WorkoutCard, TopBar, SideBar, BotonGenerar},
  data() {
    return {
      loading: true,
      routines: [],
      allRoutines: [],
      type: '',
      tipos: ['Propias', 'Todas', 'Favoritas'],
      dificultad: [{icon: 'mdi-menu-swap', label: "Sin orden"}, {
        icon: 'mdi-menu-up',
        label: "Descendente"
      }, {icon: 'mdi-menu-down', label: "Ascendente"}],
      puntuacion: ['5', '4', '3', '2', '1'],
      searchTerm: '',
      difi: 0,
      rating:0,
    }
  },
  methods: {
    sortByType() {
      let vector = [];
      for (let i = 0; i < this.allRoutines.length; i++) {
        if (this.allRoutines[i].fav && this.type === 'Favoritas') {
          vector.push(this.allRoutines[i]);
        } else if (this.allRoutines[i].isOwner && this.type === 'Propias') {
          vector.push(this.allRoutines[i]);
        } else if (this.type === 'Todas') { //quiero todas
          vector.push(this.allRoutines[i]);
        }
      }
      this.routines = vector;
    },

    sortByDifi() {
      if (this.dificultad[this.difi % 3].label === 'Ascendente') {
        this.routines = RoutineApi.difiAscending(this.allRoutines);
      } else if (this.dificultad[this.difi % 3].label === 'Descendente') {
        this.routines = RoutineApi.difiDescending(this.allRoutines);
      } else {
        this.routines = this.allRoutines;
      }
      this.difi++;
    },
    sortByRating(){
      if (this.dificultad[this.rating % 3].label === 'Ascendente') {
        this.routines = RoutineApi.ratingAscending(this.allRoutines);
      } else if (this.dificultad[this.rating % 3].label === 'Descendente') {
        this.routines = RoutineApi.ratingDescending(this.allRoutines);
      } else {
        this.routines = this.allRoutines;
      }
      this.rating++;
    },

    search() {
      let vector = [];
      for (let i = 0; i < this.allRoutines.length; i++) {
        if ((this.allRoutines[i].name).includes(this.searchTerm)) {
          vector.push(this.allRoutines[i]);
        }
      }
      this.routines = vector;
    },
    reset() {
      this.routines = this.allRoutines;
    }
  },

  async created() {
    this.routines = await RoutineApi.getRoutines(null);
    this.allRoutines = this.routines;
    this.loading = false;
  }
}
</script>

<style scoped>
@font-face {
  font-family: "NotoSans-Regular";
  src: url("../../assets/fonts/NotoSans-Regular.ttf");
}

.opciones {
  font-size: 20px;
  font-family: NotoSans-Regular, sans-serif;
}

</style>