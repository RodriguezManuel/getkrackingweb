<template>
  <div>
    <side-bar/>
    <top-bar/>

    <v-container>

      <v-card style="width: 98%; height: 75px; margin-left: 1%; border-radius: 36px">
        <v-row style="width: 98%;" class="ma-1">
          <v-col class="ml-4">
            <v-select :items="tipos" label="Tipo" solo flat append-icon="mdi-menu-swap" class="opciones"/>
          </v-col>

          <v-col>
            <v-select :items="dificultad" label="Dificultad" solo flat append-icon="mdi-menu-swap" class="opciones"/>
          </v-col>

          <v-col>
            <div>
              <v-text-field v-model="search" label="Buscar por nombre" prepend-icon="mdi-magnify" class="opciones" solo flat/>
            </div>
          </v-col>
        </v-row>
      </v-card>

      <v-row v-for="n in 4" :key="n" class="mb-10" justify="space-around">
        <v-col v-for="n in 3" :key="n">
          <workout-card class="mx-auto"/>
        </v-col>
      </v-row>


    </v-container>

    <boton-generar-rutina/>
  </div>
</template>

<script>
import BotonGenerarRutina from "@/components/BotonGenerarRutina";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import WorkoutCard from "@/components/workoutCard";

export default {
  name: "Rutinas",
  components: {WorkoutCard, TopBar, SideBar, BotonGenerarRutina},
  data() {
    return {
      tipos: ['Todos', 'Cardio', 'Tonificacion', 'Yoga', 'Calentamiento', 'Estiramientos'],
      dificultad: ['Todos', 'Nivel 1', 'Nivel 2', 'Nivel 3', 'Nivel 4', 'Nivel 5'],
      search: '',
      rutinas: [],
    }
  },
  computed: {
    filteredRoutines: function (){
      return this.rutinas.filter((rutina) => {
        return rutina.name.toLocaleLowerCase().match(this.search.toLowerCase());
      })
    }
  }
}
</script>

<style scoped>

@font-face {
  font-family: "NotoSans-Regular";
  src: url("../../assets/fonts/NotoSans-Regular.ttf");
}

.v-text-field {
  padding-top: 3px;
}

.opciones {
  font-size: 20px;
  font-family: NotoSans-Regular;
}
</style>