<template>
  <v-card height="200px">
    <v-bottom-nav
      :active.sync="bottomNav"
      :color="color"
      :value="true"
      absolute
      shift
    >
      <v-btn dark>
        <span>Видео</span>
        <v-icon>ondemand_video</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Музыка</span>
        <v-icon>music_note</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Книги</span>
        <v-icon>book</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Фотографии</span>
        <v-icon>image</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
  export default {
    name: 'tabs',
    data () {
      return {
        bottomNav: 3
      }
    },
    computed: {
      color () {
        switch (this.bottomNav) {
          case 0: 
            console.log("blue-grey");
            return 'blue-grey'
          case 1: 
            console.log("teal");
            return 'teal'
          case 2: 
            console.log("brown");
            return 'brown'
          case 3: 
            console.log("indigo");
            return 'indigo'
        }
      }
    }
  }
</script>