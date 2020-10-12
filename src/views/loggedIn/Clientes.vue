<template>
  <div>
    <side-bar/>
    <top-bar/>
    <v-list>
      <v-list-item v-for="cliente in clientes" :key="cliente.nombre">
        <client-entry v-bind:cliente="cliente"></client-entry>
      </v-list-item>
    </v-list>
  </div>
</template>


<script>
import ClientEntry from "@/components/ClientEntry"
import SideBar from "@/components/SideBar"
import TopBar from "@/components/TopBar"
export default {
name: "Clientes.vue",
  components: {ClientEntry, TopBar, SideBar},
  data(){
    return{
      clientes: [
        {imagen: require('../../assets/images/face1.jpg'), nombre: 'Esteban Quito', edad: 32, rutinaActual: 'Abdomiflanes', progreso: 20},
        {imagen: require('../../assets/images/face2.jpg'), nombre: 'Ana Lía', edad: 28, rutinaActual: 'Piernazas', progreso: 5},
        {imagen: require('../../assets/images/face3.jpg'), nombre: 'Julián Sicardi', edad: 20, rutinaActual: 'Rodillas de hierro', progreso:95},
      ]
    }
  }
}
</script>

<style scoped>

</style>