<template>
  <div>
    <dashboard-nav>Create Recipes</dashboard-nav>
    <v-sheet id="scrolling-techniques-3" class="overflow-y-auto" style="height: 100vh">
      <v-container style="margin-top: 250px">
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-text class="pb-0">
                <div class="d-flex">
                  <v-spacer></v-spacer>
                  <v-switch
                    v-model="switch1"
                    label="Share to public"
                  ></v-switch>
                </div>
                <v-text-field
                  label="Recipe Name"
                  outlined
                  dense
                ></v-text-field>
                <div class="mb-3 font-weight-bold subtitle-1">Ingredient</div>
                <v-row>
                  <v-col>
                    <v-text-field
                      label="Ingredient Name"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      label="Quantity"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="auto" class="mr-2">
                    <v-btn small fab color="orange" dark>
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
                <div class=" font-weight-bold subtitle-1">Meal Types</div>
                <v-chip-group v-model="sortByType" column multiple>
                  <v-chip filter outlined v-for="type in types" :key="type" :value="type">
                    {{ type }}</v-chip
                  >
                </v-chip-group>
                <v-file-input
                  :rules="rules"
                  accept="image/png, image/jpeg, image/bmp"
                  prepend-inner-icon="mdi-camera"
                  prepend-icon=""
                  label="Picture"
                  outlined
                  dense
                  class="mt-5"
                ></v-file-input>
                <v-textarea
                  outlined
                  name="input-7-4"
                  label="Cooking Description"
                  value=""
                ></v-textarea>
              </v-card-text>
              <v-card-actions class="d-block text-right pb-5" >
                <v-btn color="orange" dark>Back</v-btn>
                <v-btn color="orange" dark>Add Recipe</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>
<script>
import DashboardNav from "./Shared/DashboardNav.vue";
export default {
  components: { DashboardNav },
  data: () => ({
    switch1: true,
    sortByType: [],
    types: ["Lunch", "Dinner", "Elevenses", "Tea", "Super", "Snacks", "Brunch"],
  }),
}
</script>

<style scoped>
</style>
