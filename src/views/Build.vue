<template>
  <div>
      <v-card>
        <v-btn rounded v-on:click="run">
          Crear master
        </v-btn>
      </v-card>
  </div>
</template>

<script>
import mbeh from '../init_exercises.js'
export default {

name: "Build.vue",
  data(){
  return {
    builder: mbeh,
    name: 'stuff',
    }
  },
  methods: {
    async run(){
     // const result = await this.builder.build();
      console.log(this.builder);
    }

  },

}
</script>

<style scoped>

</style>