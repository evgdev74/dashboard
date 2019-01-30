<template>
  <auth @sendForm="registered" :title="'Регистрация'" :description="'Зарегистрировать новый аккаунт'"   :action="'register'"/>
</template>

<script>
import auth from "./Form"
export default {
  name:"Registered",
  components:{
    auth
  },
  data: () => ({
    
  }),
  methods: {
    registered (user) {
      this.$router.push("/login")
    }
  }
  }
</script>