<template>
  <auth @sendForm="sign_in" :title="'Войти'" :description="'Войдите используя свои учетные данные'" :action="'login'"/>
</template>

<script>
import auth from "./Form"
export default {
  name:"Login",
  components:{
    auth
  },
  data: function() {
return {
    return () {
    }
  };
},
  methods: {
    sign_in (user) {
      this.$localStorage.set('login', true);
      this.$store.commit("setSession", true);
      this.$router.push("/")
    }
  }
  }
</script>