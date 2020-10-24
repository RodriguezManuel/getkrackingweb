<template>
  <div>
    <side-bar/>
    <top-bar/>

    <v-container>

      <v-card style="width: 98%; height: 75px; margin-left: 1%; border-radius: 36px">
        <v-row style="width: 98%;" class="ma-1">
          <v-col class="ml-4">
            <v-select v-on:input="sortByType()" :items="tipos" label="Tipo" v-model="type" solo flat append-icon="mdi-menu-swap" class="opciones"/>
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
              <v-text-field v-model="searchTerm" v-on:input="search()" v-on:keydown.enter="reset()" label="Buscar por nombre" prepend-icon="mdi-magnify" class="opciones" solo flat/>
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
      allRoutines:[],
      type:'',
      tipos: ['Propias', 'Generales', 'Favoritas'],
      dificultad: ['Sin orden', 'Ascendente', 'Descendente'],
      puntuacion: ['5', '4', '3', '2', '1'],
      flexibilidad: ['Sin orden', 'Ascendente', 'Descendente'],
      categoria: ['Favoritos', 'No favoritos', 'Todos'],
      searchTerm: '',
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
    sortByType(){
      let vector = [];
      for(let i = 0; i < this.allRoutines.length; i++){
        if(this.allRoutines[i].fav && this.type == 'Favoritas'){
          vector.push(this.allRoutines[i]);
        }
        else if(this.allRoutines[i].isOwner && this.type == 'Propias'){
          vector.push(this.allRoutines[i]);
        }
          
        else if(this.type == 'Generales'){ //quiero todas
          vector.push(this.allRoutines[i]);
        }
      }
      console.log(vector);
      this.routines = vector;
    },

    search(){
      let vector = [];
      for(let i = 0; i < this.allRoutines.length; i++){
        if((this.allRoutines[i].name).includes(this.searchTerm)){
          vector.push(this.allRoutines[i]);
        }
      }
      this.routines = vector;
    },
    reset(){
      this.routines = this.allRoutines;
    }
  },

  async created(){
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
  font-family: NotoSans-Regular,sans-serif;
}

</style>