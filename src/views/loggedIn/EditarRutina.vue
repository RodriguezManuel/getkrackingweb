<template>
  <div>

    <side-bar/>
    <top-bar/>
    <editar-rutina-comp titulo="EDITAR RUTINA" :id="this.$route.params.id"/>
  </div>

</template>

<script>
import SideBar from "@/components/SideBar"
import TopBar from "@/components/TopBar"
import EditarRutinaComp from "@/components/EditarRutinaComp";

export default {
  name: "EditarRutina",
  components: {EditarRutinaComp, SideBar, TopBar},
}
</script>

<style scoped>

</style>