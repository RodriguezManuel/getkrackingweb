<template>
  <div style="position: relative; top: 5%; left: 5%;">
    <v-card align="center" width="400px" style="border-radius:25px" color="primary">
      <v-btn v-on:click="refreshMaster" :disabled="clicked" @click="clicked = true" class="mt-4">
        Generar Master
      </v-btn>
      <div style="height: 150px">
        <div style="height: 50px"/>
        <v-row justify="center" v-if="clicked && !ready">
          <v-progress-circular size="60" width="15"
                               indeterminate
                               color="white"/>
        </v-row>
        <v-card-title v-if="ready">
          <v-row justify="center">
            <p>
              Master creadooo! :)
            </p>
          </v-row>
        </v-card-title>
      </div>
    </v-card>
  </div>
</template>

<script>
import {Builder} from "@/api/builder";

export default {
  name: "Builder",
  data() {
    return {
      clicked: false,
      ready: false,
    }
  },
  methods: {
    async refreshMaster() {
      await Builder.buildMaster();
      this.ready = true;
    }
  }
}
</script>

<style scoped>

</style>