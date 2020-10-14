<template>
  <div>
    <side-bar/>
    <top-bar/>

    <v-list>
      <v-card style="width: 98%; margin-left: 1%; height: 50px; border-radius: 36px;">
        <v-row>
          <v-col cols="1" style="padding-left: 10%;"/>

          <v-col cols="3">
            <p class="textCustom">Nombre</p>
          </v-col>

          <v-col cols="1" >
            <p class="textCustom">Edad</p>
          </v-col>

          <v-col cols="2">
            <p class="textCustom">Rutina Actual</p>
          </v-col>

          <v-col cols="3" style="text-align: center;">
            <p class="textCustom">Progreso</p>
          </v-col>

          <v-col cols="1"/>
        </v-row>
      </v-card>

      <v-list-item v-for="cliente in clientes" :key="cliente.nombre">
        <v-card style="width: 100%; margin-top: 20px">
          <client-entry v-bind:cliente="cliente"></client-entry>
        </v-card>
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

@font-face {
  font-family: "NotoSans-Regular";
  src: url("../../assets/fonts/NotoSans-Regular.ttf");
}

textCustom{
  margin-bottom: 10px;
  font-family: NotoSans-Regular;
  color: #626262;
  font-size: 24px;
  text-transform: none;
  justify-content: left;
}
</style>