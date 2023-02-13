<template>
<swiper :slidesPerView="1" :spaceBetween="30" :freeMode="true" :pagination="{
            clickable: true,
          }" :modules="modules" class="mySwiper">
    <swiper-slide v-for="text in texts" :key="text">
        <div class="text">
            <p class="black--text">
                {{ text }}
            </p>
        </div>
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
    props:['texts'],

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
