<template>
  <div>
    <side-bar/>
    <top-bar/>

    <v-container>

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
  components: {WorkoutCard, TopBar, SideBar, BotonGenerarRutina}
}
</script>

<style scoped>

</style>