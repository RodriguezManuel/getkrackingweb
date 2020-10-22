<template>
  <div>
    <h1> Insertar el codigo de verificación</h1>
    <input v-model="email" placeholder="tu mail"/>
    <input v-model="code" placeholder="tu código"/>
    <p>{{user}}, {{token}}</p>
    <p>{{email}}, {{code}}</p>
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
    }
  },
  methods: {
    async verif(){
      /*
      Api.setToken(this.token);
      console.log("ya setie token");
      console.log(Api.token);
      const email = UserApi.getCurrent().email;
      */
      // eslint-disable-next-line no-undef
      const v = new ToVerify(this.email, this.code);
      UserApi.verify(v, null);
      console.log("AAAAAAAA");
    }
  },
}
</script>

<style scoped>

</style>
