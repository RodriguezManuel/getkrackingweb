<template>
  <v-btn v-on:click="refreshMaster">
    Generar Master
  <v-card v-if="ready">
    <p>
       Master creadooo! :)
    </p>
  </v-card>
  </v-btn>
</template>

<script>
import { RoutineApi } from "@/api/routines";

export default {
  name: "Builder",
  data(){
  return{
    ready: false,
    }
  },
  methods: {
    async refreshMaster(){
      const result = await RoutineApi.buildMaster();
      if (!result.code){
        this.ready = true;
      }
    }
  }
}
</script>

<style scoped>

</style>