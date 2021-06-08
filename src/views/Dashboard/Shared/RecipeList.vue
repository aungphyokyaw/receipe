<template>
  <div>
    <v-row>
        <v-col cols="12" sm="6" md="3">
            <v-card>
            <v-img src="https://cdn.pixabay.com/photo/2015/06/19/16/00/strawberries-815057__340.jpg" height="250px">
                <div class="bg_dark white--text">
                    <v-card-title>Title 1</v-card-title>
                    <v-card-text>
                    <v-row no-gutters>
                        <v-rating
                        v-model="rating"
                        color="yellow darken-3"
                        background-color="grey darken-1"
                        empty-icon="$ratingFull"
                        half-increments
                        hover
                        dense
                        small
                        ></v-rating> 
                    <div class="ml-4">4 (3)</div>  
                    </v-row>                  
                    </v-card-text> 
                </div>
                <v-card-actions class="detail_btn pa-0">
                    <v-btn color="orange">Detail</v-btn>
                </v-card-actions>
            </v-img>
            </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
            <v-card>
            <v-img src="https://cdn.pixabay.com/photo/2015/06/19/16/00/strawberries-815057__340.jpg" height="250px">
                <div class="bg_dark white--text">
                    <v-card-title>Title 1</v-card-title>
                    <v-card-text>
                    <v-row no-gutters>
                        <v-rating
                        v-model="rating"
                        color="yellow darken-3"
                        background-color="grey darken-1"
                        empty-icon="$ratingFull"
                        half-increments
                        hover
                        dense
                        small
                        ></v-rating> 
                    <div class="ml-4">4 (3)</div>  
                    </v-row>                  
                    </v-card-text> 
                </div>
                <v-card-actions class="detail_btn pa-0">
                    <v-btn color="orange">Detail</v-btn>
                </v-card-actions>
            </v-img>
            </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
            <v-card>
            <v-img src="https://cdn.pixabay.com/photo/2015/06/19/16/00/strawberries-815057__340.jpg" height="250px">
                <div class="bg_dark white--text">
                    <v-card-title>Title 1</v-card-title>
                    <v-card-text>
                    <v-row no-gutters>
                        <v-rating
                        v-model="rating"
                        color="yellow darken-3"
                        background-color="grey darken-1"
                        empty-icon="$ratingFull"
                        half-increments
                        hover
                        dense
                        small
                        ></v-rating> 
                    <div class="ml-4">4 (3)</div>  
                    </v-row>                  
                    </v-card-text> 
                </div>
                <v-card-actions class="detail_btn pa-0">
                    <v-btn color="orange">Detail</v-btn>
                </v-card-actions>
            </v-img>
            </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
            <v-card>
            <v-img src="https://cdn.pixabay.com/photo/2015/06/19/16/00/strawberries-815057__340.jpg" height="250px">
                <div class="bg_dark white--text">
                    <v-card-title>Title 1</v-card-title>
                    <v-card-text>
                    <v-row no-gutters>
                        <v-rating
                        v-model="rating"
                        color="yellow darken-3"
                        background-color="grey darken-1"
                        empty-icon="$ratingFull"
                        half-increments
                        hover
                        dense
                        small
                        ></v-rating> 
                    <div class="ml-4">4 (3)</div>  
                    </v-row>                  
                    </v-card-text> 
                </div>
                <v-card-actions class="detail_btn pa-0">
                    <v-btn color="orange">Detail</v-btn>
                </v-card-actions>
            </v-img>
            </v-card>
        </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
    data: () =>({
      rating: 4.5,
    })
}
</script>

<style scoped>
.bg_dark{
  background: rgba(0, 0, 0, .6);
}
.detail_btn {
    position: absolute;
    bottom: 0;
    right: 0;
}
</style>