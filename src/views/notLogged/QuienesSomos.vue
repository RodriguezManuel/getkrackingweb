<template>
  <div>
    <NavBar/>

    <v-container class="ma-6">
      <div class="textoBold">
        <p>Trabajo Practico Especial numero 2</p>
        <p>Interaccion Hombre-Computadora</p>
        <p>Instituto Tecnologico de Buenos Aires</p>
      </div>
      <div class="texto">
        <p>GRUPO Nº7</p>
        <p>Integrantes del grupo:</p>
        <v-list>
          <v-list-item>60476 Cruz, Ana</v-list-item>
          <v-list-item>60212 Riera Torraca, Valentino</v-list-item>
          <v-list-item>60258 Rodriguez, Manuel Joaquin</v-list-item>
          <v-list-item>60312 Zavalia Pangaro, Salustiano Jose</v-list-item>
        </v-list>
      </div>
    </v-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "QuienesSomos",

  components: {
    NavBar
  }
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

#textoBold {
  color: #3D3D3D;
  font-family: NotoSans-Bold, sans-serif;
  font-size: 56px;
}

#texto {
  color: #3D3D3D;
  font-family: NotoSans-Regular, sans-serif;
  font-size: 56px;
}
</style>