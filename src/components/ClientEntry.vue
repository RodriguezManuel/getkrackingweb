<!-- Mostrar info del cliente:  Imágen, Nombre, Edad, Rutina actual, Progreso y una opción para chatear-->

<template>
  <div style="min-width: 100%">
    <v-row style="padding-left: 50px;">
      <v-col cols="1" >
        <v-avatar contain max-height="50px" >
          <img :src="cliente.imagen" alt="imagen">
        </v-avatar>
      </v-col>
      <v-col cols="3">
          <p>{{cliente.nombre}}</p>
      </v-col>
      <v-col cols="1">
          <p>{{cliente.edad}}</p>
      </v-col>
      <v-col cols="2">
          <p>{{cliente.rutinaActual}}</p>
      </v-col>
      <v-col cols="3" style="margin-top: 25px">
        <v-progress-linear :value="cliente.progreso" background-color="grey lighten-2" color="yellow darken-2"></v-progress-linear>
      </v-col>
      <v-col cols="1">
        <v-btn icon to="/messages" style="margin-top: 8px"> <v-icon>{{'mdi-message-outline'}}</v-icon></v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import '@mdi/font/css/materialdesignicons.css'

export default {
name: "ClientEntry",
props: ['cliente'],
  data(){
    return{

    }
  },
  icons: {
    iconfont: 'md',
  },
}
</script>

<style scoped>
p{
  margin-top: 10px;
  font-family: NotoSansRegular;
  color: #626262;
  font-size: 20px;
  text-transform: none;
  justify-content: left;
}
</style>