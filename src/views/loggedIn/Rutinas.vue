<template>
  <div>
    <side-bar/>
    <top-bar/>

    <v-container>

      <v-card style="width: 98%; height: 75px; margin-left: 1%; border-radius: 36px">
        <v-row style="width: 98%;" class="ma-1">
          <v-col class="ml-4">
            <v-select v-bind="tipoSelect" :items="tipos" label="Tipo" solo flat append-icon="mdi-menu-swap" class="opciones"/>
          </v-col>

          <v-col>
            <v-select :items="dificultad" label="Dificultad" solo flat append-icon="mdi-menu-swap" class="opciones"/>
          </v-col>

          <v-col>
            <v-select :items="flexibilidad" label="Flexibilidad" solo flat append-icon="mdi-menu-swap" class="opciones"/>
          </v-col>

          <v-col>
            <v-select :items="categoria" label="Categoria" solo flat append-icon="mdi-menu-swap" class="opciones"/>
          </v-col>

          <v-col>
            <div>
              <v-text-field v-model="search" label="Buscar por nombre" prepend-icon="mdi-magnify" class="opciones" solo flat/>
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
      routinesDisplay: [],
      allRoutines: [],
      favRoutines: [],
      tipos: ['Propias', 'Generales', 'Favoritas'],
      tipoSelect: 'Generales',
      dificultad: ['Sin orden', 'Ascendente', 'Descendente'],
      puntuacion: ['5', '4', '3', '2', '1'],
      flexibilidad: ['Sin orden', 'Ascendente', 'Descendente'],
      categoria: ['Favoritos', 'No favoritos', 'Todos'],
      search: '',
    }
  },
  computed: {
    filteredRoutines: function (){
      return this.rutinas.filter((rutina) => {
        return rutina.name.toLocaleLowerCase().match(this.search.toLowerCase());
      })
    }
  },
  methods: {
    async showFavs(){
      var i;
      for (i= 0; i < this.routines.length; i++){
        if(this.routines[i].fav){
          this.favRoutines.push(this.routines[i]);
        }
      }
    },
    async showMine(){
      var i;
      var rta;
      for (i= 0; i < this.routines.length; i++){
        if(this.routines[i].isOwner){
          rta.push(this.routines[i]);
        }
      }
      return rta;
    }
  },
  async created(){
    this.routinesDisplay = await RoutineApi.getRoutines(null);
    this.loading = false;
    this.allRoutines = this.routinesDisplay;
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
  font-family: NotoSans-Regular,sans-serif;
}

</style>