<template>
  <div>
    <side-bar/>
    <top-bar/>
    <edit-exercise :type=0 class="mx-auto mt-16" title="CREAR NUEVO EJERCICIO" style="width: 75%;"/>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar"
import TopBar from "@/components/TopBar"
import EditExercise from "@/components/editExercise";

export default {
  name: "GenerarEjercicio",
  components: {EditExercise, TopBar, SideBar},
}
</script>

<style scoped>

</style>