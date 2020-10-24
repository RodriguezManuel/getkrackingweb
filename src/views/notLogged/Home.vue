<template>
  <div>
    <NavBar/>

    <div class="home">

      <v-container style="margin: auto;">
        <v-row justify="space-around">

          <v-col v-if="$vuetify.breakpoint.mdAndUp">
            <div class="elevation-10" style="border-style: solid">
              <v-card color="#f3BB96">
                <v-img :src="require('../../assets/images/home1.png')" alt="Persona haciendo ejercicio">
                  <p class="textoImg1yDescargaAPP">Armá rutinas fácil y compartilas con tus alumnos</p>
                </v-img>
              </v-card>
            </div>
          </v-col>

          <v-col>
            <div class="elevation-10" style="border-style: solid">
              <v-card height="550px">
                <div class="rowCustom fill-height">
                  <div class="columnCustom">
                    <div class="reg">
                      <p id="registerTitle">
                        Registrate!
                      </p>
                      <v-row>
                        <v-text-field solo type="text" v-model="username"
                                      :rules="[rules.required(username), rules.counterMAX(username), rules.counterMIN(username)]"
                                      placeholder="Nombre de usuario" size="27%" outlined
                                      style="font-size: 18px;"/>
                        <v-icon small color="red" style="top: -30px;left: -20px">mdi-asterisk</v-icon>
                      </v-row>
                      <v-row>
                        <v-text-field v-model="email" :rules="[rules.required(email), rules.email(email)]" solo
                                      type="text"
                                      placeholder="Email" size="27%" outlined
                                      style="font-size: 18px;"/>
                        <v-icon small color="red" style="top: -30px;left: -20px">mdi-asterisk</v-icon>
                      </v-row>
                      <v-row>
                        <v-text-field v-model="password" solo :type="(visibility === false)? 'password':'text'"
                                      :rules="[rules.required(password), rules.counterMAX(password), rules.counterMIN(password)]"
                                      placeholder="Contraseña" v-on:keydown.enter="register"
                                      size="24%" outlined style="font-size: 18px"
                                      :append-icon="(visibility === false)? 'mdi-eye': 'mdi-eye-off'"
                                      @click:append="visibility = !visibility"/>
                        <v-icon small color="red" style="top: -30px;left: -20px">mdi-asterisk</v-icon>
                      </v-row>
                      <div style="min-height: 38px">
                        <p v-if="emailUsed === true" class="textoRespuesta" style="color: #ff5252">
                          Email o nombre de usuario ya registrado
                        </p>

                        <div v-else-if="emailReceived === true">
                          <v-row class="mx-0">
                            <p v-if="!loading" class="textoRespuesta"
                               style="color: #4BB543; position: relative; bottom: -6px">
                              Email de confirmacion enviado
                            </p>

                            <v-spacer/>

                            <v-btn v-if="canResend" class="rounded-pill textoRespuesta" color="primary"
                                   v-on:click="resend_verification()">
                              Reenviar
                            </v-btn>
                          </v-row>
                        </div>

                        <div class="text-center" v-if="loading === true">
                          <v-progress-circular
                              indeterminate
                              color="primary"/>
                        </div>

                      </div>

                      <router-link to="/noimplementado">
                        <p id="EcharleUnVistazo">
                          Echarle un vistazo
                        </p>
                      </router-link>

                      <v-btn v-on:click="register" width="100%" height="48px" depressed color="#3C3C3C"
                             class="CustomButton white--text">
                        Registrarse
                      </v-btn>
                      <p id="LineasDeFondo">
                        <span id="RegistrateCon">
                          O regístrate con
                        </span>
                      </p>

                      <div>
                        <v-row justify="space-around">
                          <v-col v-for="icon in icons" :key="icon.name" class="text-center">
                            <v-btn icon to="/implementar" style="vertical-align: top;">
                              <v-icon color="gray">{{ icon.name }}</v-icon>
                            </v-btn>
                          </v-col>
                        </v-row>
                      </div>
                    </div>
                  </div>

                  <div class="columnCustom" v-if="$vuetify.breakpoint.mdAndUp">
                    <v-img id="imgLogo" :src="require('../../assets/images/logo.png')" alt="Logo"/>
                  </div>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>

        <p class="textoImg1yDescargaAPP mt-15">
          ¿Querés entrenar? ¡Descargate nuestra app!
        </p>

        <v-row justify="center">
          <v-col>
            <div style="text-align: right;">
              <v-btn to="/implementar" height="64px" width="350px" class="CustomButton mr-2 white--text rounded-pill"
                     depressed
                     color="#3C3C3C">
                <v-icon medium style="position: relative; left: -12px;">fab fa-google-play</v-icon>
                Descargar en Google Play
              </v-btn>
            </div>
          </v-col>
          <v-col>
            <v-btn to="/implementar" height="64px" width="350px" class="CustomButton ml-2 white--text rounded-pill"
                   depressed
                   color="#3C3C3C" left>
              <v-icon large style="position: relative; left: -12px;">fab fa-app-store</v-icon>
              Descargar en App Store
            </v-btn>
          </v-col>
        </v-row>

        <p class="queOfrecemos"> ¿Qué ofrece Get Krackin'?</p>

        <v-row v-for="(description, index) in descriptions" :key="description.title">
          <v-col :order="index % 2">
            <v-img :src="description.src" :alt=description.imgAlt width="864px"/>
          </v-col>
          <v-col :order="(index+1) % 2">
            <div class="Descripcion">
              <p class="TituloDescripcion">{{ description.title }}</p>
              <p class="TextoDescripcion">{{ description.desc }}</p>
            </div>
          </v-col>
        </v-row>

      </v-container>
    </div>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
