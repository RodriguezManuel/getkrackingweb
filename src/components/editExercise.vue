<template>
  <v-card style="border-radius: 25px;" color="#EDEAEA">

    <v-card-title>
      <p class="textoTitulo mx-auto">{{ title }}</p>
    </v-card-title>

    <v-card-text>
      <v-form class="mx-15">
        <v-row>
          <v-text-field v-model="name" class="texto mt-7" label="Nombre de ejercicio" height="60"
                        :rules="[rules.required(name), rules.counterMAX(name)]"
                        rounded background-color="white" hide-details="false"/>
          <v-icon small color="red">mdi-asterisk</v-icon>
        </v-row>
        <v-row>
          <v-textarea label="Descripcion" v-model="descripcion" class="texto"
                      auto-grow rounded background-color="white" height="150"
                      :rules="[rules.required(descripcion), rules.counterMAXDESC(descripcion)]"
                      prepend-icon="mdi-text-short" required text hide-details="false"/>
          <v-icon small color="red" style="top: -60px">mdi-asterisk</v-icon>
        </v-row>
        <v-row>
          <div style="width: 300px;" class="mt-4">
            <v-select :items="categories" label="Categoria" height="60" background-color="white"
                      style="font-family: NotoSans-Regular, sans-serif;color: #8B8686;"
                      rounded v-model="categorieSelected" :disabled="type !== 0"/>
          </div>
          <v-icon small color="red" style="top: -10px" v-if="!(type !== 0)">mdi-asterisk</v-icon>
        </v-row>


        <v-btn depressed color="white" min-width="240px" min-height="45px" class="rounded-pill mt-4 CustomButton"
               @click="addOn(images)">
          Agregar imagen
        </v-btn>

        <v-row>
          <v-col v-for="(image, index) in images" :key="index">
            <div style="width: 650px">
              <v-row>
                <v-text-field v-model="image.src" outlined class="texto" label="URL de imagen"
                              rounded background-color="#F7F2F2"
                              :rules="[rules.validateURL(image.src)]"/>
                <v-icon size="34" color="#8B8686" style="position: relative; bottom: 15px;"
                        @click="deleteFrom(index, images)">
                  mdi-delete
                </v-icon>
              </v-row>
            </div>
          </v-col>
        </v-row>

        <v-btn depressed color="white" min-width="240px" min-height="45px" class="rounded-pill mt-4 CustomButton"
               @click="addOn(videos)">
          Agregar video
        </v-btn>

        <v-row>
          <v-col v-for="(video, index) in videos" :key="index">
            <div style="width: 650px">
              <v-row>
                <v-text-field v-model="video.src" outlined class="texto" label="URL de video"
                              rounded background-color="#F7F2F2"
                              :rules="[rules.validateURL(video.src)]"/>
                <v-icon size="34" color="#8B8686" style="position: relative; bottom: 15px;"
                        @click="deleteFrom(index, videos)">
                  mdi-delete
                </v-icon>
              </v-row>
            </div>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-btn v-on:click="editCard()" depressed color="primary" min-width="290px" min-height="75px"
                 class="rounded-pill ma-4 CustomButton2 white--text">
            <v-icon>mdi-content-save-outline</v-icon>
            Guardar cambios
          </v-btn>
        </v-row>
        <v-row justify="center" v-if="loading === true">
          <v-progress-circular indeterminate color="primary" size="75"/>
        </v-row>

      </v-form>
    </v-card-text>
    <v-btn icon color="grey darken-2" @click="$router.go(-1)"
           style="position: absolute; top: 4%; left: 3%; z-index: 1;">
      <v-icon size="80">mdi-chevron-left</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
import {ExercisesApi} from "@/api/exercises";
import {MediaApi} from "@/api/media";

