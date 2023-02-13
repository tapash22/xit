<template>
<swiper :slidesPerView="1" :spaceBetween="30" :freeMode="true" :pagination="{
        clickable: true,
      }" :modules="modules" >
    <swiper-slide v-for="image in images" :key="image.id">
        <!-- <v-img :src="image.image"> -->
            <p class="mt-5 mx-5">{{ image.name }}</p>
        <!-- </v-img> -->
    </swiper-slide>

</swiper>
</template>

<script>
// Import Swiper Vue.js components
import {
    Swiper,
    SwiperSlide
} from 'swiper/vue';
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {
    FreeMode,
    Pagination
} from 'swiper';

export default {

    data() {
        return {
            images: [{
                    id: 1,
                    name: 'room1',
                    image: 'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg'
                },
                {
                    id: 2,
                    name: 'room2',
                    image: 'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg'
                },
                {
                    id: 3,
                    name: 'room3',
                    image: 'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg'
                },
            ]
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [FreeMode, Pagination],
        };
    },
};
</script>

<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
