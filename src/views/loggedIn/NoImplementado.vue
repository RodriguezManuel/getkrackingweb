<template>
  <div>
    <side-bar/>
    <top-bar/>
      <v-card class="mx-auto mt-8" color="white" style="border-radius: 25px; width: 85%; height: 600px">
        <h1 style="text-align: center;">NO SE LOGRO IMPLEMENTAR</h1>
      </v-card>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar"
import TopBar from "@/components/TopBar"

export default {
  name: "notificaciones",
  components: {TopBar, SideBar,},
}
</script>

<style scoped>

</style>