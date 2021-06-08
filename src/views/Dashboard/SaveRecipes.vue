<template>
  <div>
    <dashboard-nav>Save Recipes</dashboard-nav>
    <v-sheet id="scrolling-techniques-3" class="overflow-y-auto" style="height: 100vh">
      <v-container style="margin-top: 250px">
        <recipe-list></recipe-list>
        <recipe-list></recipe-list>
        <recipe-list></recipe-list>
      </v-container>
    </v-sheet>
  </div>
</template>
<script>
import DashboardNav from "./Shared/DashboardNav.vue";
import RecipeList from './Shared/RecipeList.vue';
export default {
  components: { DashboardNav, RecipeList },
};
</script>
<style></style>
