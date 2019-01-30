<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>Категории</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <v-btn slot="activator" color="primary" dark class="mb-2">Добавить категорию</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.id" label="Dessert name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.name" label="Calories"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-date-picker v-model="editedItem.created_at" label="Дата создания"></v-date-picker>

                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-menu
                          ref="menu"
                          :close-on-content-click="false"
                          v-model="menu"
                          :nudge-right="40"
                          :return-value.sync="date"
                          lazy
                          transition="scale-transition"
                          offset-y
                          full-width
                          min-width="290px"
                  >
                    <v-text-field
                            slot="activator"
                            v-model="date"
                            label="Picker in menu"
                            prepend-icon="event"
                            readonly
                    ></v-text-field>
                    <v-date-picker v-model="date" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                      <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                  <!--<v-date-picker v-model="editedItem.updated_att" label="Дата редактирования" header-color="success"></v-date-picker>-->
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td class="text-xs-center">{{ props.item.name }}</td>
        <td class="text-xs-center">{{ props.item.created_at }}</td>
        <td class="text-xs-center">{{ props.item.updated_at }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
      headers: [
        { text: 'ID', value: 'id', align: 'center' },
        {
          text: 'Наименование',
          value: 'name', align: 'center' 
        },
        { text: 'Создано', value: 'created_at' , align: 'center' },
        { text: 'Редактировано', value: 'updated_at' , align: 'center' },
        { text: 'Действия', value: 'name', sortable: false , align: 'center' }
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        id: 0,
        name: 'name',
        created_at: new Date(),
        updated_at: "text"
      },
      defaultItem: {
        id: 0,
        name: 'name,',
        created_at: "date",
        updated_at: "text"
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Добавить' : 'Редактировать'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            id: 1,
            name: 'Категория',
            created_at: "12.09.2018",
            updated_at: "12.09.2018",
          },
          {
            id: 2,
            name: 'Категория',
            created_at: "12.09.2018",
            updated_at: "12.09.2018",
          },
          {
            id: 3,
            name: 'Категория',
            created_at: "12.09.2018",
            updated_at: "12.09.2018",
          },
          {
            id: 4,
            name: 'Категория',
            created_at: "12.09.2018",
            updated_at: "12.09.2018",
          },
          {
            id: 5,
            name: 'Категория',
            created_at: "12.09.2018",
            updated_at: "12.09.2018",
          }
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Удалить?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      }
    }
  }
</script>