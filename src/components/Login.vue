<template>

  <v-card width="341px" depressed color=#3C3C3C class="white--text" style="border-radius: 44px;">


    <p class="titulo" style="margin-top: 17px; margin-left: 1px;">Iniciar sesión</p>
    <v-container class="ml-auto mr-auto">
      <v-text-field v-model="username" solo dense type="text" placeholder="Nombre de usuario o email" size="27%"
                    outlined
                    :rules="[rules.required(username), rules.counterMAX(username), rules.counterMIN(username)]"
                    style="font-size: 18px;" height="34%"/>

      <v-text-field v-model="password" solo dense :type="(visibility === false)? 'password':'text'"
                    placeholder="Contraseña" v-on:keydown.enter="login"
                    :rules="[rules.required(password), rules.counterMAX(password), rules.counterMIN(password)]"
                    size="24%" outlined style="font-size: 18px"
                    :append-icon="(visibility === false)? 'mdi-eye': 'mdi-eye-off'"
                    @click:append="visibility = !visibility"/>

      <div style="min-height: 38px">
        <p v-if="wrongCredentials && !loading" class="textoRespuesta" style="color: #ff5252; text-align: center">
          Algun valor es incorrecto
        </p>
        <div class="text-center" v-if="loading === true">
          <v-progress-circular
              indeterminate
              color="primary"/>
        </div>
      </div>

      <p class="olvidaste">Olvidaste tu contraseña?</p>
      <!--      DEBERIA APUNTAR A ALGUN LADO-->
      <div class="text-center">
        <v-btn v-on:click="login" height="32px" class="rounded-pill white black--text CustomButton">Ingresar</v-btn>
      </div>


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

import {UserApi, Credentials} from "@/api/user";

export default {
  name: "Login",
  data() {
    return {
      visibility: false,
      username: '',
      password: '',
      loading: false,
      wrongCredentials: false,
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
      if(this.rules.required(this.username) !== true || this.rules.counterMIN(this.username) !== true
          || this.rules.counterMAX(this.username) !== true || this.rules.required(this.password) !== true
          || this.rules.counterMIN(this.password) !== true || this.rules.counterMAX(this.password) !== true ){
        // SI FALLA ALGUNOS DE LOS REQUISITOS(SUCEDE CUANDO NO RETORNAN TRUE(ALGUNOS AL FALLAR RETORNAN UN STRING)), IMPIDO EL POST
        return
      }
      this.loading = true;

      const credentials = new Credentials(this.username, this.password);
      const response = await UserApi.login(credentials);
      this.loading = false;
      if (response == null) {
        console.log("ERROR: POST NO RETORNO NADA");
        return;
      }
      if (response.code == null) {
        this.wrongCredentials = false;
        location.assign("./loggedhome");
      } else if (response.code === 4)
        this.wrongCredentials = true;
      else {
        console.log("ERROR: EN LOGIN, NO MANEJADO: " + response.code);
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

.textoRespuesta {
  font-family: NotoSans-Regular, sans-serif;
  font-size: 20px;
  margin-bottom: 0 !important;
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