<template>
  <v-app>
    <NavBar/>

    <div class="home">
      <v-container>
        <v-layout row>
          <v-col>
            <div style="border-style: solid">
              <v-card class="elevation-10 hidden-sm-and-down" color=#F3BB96>
                <v-img :src="require('../assets/images/home1.png')" alt="Persona haciendo ejercicio">
                  <p id="textoImg1">Armá rutinas fácil y compartilas con tus alumnos</p>
                </v-img>
              </v-card>
            </div>
          </v-col>

          <v-col>
            <div style="border-style: solid">
              <v-card class="elevation-10" height="100%" min-height="596">

                <div class="rowCustom fill-height">
                  <div class="columnCustom">
                    <div class="reg">
                      <p class="registerTitle">
                        Registrate!
                      </p>

                      <div class="inputCustom">
                        <div class="input" style="margin-top: 8px; margin-left: 5px">
                          <input type="text" v-model="message" placeholder="Mail" style="font-size: 16px">
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

                      <v-spacer></v-spacer>
                      <p>
                        <router-link to="/mbhert">
                          Echarle un vistazo
                        </router-link>
                      </p>
                      <a>
                        <v-btn block width="280px" height="48px" elevation="1" depressed color="#3C3C3C"
                               class="white--text">
                          Registrarse
                        </v-btn>
                      </a>
                    </div>
                  </div>

                  <div class="columnCustom hidden-sm-and-down">
                    <v-img id="imgLogo" :src="require('../assets/images/logo.png')" alt="Logo"/>
                  </div>
                </div>

              </v-card>
            </div>
          </v-col>
        </v-layout>
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

#textoImg1 {
  color: #3E3E3E;
  font-family: NotoSansRegular;
  font-size: 30px;
  text-align: center;
}

p {
  color: #3E3E3E;
  font-family: NotoSansBold;
  font-size: 30px;
}

registerTitle {
  color: #FFFFFF;
  font-family: NotoSansBold;
  font-size: 32px;
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
  margin-top: 5px;
  height: 48px
}

.reg {
  padding-left: 25%;
  padding-top: 20%;
  vertical-align: middle;
  position: center;
}

/* Para las propiedades del boton de iniciar sesion */
.v-btn.v-size--default {
  font-family: NotoSansRegular;
  font-size: 16px;
  text-transform: none;
}
</style>
