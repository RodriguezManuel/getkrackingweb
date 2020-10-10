<template>
  <v-app>
    <NavBar/>

    <div class="home">

      <v-container style="margin: auto">
        <v-row justify="space-around">
          <v-col v-if="$vuetify.breakpoint.mdAndUp">
            <div height="550px" width="863px" class="elevation-10" style="border-style: solid">
              <v-card color="#f3BB96">
                <v-img :src="require('../assets/images/home1.png')" alt="Persona haciendo ejercicio">
                  <p class="textoImg1yDescargaAPP">Armá rutinas fácil y compartilas con tus alumnos</p>
                </v-img>
              </v-card>
            </div>
          </v-col>

          <v-col >
            <div class="elevation-10" style="border-style: solid" height="550px" width="863px">
              <v-card height="550px">
                <div class="rowCustom fill-height">
                  <div class="columnCustom">
                    <div class="reg">
                      <p id="registerTitle">
                        Registrate!
                      </p>

                      <div class="inputCustom">
                        <div class="input" style="margin-top: 8px; margin-left: 5px">
                          <input type="text" placeholder="Mail" style="font-size: 16px">
                        </div>
                      </div>

                      <div class="inputCustom">
                        <input :type="visibility"
                               :class="{'u-full-width' : !onlyunder, 'u-full-width onlyunder': onlyunder}"
                               style="padding-right: 35px; width:75%; margin-top: 8px; margin-left: 5px;"
                               :maxlength='maxlength' :placeholder="placeholder" v-bind:value="value">
                        <!--v-on:input="$emit('input', $event.target.value}"-->
                        <a @click="showPassword()" style="position: relative;" class="notunderlined"
                           v-if="visibility == 'password'">
                          <v-icon>mdi-eye</v-icon>
                        </a>
                        <a @click="hidePassword()" style="position: relative;" class="notunderlined"
                           v-if="visibility == 'text'">
                          <v-icon>mdi-eye-off</v-icon>
                        </a>
                      </div>

                      <router-link to="/mbhert">
                        <p id="EcharleUnVistazo">
                          Echarle un vistazo
                        </p>
                      </router-link>
                      <v-btn width="280px" height="48px" elevation="1" depressed color="#3C3C3C"
                             class="white--text mt-2">
                        Registrarse
                      </v-btn>
                      <p id="LineasDeFondo">
                        <span id="RegistrateCon">
                          O regístrate con
                        </span>
                      </p>
                    </div>
                  </div>

                  <div class="columnCustom" v-if="$vuetify.breakpoint.mdAndUp">
                    <v-img id="imgLogo" :src="require('../assets/images/logo.png')" alt="Logo"/>
                  </div>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>

        <p class="textoImg1yDescargaAPP">
          Querés entrenar? Descargate nuestra app!
        </p>

        <v-row>
          <v-col>
            <div align="right">
              <v-btn align="right" height="64px" width="350px" class="mr-2 white--text rounded-pill" depressed
                     color="#3C3C3C">
                Descargar en Google Play
              </v-btn>
            </div>
          </v-col>
          <v-col>
            <v-btn height="64px" width="350px" class="ml-2 white--text rounded-pill" depressed color="#3C3C3C">
              Descargar en App Store
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: 'Home',
  components: {
    NavBar
  },
  data() {
    return {
      visibility: 'password',
    }
  },
  props: {
    placeholder: {type: String, default: ''},
    value: {type: String, default: ''},
    maxlength: {type: Number, default: 50},
    onlyunder: {type: Boolean, default: false}
  },
  methods: {
    showPassword() {
      this.visibility = 'text';
    },
    hidePassword() {
      this.visibility = 'password';
    }
  }

}
</script>

<style scoped>
@font-face {
  font-family: "NotoSansRegular";
  src: url("../assets/fonts/NotoSans-Regular.ttf");
}

@font-face {
  font-family: "NotoSansBold";
  src: url("../assets/fonts/NotoSans-Bold.ttf");
}

.textoImg1yDescargaAPP {
  margin-top: 20px;
  color: #3E3E3E;
  font-family: NotoSansRegular;
  font-size: 30px;
  text-align: center;
}

#LineasDeFondo {
  text-align: center;
  width: 280px;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: 35px 0 20px;
}

#RegistrateCon {
  color: #3D3D3D;
  font-family: NotoSansRegular;
  font-size: 13px;
  background: #fff;
  padding: 0 10px;
}

#EcharleUnVistazo {
  color: #707070;
  font-family: NotoSansRegular;
  font-size: 20px;
}

#registerTitle {
  color: #3D3D3D;
  font-family: NotoSansBold;
  font-size: 32px;
  margin-bottom: 35px;
}

#imgLogo {
  position: relative;
  top: 25%;
  left: 15%;
  height: 300px;
  width: 300px;
}

.v-application a {
  text-decoration: none;
  color: gray;
  position: relative;
  left: 15px;
  bottom: 1px;
  margin: 15px;
  font-size: 20px;
  font-family: NotoSansRegular;
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

.inputCustom {
  border-style: solid;
  border-color: grey;
  margin-top: 10px;
  height: 48px;
  width: 280px;
}

.reg {
  padding-left: 25%;
  padding-top: 20%;
  vertical-align: middle;
}

/* Para las propiedades del boton de iniciar sesion */
.v-btn.v-size--default {
  font-family: NotoSansRegular;
  font-size: 16px;
  text-transform: none;
}
</style>
