<template>
  <div>
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

      <v-app-bar-nav-icon>
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
                <p class="orange pa-2 text-h6 mb-1">ချဥ်စပ်ကြက်သားသီးစုံချက်</p>
                <div>
                    <v-rating
                    v-model="rating"
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    hover
                    dense
                    class="pa-1"
                    ></v-rating>
                </div>
            </div>
            
        </div>
      </v-card-text>

      <v-spacer></v-spacer>

      <v-btn icon fab color="orange">
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
    data: ()=>({
        rating: 3
    })
}
</script>

<style>

</style>