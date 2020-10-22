<template>
  <div>
    <side-bar/>
    <top-bar/>
    <edit-exercise class="mx-auto mt-16" title="EDITAR EJERCICIO" style="width: 75%;"/>
  </div>
</template>

<script>
import EditExercise from "@/components/editExercise";
import TopBar from "@/components/TopBar";
import SideBar from "@/components/SideBar";

export default {
name: "EditarEjercicio",
  components: {EditExercise, TopBar, SideBar},
}
</script>

<style scoped>

</style>