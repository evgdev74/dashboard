<template>
  <v-card>
    <v-container
        fluid
        grid-list-lg
      >
      <v-card-title primary-title>
        <div>
          <div class="headline">{{title}}</div>
          <span>{{description}}</span>
        </div>
      </v-card-title>
      <v-form v-model="valid" >
        <v-text-field
          v-model="user.email"
          :rules="emailRules"
          label="E-mail"
          required
        />
        <v-text-field
          v-model="user.password"
          :rules="passwordRules"
          :counter="8"
          label="Пароль"
          required
        />
        <v-text-field
          v-if="action == 'register'"
          v-model="user.confirm_password"
          :rules="confirm_passwordRules"
          :counter="8"
          label="Подтвердите пароль"
          required
        />
        <v-btn
        :disabled="!valid"
        @click="submit"
        >
        Зарегистрироваться
        </v-btn>
        <v-btn @click="clear">Очистить</v-btn>
      </v-form>
      <v-card-actions>
        <v-btn flat dark>Listen now</v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    action: String
  },
  data: () => ({
    valid: false,
    user: {
      email: '',
      password: '',
      confirm_password: ''
    },
    emailRules: [
      v => !!v || 'Введите адрес e-mail',
      v => /.+@.+/.test(v) || 'Введите корректный адрес e-mail'
    ],
    passwordRules: [
      v => !!v || 'Введите пароль',
      v => v.length == 8 || 'Пароль не может быть короче 8 символов'
    ],
    confirm_passwordRules: [
      v => !!v || 'Пароли должны совпадать',
      v => v.length == 8 || 'Пароль не может быть короче 8 символов'
    ]
  }),
  methods: {
    submit () {
      this.$emit('sendForm', { users: this.user })
    },
    clear () {
      this.user ={
        email:            "",
        password:         "",
        confirm_password: ""
      }
    }
  },
  created() {
    if(this.$store.state.session){
      console.log("router");
      this.$router.push("/")
    }
  }
}
</script>