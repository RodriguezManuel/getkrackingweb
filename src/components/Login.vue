<template>

  <v-card width="341px" depressed color=#3C3C3C class="white--text" style="border-radius: 44px;">


    <p class="titulo" style="margin-top: 17px; margin-left: 1px;">Iniciar sesión</p>
    <v-container class="ml-auto mr-auto">
      <v-text-field v-model="username" solo dense type="text" placeholder="Nombre de usuario o email" size="27%" outlined
                    :rules="[rules.required(username), rules.counterMAX(username), rules.counterMIN(username)]"
                    style="font-size: 18px;" height="34%"/>

      <v-text-field v-model="password" solo dense :type="(visibility === false)? 'password':'text'" placeholder="Contraseña"
                    :rules="[rules.required(password), rules.counterMAX(password), rules.counterMIN(password)]"
                    size="24%" outlined style="font-size: 18px"
                    :append-icon="(visibility === false)? 'mdi-eye': 'mdi-eye-off'"
                    @click:append="visibility = !visibility"/>

      <p class="olvidaste">Olvidaste tu contraseña?</p>
      <!--      DEBERIA APUNTAR A ALGUN LADO-->
      <div class="text-center">
        <v-btn v-on:click="login"  height="32px" class="rounded-pill white black--text CustomButton" >Ingresar</v-btn>
      </div>


      <p v-if="log_suc === false" style="color: #ff5252; margin: 7px" >
        Error en el inicio: no se reconoce su usuario o contraseña
      </p>


      <v-row justify="space-around">
        <v-col v-for="icon in icons" :key="icon.name" class="text-center">
          <v-btn icon to="/implementar">
            <v-icon color="white">{{ icon.name }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <!--      DEBERIA APUNTAR A ALGUN LADO-->
  </v-card>

</template>

<script>

import { UserApi, Credentials } from '../api/user.js'

export default {
  name: "Login",
  data() {
    return {
      log_suc: true,
      visibility: false,
      username: '',
      password: '',
      rules: {
        required: value => !!value || 'Requerido.',
        counterMAX: value => value.length < 20 || 'Inserte menos de 20 caracteres.',
        counterMIN: value => value.length > 6 || 'Inserte mas de 6 caracteres.',
      },
      icons: [
        {name: 'fab fa-google'},
        {name: 'fab fa-facebook'},
        {name: 'fab fa-instagram'},
      ]
    }
  },
  methods: {
    async login() {
      const credentials = new Credentials(this.username, this.password);
      const response = await UserApi.login(credentials);
      console.log();
      if ( response != null ){
        console.log("Funciono");
        location.assign("./loggedhome");
      }
      else {
        console.log("MBERTO");
      }
    }
  },
}


</script>

<style scoped>
@font-face {
  font-family: "NotoSans-Regular";
  src: url("../assets/fonts/NotoSans-Regular.ttf");
}

@font-face {
  font-family: "NotoSans-SemiBold";
  src: url("../assets/fonts/NotoSans-SemiBold.ttf");
}

.olvidaste {
  font-family: NotoSans-Regular, sans-serif;
  font-size: 18px;
  text-decoration: underline;
  text-align: center;
}

.titulo {
  font-family: NotoSans-SemiBold, sans-serif;
  font-size: 30px;
  text-align: center;
  letter-spacing: 0.0892857143em;
}

/*Para que el boton tenga las propiedades buscadas*/
.CustomButton {
  font-family: NotoSans-Regular, sans-serif !important;
  font-size: 20px !important;
  text-transform: none !important;
}


</style>