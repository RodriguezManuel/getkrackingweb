<template>
  <div>
    <NavBar/>
    <v-container class="ma-6">
      <div class="textoBold">
        <p>Para cualquier inquietud que tengas sobre el funcionamiento de la pagina, entra en contacto con alguno de nosotros:</p><v-list>
        <v-list-item>acruz@itba.edu.ar</v-list-item>
        <v-list-item>vriera@itba.edu.ar</v-list-item>
        <v-list-item>manurodriguez@itba.edu.ar</v-list-item>
        <v-list-item>szavalia@itba.edu.ar</v-list-item>
      </v-list>
      </div>
    </v-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "Ayuda",

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