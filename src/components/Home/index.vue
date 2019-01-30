<template>
  <v-layout>
    <v-flex xs12 sm6 md4>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Ваш шедевр готов!</h3>
            <div>Разнообразный и богатый опыт, <br> постоянный количественный рост, ...</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Поделиться</v-btn>
          <v-btn flat color="orange">Далее</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    data () {
      return {
        card_text: 'Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности требуют определения и уточнения модели развития. Товарищи! укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач.'
      }
    },
    mounted() {
      if(!this.$store.state.session){
        this.$router.push("/login");
      }
    }
  }
</script>