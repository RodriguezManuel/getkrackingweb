<template>
  <div>
    <side-bar/>
    <top-bar/>
    <edit-exercise class="mx-auto mt-16" :id=id :type=type title="EDITAR EJERCICIO" style="width: 75%;"/>
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
      type: 0,
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.type = this.$route.params.type;
    console.log(this.id);
  }
}
</script>

<style scoped>

</style>