<template>
  <div>
    <side-bar/>
    <top-bar/>
    <edit-exercise class="mx-auto mt-16" :id=id title="EDITAR EJERCICIO" style="width: 75%;"/>
  </div>
</template>

<script>
import EditExercise from "@/components/editExercise";
import TopBar from "@/components/TopBar";
import SideBar from "@/components/SideBar";

export default {
  name: "EditarEjercicio",
  components: {EditExercise, TopBar, SideBar},

  data() {
    return{
      id:'',
    }
  },

  created() {
    this.id = this.$route.params.id;
    console.log(this.id);
  }
}
</script>

<style scoped>

</style>