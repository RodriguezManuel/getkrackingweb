<template>
  <v-app>
    <NavBar/>

    <div class="home">
      <v-container>
        <v-layout row justify-space-around>
          <v-col lg="6" class="d-flex">
            <v-card class="elevation-10" v-responsive color=#F3BB96>
              <v-img :src="require('../assets/images/home1.png')" alt="Persona haciendo ejercicio" class="hidden-sm-and-down" >
                <p>Armá rutinas fácil y compartilas con tus alumnos</p>
              </v-img>
            </v-card>
          </v-col>
          <v-col lg="6" class="d-flex" >
            <v-card class="elevation-10" v-responsive>
              <div class="rowb">
                <div class="columnb">
                  <h1 class="align-center">
                    Registrate!
                  </h1>
                  <div class="input">
                    <input  type="text" value="Nombre">
                  </div>
                  <div class="input">
                    <input type="password" value="Contraseña">
                  </div>
                </div>
                <div class="columnb">
                  <v-img id="imgLogo" :src="require('../assets/images/logo.png')" alt="Logo" contain class="pt-auto pb-auto pr-auto"/>
                </div>
              </div>
            </v-card>
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
  right: -20px;
  height: 300px;
  width: 300px;
}

.rowb {
  display: flex;
  margin: 10%;
}

.columnb {
  float: left;
  width: 50%;
}

/* Clear floats after the columns */
.rowb:after {
  content: "";
  display: table;
  clear: both;
}
.input{
  margin: 7px;
  border: 2px solid black;
  border-radius: 7px;
  font-size: 1em;
}
</style>
