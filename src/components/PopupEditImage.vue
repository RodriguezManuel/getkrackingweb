<template>
  <v-dialog v-model="dialog" persistent max-width="950px">
    <template v-slot:activator="{ on, attrs }">
      <v-icon size="62" color="#8B8686" slot="activator" v-bind="attrs" v-on="on">
        mdi-pencil-circle
      </v-icon>
    </template>
    <v-card style="border-radius: 20px;">
      <v-card-title>
        <p class="texto mt-3 mx-auto" style="text-align: center">URL de imagen</p>
      </v-card-title>
      <v-card-text>
        <v-row justify="center">
          <div style="width: 600px;">
            <v-text-field v-model="images[0]" outlined class="texto"
                          rounded background-color="#F7F2F2"
                          :rules="[rules.validateURL(images[0])]"/>
          </div>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-row justify="center" class="mb-5">
          <v-btn
              color="primary"
              @click="dialog = false"
              class="CustomButton rounded-pill ml-3"
          >
            Guardar
          </v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "PopupEditImage",
  props: ['images'],
  data: () => ({
    dialog: false,
    rules: {
      validateURL: value => {
        const regex = RegExp('(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+@]*)*(\\?[;&a-z\\d%_.~+=-@]*)?(\\#[-a-z\\d_@]*)?$', 'i');
        return regex.test(value);
      }
    }
  }),
}
</script>

<style scoped>
@font-face {
  font-family: "Gotham-Medium";
  src: url("../assets/fonts/Gotham-Medium.ttf");
}

@font-face {
  font-family: "NotoSans-SemiBold";
  src: url("../assets/fonts/NotoSans-SemiBold.ttf");
}

.texto {
  font-family: NotoSans-SemiBold, sans-serif;
  font-size: 26px;
  color: #8B8686;
}

.CustomButton {
  font-family: Gotham-Medium, sans-serif !important;
  font-size: 20px !important;
  text-transform: none !important;
}

</style>