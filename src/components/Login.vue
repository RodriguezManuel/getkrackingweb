



<template>
  <div>
    <v-card outlined rounded width="338px" height="200px" depressed color=#3C3C3C class="white--text rounded-pill">
      <h1> Iniciar sesión</h1>
      <div class="inputCustom">
        <div class="input" style="margin-top: 8px; margin-left: 5px">
          <input type="text" placeholder="Usuario" style="font-size: 16px">
        </div>
        <div class="input" style="margin-top: 8px; margin-left: 5px">
          <input type="password" placeholder="Contraseña" style="font-size: 16px">
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: "Login"
  }
</script>