export default {
  name: "editExercise",
  props: ['title', 'id', 'type'],
  data: () => ({
    loading: true,
    name: '',
    descripcion: '',
    incompleteFlag: false,
    categories: ['Biceps', 'Triceps', 'Pecho', 'Espalda', 'Abdominales', 'Piernas'],
    categorieSelected: null,
    images: [],
    videos: [],
    rules: {
      required: value => !!value || 'Requerido.',
      counterMAX: value => value.length < 20 || 'Inserte menos de 20 caracteres.',
      counterMAXDESC: value => value.length < 100 || 'Inserte menos de 100 caracteres',
      validateURL: value => {
        const regex = RegExp('(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+@]*)*(\\?[;&a-z\\d%_.~+=-@]*)?(\\#[-a-z\\d_@]*)?$', 'i');
        return regex.test(value);
      },
    },
  }),
  methods: {
    addOn(section) {
      section.push({src: ''})
    },
    deleteFrom(index, section) {
        section.splice(index, 1);
    },
    async addMedia( exercise_id , cycle_id ){
      let i;
      for (  i = 0 ; i < this.images.length; i++){
        await MediaApi.addImageToExercise(this.images[i].src , i +1  , cycle_id , exercise_id , null );
      }
      for ( i = 0 ; i < this.videos.length ; i++){
        await MediaApi.addVideoToExercise(this.videos[i].src , i + 1 ,cycle_id , exercise_id , null);
      }
    },
    async editMedia( exercise_id ,cycle_id){
      await MediaApi.cleanMedia(cycle_id, exercise_id , null);
      await this.addMedia(exercise_id, cycle_id);
    },
    async editCard() {
      if (this.rules.required(this.name) !== true || this.rules.counterMAX(this.name) !== true
          || this.rules.required(this.descripcion) !== true || this.rules.counterMAXDESC(this.descripcion) !== true) {
        // SI FALLA ALGUNOS DE LOS REQUISITOS(SUCEDE CUANDO NO RETORNAN TRUE(ALGUNOS AL FALLAR RETORNAN UN STRING)), IMPIDO EL POST
        this.incompleteFlag = true;
        return
      }
      this.loading = true;
      let result = {
        code: 0,
      };
      if (this.title === "CREAR NUEVO EJERCICIO") {
        if (this.categorieSelected == null) {
          this.loading = false;
          return;
        }
        const data = {
              name: this.name,
              detail: this.descripcion,
              type: this.categorieSelected,
            },
            result = await ExercisesApi.postMasterExercise(data, null);
            console.log(result);
            let id = result.id
            const type = await MediaApi.getCycleId(data.type)
            await this.addMedia(id , type);
      } else {
        const data = {
          name: this.name,
          detail: this.descripcion,
          id: this.id,
          type: this.type
        }
        result = await ExercisesApi.editMasterExercise(data, null);
        await this.editMedia( this.id , data.type);
      }
      if (result.code) {
        console.log("ERROR");
      } else {
        location.assign('/ejercicios')
      }
      this.loading = false;
    },
  },
  async created() {
    if (this.type !== 0) {
      this.categorieSelected = this.categories[this.type - 1];
      const data = await ExercisesApi.getSingleExercise(1, this.type, this.id, null);
      console.log(data);
      this.name = data.name;
      this.descripcion = data.detail;
    }
    this.loading = false;
  }
}
</script>

<style scoped>
@font-face {
  font-family: "NotoSans-Regular";
  src: url("../assets/fonts/NotoSans-Regular.ttf");
}

.textoTitulo {
  font-family: NotoSans-Regular, sans-serif;
  font-size: 35px;
  color: #8B8686;
  letter-spacing: 4px;
}

.texto {
  font-family: NotoSans-Regular, sans-serif;
  font-size: 26px;
  color: #8B8686;
}

.CustomButton {
  font-family: NotoSans-Regular, sans-serif !important;
  font-size: 24px !important;
  text-transform: none !important;
}

.CustomButton2 {
  font-family: NotoSans-Regular, sans-serif !important;
  font-size: 28px !important;
  text-transform: none !important;
}
</style>