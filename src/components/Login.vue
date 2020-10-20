<template>

  <v-card width="341px" depressed color=#3C3C3C class="white--text" style="border-radius: 44px;">


    <p class="titulo" style="margin-top: 17px; margin-left: 1px;">Iniciar sesión</p>
    <v-container class="inputCustom ml-auto mr-auto">
      <v-text-field solo dense type="text" placeholder="Nombre de usuario o email" size="27%" outlined
                    style="font-size: 18px;" height="34%"/>

      <v-text-field solo dense :type="(visibility === false)? 'password':'text'" placeholder="Contraseña"
                    size="24%" outlined style="font-size: 18px"
                    :append-icon="(visibility === false)? 'mdi-eye': 'mdi-eye-off'" @click:append="visibility = !visibility"/>

      <p class="olvidaste">Olvidaste tu contraseña?</p>
      <!--      DEBERIA APUNTAR A ALGUN LADO-->
      <div class="text-center">
        <v-btn height="32px" class="rounded-pill white black--text" to="/loggedhome">Ingresar</v-btn>
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
export default {
  name: "Login",
  data() {
    return {
      visibility: false,
      icons: [
        {name: 'fab fa-google'},
        {name: 'fab fa-facebook'},
        {name: 'fab fa-instagram'},
      ]
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
@font-face {
  font-family: "NotoSansSemiBold";
  src: url("../assets/fonts/NotoSans-SemiBold.ttf");
}


.olvidaste {
  font-family: NotoSans-Regular;
  font-size: 18px;
  text-decoration: underline;
  text-align: center;
}

.titulo {
  font-family: NotoSansSemiBold;
  font-size: 30px;
  text-align: center;
  letter-spacing: 0.0892857143em;
}


/* Para las propiedades del boton de iniciar sesion */
.v-btn.v-size--default {
  font-family: NotoSans-Regular;
  font-size: 20px;
  text-transform: none;
  text-decoration: none;
}

</style>