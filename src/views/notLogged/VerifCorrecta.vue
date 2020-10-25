<template>
  <div style="position: relative; top: 5%; left: 5%;">
    <v-card align="center" width="600px" style="border-radius:25px">
      <v-card-title>
        <p class="titulo mt-7 mx-auto">¡YA CASI ESTÁ LISTO!</p>
      </v-card-title>
        <p class="texto"> Insertá tu mail:</p>
      <div style="width: 400px;">
        <v-text-field
            label="Email"
            placeholder="Email" outlined
            :rules="[rules.required(email), rules.email(email)]"
            hide-details="auto"
            v-model="email"/>
      </div>
      <p class="texto mt-7"> Insertá el codigo de verificación:</p>
      <div style="width: 400px; height: 80px">
        <v-text-field
            label="Codigo"
            placeholder="Code" outlined
            :rules="[rules.required(code), rules.counterCode(code)]"
            hide-details="auto"
            v-model="code"
        />
      </div>
      <v-btn v-on:click="verif()" color="primary" class="black--text my-7 CustomButton rounded-pill">
        Verificar
      </v-btn>
      <div style=" height: 30px">
        <p v-if="codigoInvalido" class="texto" style="color: #ff5252; text-align: center">Verificacion erronea.</p>
      </div>
    </v-card>
  </div>
</template>


<script>
import {UserApi, ToVerify} from "@/api/user";
//import Api from "@/api/api";
export default {
  name: "Verificacion",
  data() {
    return {
      user: this.$route.query.user,
      token: this.$route.query.token,
      code: '',
      email: '',
      codigoInvalido: false,
      rules: {
        required: value => !!value || 'Requerido.',
        counterCode: value => value.length == 6,
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Formato de mail invalido.'
        },
      }
    }
  },
  methods: {
    async verif() {
      // eslint-disable-next-line no-undef
      const v = new ToVerify(this.email, this.code);
      let result = await UserApi.verify(v, null);
      if(result)
        location.assign('/');
      else
        this.codigoInvalido = true;
    }
  },
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
titulo {
  font-family: NotoSans-Bold;
  font-size: 35px;
}

texto {
  font-family: NotoSans-Regular;
  font-size: 20px;
  color: #2B2B2B;
  text-align: left;
}

/*Para que el boton tenga las propiedades buscadas*/
.CustomButton {
  font-family: NotoSans-Regular, sans-serif !important;
  font-size: 20px !important;
  text-transform: none !important;
}

</style>
