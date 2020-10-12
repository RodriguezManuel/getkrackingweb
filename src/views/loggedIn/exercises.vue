<template>
  <div>
    <side-bar/>
    <top-bar/>
    <v-card style="margin-top: 20px;margin-right: 5%;margin-left: 5%; width: 90%">
      <v-row>
        <v-col cols="2">
          <v-select
              :items="items"
              label="Standard"
              dense
          ></v-select>
        </v-col>
        <v-col cols="2">
          <v-select
              :items="items"
              label="Standard"
              dense
          ></v-select>
        </v-col>
        <v-col>
          <v-btn text="Intensidad">
            <v-icon>
              {{'mdi-arrow-dropdown'}}
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar"
import TopBar from "@/components/TopBar"

export default {
  name: "exercises",
  components: {TopBar, SideBar}
}
</script>

<style scoped>

</style>