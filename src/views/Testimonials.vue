<template>
<div class="testimonial">
    <v-row class="d-flex justify-center">
        <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="pa-0">
            <v-img src="https://www.verywellfamily.com/thmb/UNm6vP3aX1jq983HiugmA6wIo1I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/unhappy-african-american-girl-sit-on-sofa-at-home-1257791103-6ef95d3addfb4a589693618dbdf2b7af.jpg" width="100%" height="400" />
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="d-flex justify-center align-center pa-10 text">

            <v-carousel height="200" hide-delimiter-background :show-arrows="false" delimiter-icon="mdi-minus">
                <v-carousel-item v-for="list in lists" :key="list.id" class="d-flex justify-center align-center " >
                    <p class="text-center pa-10 my-5 text-body-1 white--text ">
                        {{ list.text }}
                    </p>
                </v-carousel-item>
            </v-carousel>
        </v-col>
    </v-row>
    <v-row>
        <SwiperSlider />
    </v-row>
</div>
</template>

<script>
// import SwiperSlider from '@/components/SwiperSlider.vue';

export default {
    data() {
        return {
            lists: [
                {
                    id:1,
                    text:'"1Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dicta officiis quibusdam eveniet sint ipsam tempore magnam animi eos aut."',
                },
                {
                    id:2,
                    text:'"ipsum dolor sit amet consectetur adipisicing elit. Esse dicta officiis quibusdam eveniet sint ipsam tempore magnam animi eos aut."',
                },
                {
                    id:3,
                    text:'"dolor sit amet consectetur adipisicing elit. Esse dicta officiis quibusdam eveniet sint ipsam tempore magnam animi eos aut."',
                },
                {
                    id:4,
                    text:'"sit amet consectetur adipisicing elit. Esse dicta officiis quibusdam eveniet sint ipsam tempore magnam animi eos aut."',
                },
                
            ]
        }
    },

    components: {
        // SwiperSlider
    }
}
</script>

<style scoped>
.text{
    background: #582D4A;
}
</style>
