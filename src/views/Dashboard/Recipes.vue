<template>
  <div>
    <dashboard-nav>Recipes</dashboard-nav>
    <v-sheet id="scrolling-techniques-3" class="overflow-y-auto" style="height: 100vh">
      <v-container style="margin-top: 250px; position: relative">
        <recipe-list></recipe-list>
        <recipe-list></recipe-list>
        <recipe-list></recipe-list>
        <v-fab-transition>
          <v-btn
            v-show="!hidden"
            color="pink"
            dark
            fixed
            bottom
            right
            fab
            :to="{name: 'CreateRecipe'}"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-fab-transition>
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Open Dialog
            </v-btn>
          </template>
          <v-card tile>
            <v-app-bar
              color="#6A76AB"
              dark
              prominent
              extended
              extension-height="80"
              src="https://picsum.photos/1920/1080?random"
            >
              <template v-slot:img="{ props }">
                <v-img
                  v-bind="props"
                  gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
                ></v-img>
              </template>

              <v-app-bar-nav-icon @click="dialog = false">
                <v-icon>mdi-keyboard-backspace</v-icon>
              </v-app-bar-nav-icon>

              <v-card-text class="mt-15">
                <div class="d-flex align-center">
                    <div >
                        <v-avatar size="65" class="mr-2">
                            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                        </v-avatar>
                    </div>
                    <div>
                        <p class="orange font-weight-bold rounded pa-2 text-h6 mb-1">ချဥ်စပ်ကြက်သားသီးစုံချက်</p>
                        <div>
                            <v-chip-group column multiple>
                              <v-chip filter color="orange" outlined v-for="type in types" :key="type" :value="type">
                                {{ type }}</v-chip
                              >
                            </v-chip-group>
                        </div>
                    </div>
                    
                </div>
              </v-card-text>

              <v-spacer></v-spacer>
              <v-menu
                transition="slide-y-transition"
                bottom
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    dark
                    v-bind="attrs"
                    v-on="on"
                    icon
                    class="mr-2"
                  >
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item link>
                    <v-list-item-title>Edit</v-list-item-title>
                  </v-list-item>
                  <v-list-item link>
                    <v-list-item-title>Delete</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-app-bar>
            <v-container fluid>
              <v-row>
                <v-col>
                  <h3>Ingredients</h3>
                  <v-timeline align-top dense>
                    <v-timeline-item small color="orange">timeline item</v-timeline-item>
                    <v-timeline-item small color="orange">timeline item</v-timeline-item>
                    <v-timeline-item small hide-dot color="orange">
                      <h1 class="grey--text">Cooking Description</h1>
                    </v-timeline-item>
                    <v-timeline-item icon="mdi-receipt" color="orange">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, sapiente voluptatum explicabo mollitia itaque id, saepe, ea est ducimus fugit iste ex numquam velit veritatis? Laboriosam odit temporibus sint a?</v-timeline-item>
                  </v-timeline>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-dialog>
      </v-container>
    </v-sheet>
  </div>
</template>
<script>
import DashboardNav from "./Shared/DashboardNav.vue";
import RecipeList from './Shared/RecipeList.vue';
export default {
  components: { DashboardNav,RecipeList },
  data: ()=>({
    hidden: false,
    dialog: false,
    types: ["Lunch", "Dinner", "Elevenses", "Tea", "Super", "Snacks", "Brunch"],
  })
};
</script>
<style></style>
