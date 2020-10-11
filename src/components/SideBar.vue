<template>
  <v-navigation-drawer app permanent width="308">

    <img :src="require('../assets/images/getkrackinname.png')" alt="Get krackin">

    <v-list>
      <v-list-item v-for="item in items" :key="item.icon" style="justify-content: center">
          <v-btn :to="item.path" width="288px" height="55px">
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
        {icon: 'mdi-email-outline', desc: 'Notificaciones', path: '/notifications'},
        {icon: 'mdi-dumbbell', desc: 'Ejercicios', path: '/exercises'},
        {icon: 'mdi-file-document-outline', desc: 'Mis rutinas', path: '/routines'},
        {icon: 'mdi-message-outline', desc: 'Mensajes', path: '/messages'},
        {icon: 'mdi-calendar', desc: 'Calendario', path: '/calendar'},
        {icon: 'mdi-account-outline', desc: 'Clientes', path: '/clients'},
        {icon: 'mdi-cog-outline', desc: 'Ajustes', path: '/settings'},
      ]
    }
  },

  icons: {
    iconfont: 'md',
  },
}
</script>

<style scoped>
/*Para que los botones tengan las propiedades buscadas*/
.v-btn.v-size--default {
  font-family: NotoSansRegular;
  color: #626262;
  font-size: 26px;
  text-transform: none;
  justify-content: left;
  margin-bottom: 5%;
}

</style>