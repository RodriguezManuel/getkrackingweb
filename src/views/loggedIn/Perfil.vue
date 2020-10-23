<template>
  <div>
    <side-bar/>
    <top-bar/>
    <v-row justify="center">
      <v-card class="my-16" style="min-width: 70%; border-radius: 20px;">

        <v-row justify="center">
          <v-avatar size="220" class="mt-4">
            <v-img src="@/assets/images/default.png" />
          </v-avatar>
        </v-row>

        <v-row justify="center" class="mt-6">
          <v-col cols="2">
            <p class="texto mt-9" style="text-align: center">Nombre</p>
          </v-col>
          <v-col cols="8">
            <v-row>
              <div style="width: 650px">
                <v-text-field v-model="nombre" outlined class="texto"
                              :disabled="(editNombre !== true)"
                              :rules="[rules.required(nombre), rules.counterNameMAX(nombre)]"
                              rounded background-color="#F7F2F2"/>
              </div>
              <v-icon size="34" color="#8B8686" style="position: relative; bottom: 5px; left: 5px;"
                      @click="editNombre = !editNombre">
                mdi-pencil
              </v-icon>
            </v-row>
          </v-col>
        </v-row>


        <v-row justify="center" >
          <v-col cols="2">
            <p class="texto mt-9" style="text-align: center">Username</p>
          </v-col>
          <v-col cols="8">
            <v-row>
              <div style="width: 650px">
                <v-text-field v-model="username" outlined class="texto"
                              :disabled="(editUsername !== true)" prepend-icon=""
                              :rules="[rules.required(username), rules.counterMIN(username),rules.counterNameMAX(username)]"
                              rounded background-color="#F7F2F2"/>
              </div>
              <v-icon size="34" color="#8B8686" style="position: relative; bottom: 5px; left: 5px;"
                      @click="editUsername = !editUsername">
                mdi-pencil
              </v-icon>
            </v-row>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="2">
            <p class="texto mt-2" style="text-align: center">Email</p>
          </v-col>
          <v-col cols="8">
            <v-row>
              <div style="width: 650px">
                <v-text-field v-model="email" outlined class="texto"
                              :disabled="(editEmail !== true)"
                              :rules="[rules.required(email), rules.email(email)]"
                              rounded background-color="#F7F2F2"/>
              </div>
              <v-icon size="34" color="#8B8686" style="position: relative; bottom: 15px; left: 5px;"
                      @click="editEmail = !editEmail">
                mdi-pencil
              </v-icon>
            </v-row>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="2">
            <p class="texto mt-2" style="text-align: center">Contraseña</p>
          </v-col>
          <v-col cols="8">
            <v-row>
              <div style="width: 650px">
                <v-text-field v-model="password" outlined class="texto"
                              :type="(visibility === false)? 'password':'text'"
                              placeholder="Contraseña" :disabled="(editPassword !== true)"
                              :rules="[rules.required(password), rules.counterMAX(password), rules.counterMIN(password)]"
                              rounded background-color="#F7F2F2"
                              :append-icon="(visibility === false)? 'mdi-eye': 'mdi-eye-off'"
                              @click:append="visibility = !visibility"/>
              </div>
              <v-icon size="34" color="#8B8686" style="position: relative; bottom: 15px; left: 5px;"
                      @click="editPassword = !editPassword">
                mdi-pencil
              </v-icon>
            </v-row>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="2">
            <p class="texto mt-2" style="text-align: center;">Fecha de nacimiento</p>
          </v-col>
          <v-col cols="8">
            <v-row>
              <div style="width: 650px" class="mt-3">
                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date"
                        transition="scale-transition"
                        offset-y max-width="290px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="date" label="Selecciona una fecha" prepend-icon="mdi-calendar" readonly
                                  v-bind="attrs" v-on="on" class="texto" outlined rounded background-color="#F7F2F2"/>
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer/>
                    <v-btn text color="orange" @click="menu = false">Cancel</v-btn>
                    <v-btn text color="orange" @click="$refs.menu.save(date)">Save</v-btn>
                  </v-date-picker>
                </v-menu>
              </div>
            </v-row>
            <v-spacer/>
          </v-col>
        </v-row>

        <div style="text-align: center;" class="my-8">
          <v-btn to="/implementar" height="64px" width="350px" class="CustomButton mr-2 gray darken-0 rounded-pill"
                 depressed>
            <v-icon large style="position: relative; left: -12px;">mdi-content-save-outline</v-icon>
            Guardar cambios
          </v-btn>
          <v-btn to="/implementar" height="64px" width="350px" class="CustomButton rounded-pill" depressed
                 color=primary>
            <v-icon large style="position: relative; left: -12px;">mdi-logout</v-icon>
            Cerrar sesión
          </v-btn>
        </div>


        <!--        BOTONES CON POSICION ABSOLUTA-->
        <v-icon size="62" to="/implementar" color="#8B8686"
                style="position: absolute; top: 180px; right: 40%;z-index: 1">mdi-pencil-circle
        </v-icon>

      </v-card>
    </v-row>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar"
import TopBar from "@/components/TopBar"
import { UserApi} from "@/api/user";

export default {
  name: "Perfil",
  components: {SideBar, TopBar},
  data() {
    return {
      nombre: 'Julian Sicardi',
      editNombre: false,
      username: 'juliansicardi99',
      editUsername: false,
      email: 'juliansicardicabjcasla@yahoort.com',
      editEmail: false,
      password: 'pastaconfrutidimare',
      editPassword: false,
      visibility: false,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      userInfo: '',
      image: '',
      rules: {
        required: value => !!value || 'Requerido.',
        counterMIN: value => value.length > 6 || 'Inserte mas de 6 caracteres.',
        counterMAX: value => value.length < 20 || 'Inserte menos de 20 caracteres.',
        counterNameMAX: value => value.length < 30 || 'Inserte menos de 30 caracteres.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Formato de mail invalido.'
        },
      },
    }
  },
  async created(){
    this.userInfo = await UserApi.getUserData(null);
    this.image = this.userInfo.avatarUrl;
    console.log(this.image);
  }
}
</script>

<style scoped>
@font-face {
  font-family: "NotoSans-SemiBold";
  src: url("../../assets/fonts/NotoSans-SemiBold.ttf");
}

.texto {
  font-family: NotoSans-SemiBold, sans-serif;
  font-size: 26px;
  color: #8B8686;
}


/* Para las propiedades de los botones */
.CustomButton {
  font-family: NotoSans-SemiBold, sans-serif !important;
  font-size: 26px !important;
  text-transform: none !important;
}

</style>