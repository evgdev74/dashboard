<template>
  <v-app>
    <v-toolbar app dark color='success'>
      <v-toolbar-side-icon @click="setDrawer"/>
      <v-toolbar-title>
          Панель управления
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items class="hidden-sm-and-down" v-if="$store.state.session">
          <v-btn  flat @click="logout" >Выйти</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer 
        app
        v-model="drawer"
        absolute
        temporary
      >
        <v-list class="pa-1">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Симон Боливар</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>
          
          <v-list-tile v-if="!$store.state.session"  v-for="item in sesions"  :key="item.title"  @click="$router.push(item.to)">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile  v-for="item in items"  :key="item.title"  @click="$router.push(item.to)">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
    <Tabs/>
  </v-app>
</template>
<script>
import Tabs from './partials/Tabs'
export default {
  name:"app",
  components: {
    Tabs
  },
  data () {
    return {
      drawer: false    ,
      items: [
        { title: 'Главная', icon: 'dashboard', to: "/" },
        { title: 'О нас', icon: 'question_answer', to: "/about" },
        { title: 'Категории', icon: 'question_answer', to: "/categories" }
      ],
      sesions:[
        { title: 'Войти', icon: 'question_answer', to: "/login" },
        { title: 'Регистрация', icon: 'question_answer', to: "/registered" }
      ]
    }
  },
  methods: {
    setDrawer () {
      this.drawer = !this.drawer;
    },
    logout(){
      this.$localStorage.set('login', false);
      this.$store.commit("setSession", false);
      console.log("Logout " + this.$store.state.session);
      this.$router.push("/login")
    }
  },
  mounted() {
    this.$store.commit("setSession", this.$localStorage.get('login') == "true" ? true : false);
    console.log("created " + this.$store.state.session);
  }
}
</script>
<style>
  #app {
    background-color:rgb(240, 240, 240) !important;
  }
</style>