<!-- Mostrar info del cliente:  Imágen, Nombre, Edad, Rutina actual, Progreso y una opción para chatear-->

<template>
  <div >
    <v-row style="width: 700px;">
      <v-col cols="1" :align-self="align">
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
      <v-col cols="3">
          <p>{{cliente.rutinaActual}}</p>
      </v-col>
      <v-col cols="1">
          <p>{{cliente.progreso + '%'}}</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
name: "ClientEntry",
props: ['cliente'],
  data(){
    return{

    }
  }
}
</script>

<style scoped>
p{
  margin-top: 10px;
}
</style>