<template>

  <div>
    <v-card width="341px" height="260px" depressed color=#3C3C3C class="white--text" style="border-radius: 10%">
      <div class="inputCustom">
        <div class="input" style="margin-top: 8px; margin-left: 5px">
          <input type="text" placeholder="Usuario" style="font-size: 16px">
        </div>
        <div class="input" style="margin-top: 8px; margin-left: 5px">
          <input type="password" placeholder="Contraseña" style="font-size: 16px">
          <v-icon>mdi-eye</v-icon>
        </div>
      </div>
      <p class="olvidaste">Olvidaste tu contraseña?</p>
    </v-card>
  </div>

</template>

<script>
  export default {
    name: "Login"
  }
</script>

<style scoped>
.olvidaste {
    font-family: NotoSans-Regular;
    font-size: 15px;
    text-decoration: underline;
}
</style>