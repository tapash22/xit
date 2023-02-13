<template>
<div class="home">

        <TheNavigation />
        <v-row class="d-flex justify-center my-5">
            <v-col cols="10" sm="10" md="6" lg="6" xl="6">
                <v-sheet class="mt-10" elevation="0" color="transparent">
                    <h2 class="text-h3 font-weight-bold text-uppercase white--text">
                        {{ text }}
                    </h2>
                    <p class="text-body-1 white--text text-center my-2">
                        {{ subtext }}
                    </p>
                    <div class="btn">
                      <v-btn color="red" class="text-uppercase white--text text-uppercase my-5">
                        Find out more
                    </v-btn>
                    </div>
                   
                </v-sheet>
            </v-col>
        </v-row>

</div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue';
export default {
    name: 'Home',

    data() {
        return {
            text: 'your favorite one page multi purpose template',
            subtext: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint atque tempora repudiandae inventore minus quidem.'
        }
    },
    components: {
        TheNavigation
    }
}
</script>

<style scoped>
.home {
    min-width: 100%;
    background: linear-gradient(0deg, rgba(39, 62, 84, 0.678), rgba(39, 62, 84, 0.911)), url('https://i.ibb.co/c3BmwZx/andyone-WW8j-Bak7bo-unsplash.jpg');
    background-size: cover;
   
}
.btn{
  display: flex;
  justify-content: center;
}
</style>
