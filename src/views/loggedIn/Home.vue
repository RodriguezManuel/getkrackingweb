<template>
  <v-app>
    <side-bar/>

    <div style="background-color: gray;">
      <top-bar/>

      <h1>HOME DE PERSONA LOGUEADA</h1>
    </div>
  </v-app>
</template>

<script>
import SideBar from "@/components/SideBar"
import TopBar from "@/components/TopBar"

export default {
  name: "Home",
  components: {TopBar, SideBar}
}
</script>

<style scoped>

</style>