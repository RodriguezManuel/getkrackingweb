<template>
  <nav>
    <v-toolbar height="120px" style="z-index: 1; box-shadow: none; background-color: transparent;">
      <v-row>
        <v-col/>
        <v-col cols="auto">
          <v-btn icon to="/implementar" style="top: 50px; margin-right: 15px;">
            <v-icon x-large color="white">
              mdi-bell-circle-outline
            </v-icon>
          </v-btn>
          <v-btn icon to="/implementar" style="top: 50px;">
            <v-icon x-large color="white">
              mdi-help-circle-outline
            </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <router-link to="/implementar">
            <div>
              <v-avatar size="100" style="margin: 15px">
                <v-img
                    src="https://scontent-eze1-1.cdninstagram.com/v/t51.2885-19/s320x320/35505554_625607187813190_379991596516507648_n.jpg?_nc_ht=scontent-eze1-1.cdninstagram.com&_nc_ohc=UjdKgHIS_VAAX9SWjPg&oh=8e11b06d9807949d397e9d464ae6811c&oe=5FAD723C"/>
              </v-avatar>
            </div>
          </router-link>
        </v-col>
        <v-col cols="auto">
          <p style="position: relative; top: 35%; color: white; font-size: 18px; right: 10px">
            Julian Nicolas Sicardi
          </p>
        </v-col>
      </v-row>
    </v-toolbar>
    <!--  Para el color del fondo-->
    <div style="height: 100%; width: 100%; background-color: #EDEDED; position: absolute; top: 0; z-index: 0;"/>
    <div style="height: 490px; width: 100%; background-color: #8b8686; position: absolute; top: 0; z-index: 0;"/>
    <div style="height: 40px; width: 100%; background-color: white; position: absolute; top: 490px; z-index: 0;"/>
  </nav>
</template>

<script>
import '@mdi/font/css/materialdesignicons.css'

export default {
  name: "TopBar"
}
</script>

<style scoped>
/*Para que los iconos no tengan el underline por ser routers*/
.v-application a {
  text-decoration: none;
}
</style>