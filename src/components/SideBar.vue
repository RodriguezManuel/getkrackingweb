<template>
  <v-navigation-drawer app permanent width="308px">

    <router-link to="/loggedhome">
      <img :src="require('../assets/images/getkrackinname.png')" alt="Get krackin" class="ma-1">
    </router-link>

    <v-list>
      <v-list-item v-for="item in items" :key="item.icon" style="justify-content: center">
          <v-btn :to="item.path" width="288px" height="55px" class="CustomButton">
            <v-icon large style="padding-right: 5%;">{{ item.icon }}</v-icon>
            {{ item.desc }}
          </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import '@mdi/font/css/materialdesignicons.css'

export default {
  name: "SideBar",
  data() {
    return {
      items: [
        {icon: 'mdi-home-outline', desc: 'Home', path: '/loggedhome'},
        {icon: 'mdi-email-outline', desc: 'Notificaciones', path: '/notificaciones'},
        {icon: 'mdi-dumbbell', desc: 'Ejercicios', path: '/ejercicios'},
        {icon: 'mdi-file-document-outline', desc: 'Rutinas', path: '/rutinas'},
        {icon: 'mdi-message-outline', desc: 'Mensajes', path: '/mensajes'},
        {icon: 'mdi-calendar', desc: 'Calendario', path: '/calendario'},
        {icon: 'mdi-account-outline', desc: 'Clientes', path: '/clientes'},
        {icon: 'mdi-cog-outline', desc: 'Ajustes', path: '/perfil'},
      ]
    }
  },

  icons: {
    iconfont: 'md',
  },
}
</script>

<style scoped>
@font-face {
  font-family: "NotoSans-Regular";
  src: url("../assets/fonts/NotoSans-Regular.ttf");
}

/*Para que los botones tengan las propiedades buscadas*/
.CustomButton {
  font-family: NotoSans-Regular, sans-serif !important;
  font-size: 26px !important;
  text-transform: none !important;
  justify-content: left;
  margin-bottom: 5%;
  color: #626262;
}

</style>