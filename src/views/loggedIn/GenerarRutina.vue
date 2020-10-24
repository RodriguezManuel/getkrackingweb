<template>
  <div>

    <side-bar/>
    <top-bar/>
    <editar-rutina-comp titulo="NUEVA RUTINA" :id="this.id" />
  </div>
</template>

<script>
import SideBar from "@/components/SideBar"
import TopBar from "@/components/TopBar"
import EditarRutinaComp from "@/components/EditarRutinaComp";

export default {
  name: "GenerarRutina",
  components: {EditarRutinaComp, SideBar, TopBar},
  data(){
    return {
      id: 0,
    }
  },
}
</script>

<style scoped>

</style>