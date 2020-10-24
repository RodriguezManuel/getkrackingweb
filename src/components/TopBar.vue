<template>
  <nav>
    <v-toolbar height="120px" style="z-index: 1; box-shadow: none; background-color: transparent;">
      <v-row>
        <v-col/>

        <v-col cols="auto" class="my-auto">

          <v-btn icon to="/notificaciones" style="margin-right: 15px;">
            <v-icon size="45px" color="white">
              mdi-bell-circle-outline
            </v-icon>
          </v-btn>

          <v-btn icon to="/ajustes">
            <v-icon size="45px" color="white">
              mdi-help-circle-outline
            </v-icon>
          </v-btn>

        </v-col>

        <v-col cols="auto">
          <router-link to="/perfil">
            <div>
              <v-avatar size="100" style="margin: 15px">
                <v-img :src="avatarURLFUNC" lazy-src="@/assets/images/default.png"/>
              </v-avatar>
            </div>
          </router-link>
        </v-col>

        <v-col cols="auto" class="my-auto">
          <router-link to="/perfil">
            <p class="my-auto" style=" color: white; font-size: 18px; right: 10px">
              {{this.nombre}}
            </p>
          </router-link>
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
import {UserApi} from "@/api/user";

export default {
  name: "TopBar",
  data() {
    return{
      nombre: '',
      avatarURL:'',
    }
  },
  computed: {
    avatarURLFUNC(){
      return this.avatarURL;
    },
  },
  async mounted(){
    let userInfo = await UserApi.getUserData(null);
    this.nombre = userInfo.fullName;
    this.avatarURL = userInfo.avatarUrl;
  }
}
</script>

<style scoped>
/*Para que los iconos no tengan el underline por ser routers*/
.v-application a {
  text-decoration: none;
}
</style>