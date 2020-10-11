<template>
  <v-app>
    <side-bar/>

    <div style="background-color: gray">
      <h1>HOME DE PERSONA LOGUEADA</h1>
    </div>
  </v-app>
</template>

<script>
import SideBar from "@/components/SideBar"

export default {
  name: "Home",
  components: {SideBar}
}
</script>

<style scoped>

</style>