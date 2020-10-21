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
            <v-select :items="flexibilidad" label="Flexibilidad" solo flat append-icon="mdi-menu-swap"
                      class="opciones"/>
          </v-col>

          <v-col>
            <v-select :items="categoria" label="Categoria" solo flat append-icon="mdi-menu-swap" class="opciones"/>
          </v-col>

          <v-col>
            <div>
              <v-text-field v-model="search" label="Buscar por nombre" prepend-icon="mdi-magnify" class="opciones" solo
                            flat/>
            </div>
          </v-col>
        </v-row>
      </v-card>
      <v-row class="my-10" justify="space-around">
        <v-col v-for="n in 11" :key="n">
          <workout-card class="mx-auto"/>
        </v-col>
      </v-row>


    </v-container>

    <boton-generar/>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar"
import TopBar from "@/components/TopBar"
import WorkoutCard from "@/components/workoutCard"
import BotonGenerar from "@/components/BotonGenerar";

export default {
  name: "Rutinas",
  components: {WorkoutCard, TopBar, SideBar, BotonGenerar},
  data() {
    return {
      tipos: ['Propias', 'Generales', 'Favoritas'],
      dificultad: ['Sin orden', 'Ascendente', 'Descendente'],
      puntuacion: ['5', '4', '3', '2', '1'],
      categoria: ['Favoritos', 'No favoritos', 'Todos'],
      search: '',
      misRutinas: false,
      rutinas: [],
    }
  },
  computed: {
    filteredRoutines: function () {
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

.opciones {
  font-size: 20px;
  font-family: NotoSans-Regular, sans-serif;
}

/* Para las propiedades de los botones */
.CustomButton {
  font-family: NotoSans-SemiBold, sans-serif !important;
  font-size: 26px !important;
  text-transform: none !important;
}
</style>