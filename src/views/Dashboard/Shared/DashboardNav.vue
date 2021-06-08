<template>
  <div>
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://cdn.pixabay.com/photo/2015/06/30/22/51/steak-826961_960_720.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-toolbar-title class="ml-5" style="color: orange"><slot></slot></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn color="orange" class="ma-4" outlined>
        <v-icon>mdi-logout</v-icon> Logout
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab
            v-for="tab in tabs"
            :key="tab.name"
            style="color: orange"
            :to="tab.link"
            >{{ tab.name }}</v-tab
          >
        </v-tabs>
      </template>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data: () => ({
    tabs: [
      { name: "Home", link: "/" },
      { name: "Dashboard", link: "/dashboard" },
      { name: "Recipes", link: "/recipes" },
      { name: "Save Recipes", link: "/save-recipes" },
    ],
  }),
};
</script>
<style></style>
