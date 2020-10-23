<template>
  <div style="vertical-align:middle; horiz-align: center; ">
        <div>
          <titulo>¡YA CASI ESTÁ LISTO!</titulo>
        </div>
        <texto> Insertá tu mail:</texto>
        <v-text-field
            label="Email"
            placeholder="Email"
            size="27%" outlined
            :rules="[rules.required(email), rules.email(email)]"
            hide-details="auto"
            v-model="email"
        ></v-text-field>
        <texto> Insertá el codigo de verificación:</texto>
        <v-text-field
            label="Code"
            placeholder="Code"
            size="27%" outlined
            :rules="[rules.required(code), rules.counterCode(code)]"
            hide-details="auto"
            v-model="code"
        ></v-text-field>
    <v-btn v-on:click="verif()" style="color:#FBAC31"> verificar</v-btn>
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
      email:'',
      rules: {
        required: value => !!value || 'Requerido.',
        counterCode: value => value.length ==6,
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Formato de mail invalido.'
        },
      }
    }
  },
  methods: {
    async verif(){
      // eslint-disable-next-line no-undef
      const v = new ToVerify(this.email, this.code);
      UserApi.verify(v, null);
      console.log("AAAAAAAA");
    }
  },
}
</script>

<style scoped>

titulo {
  font-family: NotoSans-Bold;
  font-size: 35px;
  color: #FBAC31;
  text-align: center;
  margin-top: 15px;
}
texto {
  font-family: NotoSans-Regular;
  font-size: 20px;
  color: #2B2B2B;
  text-align: left;
  margin-left: 15px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}

</style>
