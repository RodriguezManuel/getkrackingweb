<template>
  <v-app>
    <NavBar/>

    <div class="home">
      <v-container>
        <v-layout row justify-space-around>
          <v-col md="6" class="d-flex">
            <v-card class="elevation-10" v-responsive>
              <v-img :src="require('../assets/images/home1.png')" alt="Persona haciendo ejercicio" >
                <p class="hidden-sm-and-down">Armá rutinas fácil y compartilas con tus alumnos</p>
              </v-img>
            </v-card>
          </v-col>

          <v-col md="6" class="d-flex">
            <v-card class="elevation-10" v-responsive>
              <div class="row">
                <div class="column">
                  <h1 class="ml-4">
                    MBHERTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTtt
                  </h1>
                </div>
                <div class="column">
                  <v-img id="imgLogo" :src="require('../assets/images/logo.png')" alt="Logo" contain class="pr-auto"/>
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
  height: 300px;
  width: 300px;
}

.row {
  display: flex;
}

.column {
  float: left;
  width: 50%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
