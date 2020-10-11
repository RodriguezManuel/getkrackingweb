<template>
  <v-app>
    <side-bar/>

    <div style="background-color: red">
      <h1>PAGINA DE EJERCICIOS</h1>
    </div>
  </v-app>
</template>

<script>
import SideBar from "@/components/SideBar"

export default {
  name: "exercises",
  components: {SideBar}
}
</script>

<style scoped>

</style>