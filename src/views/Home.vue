<template>
  <v-app>
    <NavBar/>

    <div class="home">
      <v-responsive>
      <v-container>
        <v-layout row justify-space-around>
          <v-col md="6" xs="12" sm="10" class="d-flex">
            <v-card class="elevation-10 hidden-sm-and-down" color=#F3BB96>
              <v-img :src="require('../assets/images/home1.png')" alt="Persona haciendo ejercicio">
                <p>Armá rutinas fácil y compartilas con tus alumnos</p>
              </v-img>
            </v-card>
          </v-col>
          <v-col md="6" xs="12" sm="10" class="d-flex" >
            <v-card class="elevation-10">
              <div class="rowCustom">
                <div class="columnCustom">
                  <div class="reg">
                    <h1 class="align-center">
                      Registrate!
                    </h1>
                    <div class="input">

                      <input type="text" v-model="message" placeholder="nombre">
                    </div>
                    <div class="generalcontainer nomargin"><!--------------------->
                      <input :type="visibility" :class="{'u-full-width' : !onlyunder, 'u-full-width onlyunder': onlyunder}" style="padding-right: 35px; width:75%;"
                             :maxlength='maxlength' :placeholder="placeholder" v-bind:value="value"><!--v-on:input="$emit('input', $event.target.value}"-->
                      <a @click="showPassword()" style="position: relative;" class="notunderlined" v-if="visibility == 'password'">
                          <v-icon>mdi-eye</v-icon>
                      </a>
                      <a @click="hidePassword()" style="position: relative;" class="notunderlined" v-if="visibility == 'text'">
                          <v-icon>mdi-eye-off</v-icon>
                      </a>
                    </div><!----------------------------->
                    <div>
                      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" id="vistazoLink"> Echarle un vistazo</a>
                    </div>
                    <div >
                      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style="text-decoration: none" >
                        <v-btn block elevation="1" depressed color ="#3C3C3C" class="white--text" style="border-radius: 0px;" >Registrarse</v-btn>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="columnCustom">
                  <v-img id="imgLogo" :src="require('../assets/images/logo.png')" alt="Logo" contain class="pt-auto pb-auto pr-auto"/>
                </div>
              </div>
            </v-card>

          </v-col>
        </v-layout>
      </v-container>
      </v-responsive>
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
  data(){
    return {
      visibility: 'password',
    }
  },
  props: {
    placeholder: {type: String , default: ''},
    value: {type: String , default: ''},
    maxlength: {type: Number, default: 50},
    onlyunder: {type: Boolean, default: false}
  },
  methods:{
    showPassword(){
      this.visibility = 'text';
    },
    hidePassword(){
      this.visibility= 'password';
    }
  }

}
</script>

<style scoped>
@font-face {
  font-family: "NotoSansRegular";
  src: url("../assets/fonts/NotoSans-Regular.ttf");
}

p {
  text-align: center;
  color: #3E3E3E;
  font-family: NotoSansRegular;
  font-size: 30px;
}

#imgLogo{
  vertical-align: middle;
  right: -15px;
  height: 300px;
  width: 300px;
}
#vistazoLink{
  color:gray;
  position: relative;
  left: 15px;
  bottom: 1px;
  margin: 15px;
  font-family: NotoSansRegular;
}
.regButton {
  font-family: NotoSansRegular;
  background-color: gray;
  border: none;
  color: white;
  padding: 5px 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  position: relative;
  left: 10px;
}
.rowCustom {
  display: flex;
  margin: 10%;
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
/*
.input{
  margin: 7px;
  border: 2px solid black;
  border-radius: 7px;
  font-size: 1em;
}*/
.reg{
  vertical-align: middle;
  padding-bottom: 0;
  padding-top: 0;
  position:center;
}
</style>
