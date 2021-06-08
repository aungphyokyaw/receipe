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
                <p class="grey pa-2 text-h6 mb-1">ချဥ်စပ်ကြက်သားသီးစုံချက်</p>
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
    <v-container fluid>
        <v-row>
            <v-col cols="3">
                <v-card>
                    <v-card-title class="white--text orange d-block text-center pa-2">
                        Ingredients
                    </v-card-title>
                    <v-card-text class="py-3">
                        <div class="subtitle-1 d-flex py-3">
                            <v-icon>mdi-food</v-icon>
                            <p class="ma-0 ml-2">Ingredients @20ks</p>
                        </div>
                        <div class="subtitle-1 d-flex py-3">
                            <v-icon>mdi-food</v-icon>
                            <p class="ma-0 ml-2">Ingredients @20ks</p>
                        </div>
                        <div class="subtitle-1 d-flex py-3">
                            <v-icon>mdi-food</v-icon>
                            <p class="ma-0 ml-2">Ingredients @20ks</p>
                        </div>
                        <div class="subtitle-1 d-flex py-3">
                            <v-icon>mdi-food</v-icon>
                            <p class="ma-0 ml-2">Ingredients @20ks</p>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <v-card>
                    <v-card-title class="white--text orange d-block text-center pa-2">
                        Cooking Description
                    </v-card-title>
                    <v-card-text class="py-5">
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam minus veritatis fugiat dolore tempora asperiores quod hic? Odio rem, autem debitis saepe eaque iure delectus fuga blanditiis, exercitationem commodi consequatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum corrupti, aspernatur odit similique numquam ipsa debitis recusandae repellendus eaque dolores quo ut tempore fugiat aperiam, eligendi alias voluptate et possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam quae modi nesciunt atque saepe minus accusamus similique corporis! Maiores molestias magnam cumque error eum fugit officiis quo sint incidunt. 
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12">
                <v-card>
                    <v-card-title class="white--text orange d-block text-center pa-2">
                        Comment
                    </v-card-title>
                    <v-card-text class="pa-0 pt-3">
                        <div class="mb-4">
                            Give rating
                            <v-rating
                                v-model="rating"
                                color="yellow darken-3"
                                background-color="grey darken-1"
                                hover
                                dense
                            ></v-rating>
                        </div>
                        <v-text-field label="Review" outlined ></v-text-field>
                    </v-card-text>
                    <v-card-actions class="pa-0 pb-5 d-block text-center">
                        <v-btn color="primary dark">
                            Add review
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="12">
                <v-card>
                    <v-card-title class="d-block text-center mb-3">Reviews</v-card-title>
                    <v-card-text>
                        <v-row no-gutters align="center">
                            <v-col cols="4" class="text-center">
                                <p class="headline mb-0 black--text">5</p>
                                <v-rating
                                    v-model="rating"
                                    color="yellow darken-3"
                                    background-color="grey darken-1"
                                    hover
                                    dense
                                    class="pb-3"
                                    ></v-rating>
                                <v-icon>
                                    mdi-account
                                </v-icon>1 total
                            </v-col>
                            <v-col>
                                <div class="d-flex mb-5">
                                    <div class="mr-4 black--text">5</div>
                                    <v-progress-linear
                                    height="25" color="green"
                                    >
                                    <strong>{{ Math.ceil(knowledge) }}%</strong>
                                    </v-progress-linear>
                                </div>
                                <div class="d-flex mb-5">
                                    <div class="mr-4 black--text">5</div>
                                    <v-progress-linear
                                    height="25" color="blue"
                                    >
                                    <strong>{{ Math.ceil(knowledge) }}%</strong>
                                    </v-progress-linear>
                                </div>
                                <div class="d-flex mb-5">
                                    <div class="mr-4 black--text">5</div>
                                    <v-progress-linear
                                    height="25" color="pink"
                                    >
                                    <strong>{{ Math.ceil(knowledge) }}%</strong>
                                    </v-progress-linear>
                                </div>
                                <div class="d-flex mb-5">
                                    <div class="mr-4 black--text">5</div>
                                    <v-progress-linear
                                    height="25" color="orange"
                                    >
                                    <strong>{{ Math.ceil(knowledge) }}%</strong>
                                    </v-progress-linear>
                                </div>
                                <div class="d-flex mb-5">
                                    <div class="mr-4 black--text">5</div>
                                    <v-progress-linear
                                    height="25" color="red"
                                    >
                                    <strong>{{ Math.ceil(knowledge) }}%</strong>
                                    </v-progress-linear>
                                </div>
                            </v-col>
                        </v-row> 
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12">
                <v-card>
                    <v-card-text>
                        <v-row no-gutters align="center" class="justify-space-between">
                            <div class="d-flex align-center">
                                <v-avatar color="indigo" class="mr-4">
                                    <v-icon dark>
                                        mdi-account-circle
                                    </v-icon>
                                </v-avatar>
                                <div>
                                    <div class="d-flex align-center">
                                        <v-icon>mdi-account</v-icon><span class="font-weight-bold">Mg Mg</span>
                                    </div>
                                    <v-rating
                                        v-model="rating"
                                        color="yellow darken-3"
                                        background-color="grey darken-1"
                                        hover
                                        dense
                                        small
                                        class="pb-3"
                                        ></v-rating>
                                        <div>Grade</div>
                                </div>
                            </div>
                            <div>13 minutes ago</div>
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
    data: ()=>({
        rating: 3,
        knowledge: 33,
    })
}
</script>

<style>

</style>