import NavBar from "@/components/NavBar"
import {UserApi, Credentials} from "@/api/user";

export default {
  name: 'Home',
  components: {
    NavBar
  },
  data() {
    return {
      visibility: false,
      icons: [
        {name: 'fab fa-google'},
        {name: 'fab fa-facebook'},
        {name: 'fab fa-instagram'},
      ],
      emailUsed: false,
      emailReceived: false,
      canResend: true,
      loading: false,
      username: '',
      email: '',
      password: '',
      rules: {
        required: value => !!value || 'Requerido.',
        counterMAX: value => value.length < 20 || 'Inserte menos de 20 caracteres.',
        counterMIN: value => value.length > 6 || 'Inserte mas de 6 caracteres.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Formato de mail invalido.'
        },
      },
      descriptions: [
        {
          src: require('@/assets/images/chat.png'),
          imgAlt: 'Ejemplo de chat con alumnos',
          title: ' Hablá con tus clientes',
          desc: 'Disponemos de un sistema que te permite estar comunicado siempre.',
        }, {
          src: require('../../assets/images/eventos.png'),
          imgAlt: 'Ejemplo de calendario',
          title: ' Agendá eventos',
          desc: 'Maneja tus entrenamientos con tus alumnos desde nuestra aplicación, coordinando una fecha especifica.',
        }, {
          src: require('../../assets/images/estadisticas.png'),
          imgAlt: 'Ejemplo de estadisticas',
          title: ' Estadísticas',
          desc: 'Seguí tu crecimiento como entrenador en la aplicación.',
        }, {
          src: require('../../assets/images/rutinas.png'),
          imgAlt: 'Ejemplo de rutinas',
          title: ' Creá rutinas',
          desc: 'Crea rutinas personalizadas a partir de tus propios ejercicios o de los que disponemos como default.',
        },
      ],
    }
  },
  icons: {
    iconfont: 'fa',
  },
  methods: {
    async register() {
      if (this.rules.required(this.username) !== true || this.rules.counterMIN(this.username) !== true
          || this.rules.counterMAX(this.username) !== true || this.rules.required(this.password) !== true
          || this.rules.counterMIN(this.password) !== true || this.rules.counterMAX(this.password) !== true
          || this.rules.required(this.email) !== true || this.rules.email(this.email) !== true) {
        // SI FALLA ALGUNOS DE LOS REQUISITOS(SUCEDE CUANDO NO RETORNAN TRUE(ALGUNOS AL FALLAR RETORNAN UN STRING)), IMPIDO EL POST
        return
      }
      this.loading = true;
      const result = await UserApi.register(this.username, this.password, this.email, null);
      this.loading = false;
      if (result === null) {
        console.log("ERROR: NADA RECIBIDO");
      } else if (result.id) {
        const log = new Credentials(this.username, this.password);
        this.emailUsed = false;
        this.emailReceived = true;
        console.log(log);
      } else if (result.code === 2) {
        this.emailReceived = false;
        this.emailUsed = true;
      }
    },
    async resend_verification() {
      this.canResend = false;
      this.loading = true;
      await UserApi.resend(this.email, null);
      this.loading = false;
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: "NotoSans-Regular";
  src: url("../../assets/fonts/NotoSans-Regular.ttf");
}

@font-face {
  font-family: "NotoSans-Bold";
  src: url("../../assets/fonts/NotoSans-Bold.ttf");
}

@font-face {
  font-family: "NotoSans-SemiBold";
  src: url("../../assets/fonts/NotoSans-SemiBold.ttf");
}

.textoImg1yDescargaAPP {
  margin-top: 20px;
  color: #3E3E3E;
  font-family: NotoSans-SemiBold, sans-serif;
  font-size: 30px;
  text-align: center;
}

#LineasDeFondo {
  text-align: center;
  width: 100%;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin-top: 35px;
  margin-bottom: 0;
}

