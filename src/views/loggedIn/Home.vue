<template>
  <div>
    <side-bar/>
    <top-bar/>

    <v-container>

      <v-row justify="space-between">
        <v-col v-for="tarjeta in tarjetas" :key="tarjeta.title" >
          <v-card width="80%" min-height="171px" depressed color="white" class="white--text mx-auto"
                  style="border-radius: 40px;" height="100%" :to="tarjeta.path" >
            <v-row>
              <v-col cols="9">
                <p class="textoTarjetas" style="font-size: 26px;">
                  {{ tarjeta.title }}
                </p>
                <p class="textoTarjetas">
                  {{ tarjeta.linea1 }}
                </p>
                <p class="textoTarjetas">
                  {{ tarjeta.linea2 }}
                </p>
              </v-col>

              <v-col cols="3">
                <v-avatar v-bind:size="($vuetify.breakpoint.lgAndUp)? 100: 60" color="#FBAC31"
                          style="top: 20px; left: -25px;">
                      <span class="white--text" style="font-size: 30px;">
                        {{ tarjeta.numero }}
                      </span>
                </v-avatar>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="space-around" class="mt-12">
        <v-col cols="7" justify="space-around">
          <v-card class="mx-auto" color="white" width="89%" height="543px" elevation="2" outlined style="border-radius: 13px">
            <v-card-title>
              <v-row>
                <v-col cols="8">
                  <p class="textoTarjetasGrandes">Cantidad de usos a mis rutinas</p>
                </v-col>
                <v-spacer/>
                <v-col cols="4" justify="space-between">
                  <v-btn @click="graph = 'month'"
                         v-bind:class="(graph === 'month')? 'grey darken-2 white--text': 'white black--text'"
                         style="margin-right: 5%">Month
                  </v-btn>
                  <v-btn @click="graph = 'week'"
                         v-bind:class="(graph === 'week')? 'grey darken-2 white--text': 'white black--text'">Week
                  </v-btn>
                </v-col>
              </v-row>

              <line-chart v-bind:data="(graph === 'week')? weekData: monthData" width="100%" height="440px"
                          colors="#7070" :dataset="{borderWidth: 10}"/>

            </v-card-title>
          </v-card>
        </v-col>
        <v-spacer/>
        <v-col cols="4" justify="space-around">

          <v-card color="white" width="89%" height="543px" elevation="2" outlined style="border-radius: 13px">
            <p class="textoTarjetasGrandes mt-4 ml-4">Rutinas populares</p>

            <v-row>
              <v-col>
                <p class="textoRutinasPopulares ml-3">Nombre</p>
              </v-col>
              <v-col>
                <p class="textoRutinasPopulares">Usuarios</p>
              </v-col>
            </v-row>

            <v-list>
              <v-list-item v-for="routine in routines" :key="routine.name">
                <v-row>
                  <v-col>
                    <div style="border-style: solid">
                      <p class="textoRutinasPopulares ml-2">{{ routine.name }}</p>
                    </div>
                  </v-col>
                  <v-col>
                    <p class="textoRutinasPopulares">{{ routine.users }}</p>
                  </v-col>
                </v-row>
              </v-list-item>
            </v-list>

          </v-card>

        </v-col>
      </v-row>
    </v-container>

    <boton-generar texto="Generar rutina nueva"/>

  </div>
</template>

<script>
import Vue from 'vue'
import SideBar from "@/components/SideBar"
import TopBar from "@/components/TopBar"
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import BotonGenerar from "@/components/BotonGenerar";

Vue.use(Chartkick.use(Chart))

export default {
  name: "Home",
  components: {BotonGenerar, TopBar, SideBar},
  data() {
    return {
      tarjetas: [{
        title: 'Seguidores nuevos',
        linea1: 'Mbhert Sicardi',
        linea2: 'Total: 191',
        numero: 13,
        path: '/implementar',
      }, {
        title: 'Mensajes no leidos',
        linea1: 'De: Diego Maradona,',
        linea2: 'Leonel Messias',
        numero: 2,
        path: '/implementar',
      }, {
        title: 'Eventos hoy',
        linea1: 'Cumpleanios jerusa',
        linea2: 'Maraton nike 110km',
        numero: 200,
        path: '/implementar',
      }
      ],
      graph: 'month',
      weekData: {
        '2020-05-14': 1,
        '2020-05-15': 0,
        '2020-05-16': 4,
        '2020-05-17': 3,
        '2020-05-18': 5,
        '2020-05-19': 4,
      },
      monthData: {'May': 29, 'Jun': 40, 'Jul': 10, 'Ago': 34, 'Sep': 35, 'Oct': 17},
      routines: [{
        name: 'Rutina 1',
        users: 1243,
      }, {
        name: 'Rutina 2',
        users: 992,
      }, {
        name: 'Rutina 3',
        users: 501,
      }, {
        name: 'Rutina 4',
        users: 1674,
      }, {
        name: 'Rutina 5',
        users: 123,
      }],
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: "GothamMedium";
  src: url("../../assets/fonts/Gotham-Medium.ttf");
}

.textoTarjetas {
  font-family: GothamMedium;
  font-size: 20px;
  color: #7C7C7C;
  margin-left: 30px;
}

.textoTarjetasGrandes {
  font-family: GothamMedium;
  font-size: 30px;
  color: #7C7C7C;
}

.textoRutinasPopulares {
  font-family: GothamMedium;
  font-size: 20px;
  margin-bottom: 0;
  color: #7C7C7C;
}

/* Para las propiedades de los botones del grafico */
.v-btn.v-size--default {
  font-family: GothamMedium;
  font-size: 16px;
  text-transform: none;
}
</style>