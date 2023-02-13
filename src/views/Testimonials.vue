<template>
<div class="testimonial">
    <v-row class="d-flex justify-center">
        <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="pa-0">
            <v-img src="https://www.verywellfamily.com/thmb/UNm6vP3aX1jq983HiugmA6wIo1I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/unhappy-african-american-girl-sit-on-sofa-at-home-1257791103-6ef95d3addfb4a589693618dbdf2b7af.jpg" width="100%" height="400" />
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="info pa-0">
            <SwiperSlider :texts="texts"/>
        </v-col>
    </v-row>
</div>
</template>

<script>
import SwiperSlider from '@/components/SwiperSlider.vue';

export default {
    data(){
        return{
            texts:[
                '1Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dicta officiis quibusdam eveniet sint ipsam tempore magnam animi eos aut.',
                '2Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dicta officiis quibusdam eveniet sint ipsam tempore magnam animi eos aut.',
                '3Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dicta officiis quibusdam eveniet sint ipsam tempore magnam animi eos aut.',
                '4Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dicta officiis quibusdam eveniet sint ipsam tempore magnam animi eos aut.'
            ]
        }
    },

    components:{
        SwiperSlider
    }
}
</script>