#RegistrateCon {
  color: #3D3D3D;
  font-family: NotoSans-SemiBold, sans-serif;
  font-size: 13px;
  background: #fff;
  padding: 0 10px;
}

#EcharleUnVistazo {
  color: #707070;
  font-family: NotoSans-Regular, sans-serif;
  font-size: 20px;
}

.textoRespuesta {
  font-family: NotoSans-SemiBold, sans-serif !important;
  font-size: 16px !important;
  text-transform: none !important;
  margin-bottom: 0 !important;
}

#registerTitle {
  color: #3D3D3D;
  font-family: NotoSans-Bold, sans-serif;
  font-size: 32px;
  margin-bottom: 5px;
}

#imgLogo {
  position: relative;
  top: 25%;
  left: 15%;
  height: 300px;
  width: 300px;
}

.queOfrecemos {
  color: #3E3E3E;
  font-family: NotoSans-Bold, sans-serif;
  font-size: 45px;
  text-align: center;
  margin-top: 7%;
  margin-bottom: 3%;
}

.TituloDescripcion {
  color: #3E3E3E;
  font-family: NotoSans-Bold, sans-serif;
  margin-left: 10%;
  font-size: 36px;
  text-align: left;
}

.TextoDescripcion {
  color: #3E3E3E;
  font-family: NotoSans-Bold, sans-serif;
  margin-left: 10%;
  font-size: 28px;
  text-align: left;
}

.Descripcion {
  position: relative;
  top: 25%;
}

.rowCustom {
  display: flex;
}

.columnCustom {
  float: left;
  width: 50%;
}

/* Clear floats after the columns */
.rowCustom:after {
  content: "";
  display: table;
  clear: both;
}

.reg {
  padding-left: 15%;
  padding-top: 10px;
  vertical-align: middle;
}

/* Para las propiedades de los botones */
.CustomButton {
  font-family: NotoSans-SemiBold, sans-serif !important;
  font-size: 16px !important;
  text-transform: none !important;
  text-decoration: none;
  color: gray;
  position: relative;
  bottom: 1px !important; /* Para que este alineado con el icono de las apps stores */
}

</style>
