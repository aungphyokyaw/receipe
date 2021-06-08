<template>
  <div>
    <dashboard-nav>Dashboard</dashboard-nav>
    <v-sheet id="scrolling-techniques-3" class="overflow-y-auto" style="height: 100vh">
      <v-container style="margin-top: 250px">
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-card class="white--text text-center" color="primary">
              <v-card-title class="d-block">
                <v-icon dark size="30"> mdi-food </v-icon>
                <span> Total Recipes</span>
              </v-card-title>
              <v-card-subtitle class="white--text text-h5 mt-1"> 3 </v-card-subtitle>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card class="white--text text-center" color="primary">
              <v-card-title class="d-block">
                <v-icon dark size="30"> mdi-comment-account </v-icon>
                <span> Total Reviews</span>
              </v-card-title>
              <v-card-subtitle class="white--text text-h5 mt-1"> 3 </v-card-subtitle>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card class="white--text text-center" color="primary">
              <v-card-title class="d-block">
                <v-icon dark size="30"> mdi-account-star </v-icon>
                <span> Total Recipes</span>
              </v-card-title>
              <v-card-subtitle class="white--text text-h5 mt-1"> 3 </v-card-subtitle>
            </v-card>
          
          </v-col>
          <v-col cols="12">
            <h3 class="mb-4">Recipes</h3>
            <recipe-list></recipe-list>
          </v-col>
          <v-col cols="12">
            <h3 class="mb-4">Most Review Recipes</h3>
            <recipe-list></recipe-list>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
  
</template>
<script>
import DashboardNav from "./Shared/DashboardNav.vue";
import RecipeList from './Shared/RecipeList.vue';
export default {
  components: { DashboardNav, RecipeList, },
  
};
</script>
<style scoped>

</style>
