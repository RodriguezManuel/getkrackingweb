<template>
  <v-card color="primary" >
    <v-btn v-on:click="refreshMaster">
      Generar Master
    </v-btn>
    <v-card v-if="ready">
      <p>
         Master creadooo! :)
      </p>
    </v-card>
  </v-card>
</template>

<script>
import {Builder} from "@/api/builder";

export default {
  name: "Builder",
  data(){
  return{
    ready: false,
    }
  },
  methods: {
    async refreshMaster(){
      await Builder.buildMaster();
      this.ready = true;
    }
  }
}
</script>

<style scoped>

</style>