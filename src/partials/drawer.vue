<template>
  <v-navigation-drawer 
        app
        v-model="store.state.drawer"
        absolute
        temporary
      >
        <v-list class="pa-1">
          <v-list-tile avatar>
$store.state.drawe  <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Симон Боливар</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>

          <v-list-tile
            v-for="item in items"
            :key="item.title"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
</template>
<script>
export default {
  props:{
    show: true
  },
  name: "drawer",
  data () {
    return {
      items: [
        { title: 'Главная', icon: 'dashboard' },
        { title: 'О нас', icon: 'question_answer' }
      ]
    }
  }
}
</script>
