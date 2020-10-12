<template>
  <v-app>
    <side-bar/>
    <top-bar/>
    <v-container style="margin-top: 30px;">
      <v-row justify="space-around" style="height: 100%;">
        <v-col v-for="tarjeta in tarjetas" :key="tarjeta.title" justify="space-around">
          <div align="center" style="height: 100%;">
            <v-card width="80%" height="171px" depressed color="white" class="white--text"
                    style="border-radius: 40px;" align="left">
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
                  <v-avatar size="100" color="#FBAC31" style="top: 20px; left: -25px;">
                      <span class="white--text" style="font-size: 30px;">
                        {{ tarjeta.numero }}
                      </span>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>

  </v-app>
</template>

<script>
import SideBar from "@/components/SideBar"
import TopBar from "@/components/TopBar"

export default {
  name: "Home",
  components: {TopBar, SideBar},
  data() {
    return {
      tarjetas: [{
        title: 'Seguidores nuevos',
        linea1: 'Mbhert Sicardi',
        linea2: 'Total seguidores nuevos: 191',
        numero: 13,
      },{
        title: 'Mensajes no leidos',
        linea1: 'De: Diego Maradona',
        linea2: 'Leonel Messias',
        numero: 1,
      },{
        title: 'Eventos hoy',
        linea1: 'Cumpleanios jerusa',
        linea2: 'Maraton nike 110km',
        numero: 2,
      }
      ]
    }
  }
}
</script>

<style scoped>
.textoTarjetas {
  font-family: NotoSans-Regular;
  font-size: 20px;
  color: #7C7C7C;
  margin-left: 30px;
}
</style>