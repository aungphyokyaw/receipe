<template>
  <div>
    <v-toolbar color="primary" dark extended flat src="@/assets/home_background.jpg">
      <v-spacer></v-spacer>
      <v-btn text rounded :to="{name: 'LoginRegister'}"> Login </v-btn>
      <v-btn text rounded :to="{name: 'Dashboard'}"> Dashboard </v-btn>
      <v-btn text rounded> Log out </v-btn>
    </v-toolbar>

    <v-card class="mx-auto" max-width="700" style="margin-top: -30px">
      <v-toolbar flat>
        <transition name="fade" mode="out-in">
          <v-toolbar-title class="grey--text" v-if="!searchRecipes" key="title">
            Food Cooking System
          </v-toolbar-title>
          <v-text-field
            v-else
            label="Search recipes.."
            style="width: 100%"
            outlined
            dense
            class="pt-7 mx-2"
            key="searchBox"
          >
          </v-text-field>
        </transition>
        <v-spacer></v-spacer>

        <v-btn icon @click="searchRecipes = !searchRecipes">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon @click="showSortRecipe">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>

      <v-divider></v-divider>

      <v-card-text
        style="height: 0px; overflow: hidden; transition: 0.2s"
        ref="sortRecipe"
        class="pa-0"
      >
        <v-list flat subheader class="mt-1">
          <v-list-item-group>
            <v-list-item>
              <template v-slot:default="{ active }">
                <v-list-item-action>
                  <v-checkbox :input-value="active"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title> Notifications </v-list-item-title>
                </v-list-item-content>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card-text>
    </v-card>

    <v-container>
      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          <v-chip-group v-model="sortByType" column multiple>
            <v-chip filter outlined v-for="type in types" :key="type" :value="type">
              {{ type }}</v-chip
            >
          </v-chip-group>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-card>
            <v-img
              src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg"
            ></v-img>
            <v-card-title> Food </v-card-title>
            <v-card-subtitle> By Aung Aung </v-card-subtitle>
            <v-card-text>
              <v-row no-gutters>
                <v-rating
                  v-model="rating"
                  color="yellow darken-3"
                  background-color="grey darken-1"
                  hover
                  dense
                ></v-rating>
                <div class="ml-4 pt-1">3 (2)</div>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card>
            <v-img
              src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg"
            ></v-img>
            <v-card-title> Food </v-card-title>
            <v-card-subtitle> By Aung Aung </v-card-subtitle>
            <v-card-text>
              <v-row no-gutters>
                <v-rating
                  v-model="rating"
                  color="yellow darken-3"
                  background-color="grey darken-1"
                  hover
                  dense
                ></v-rating>
                <div class="ml-4 pt-1">3 (2)</div>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card>
            <v-img
              src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg"
            ></v-img>
            <v-card-title> Food </v-card-title>
            <v-card-subtitle> By Aung Aung </v-card-subtitle>
            <v-card-text>
              <v-row no-gutters>
                <v-rating
                  v-model="rating"
                  color="yellow darken-3"
                  background-color="grey darken-1"
                  hover
                  dense
                ></v-rating>
                <div class="ml-4 pt-1">3 (2)</div>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    sortByType: [],
    searchRecipes: false,
    types: ["Lunch", "Dinner", "Elevenses", "Tea", "Super", "Snacks", "Brunch"],
    rating: 3,
  }),
  methods: {
    showSortRecipe() {
      this.$refs.sortRecipe.style.height === "0px"
        ? (this.$refs.sortRecipe.style.height = "60px")
        : (this.$refs.sortRecipe.style.height = "0px");
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: 0.2s, linear;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
