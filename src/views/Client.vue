<template>
    <div class="client">
        <!-- <TheNavigation /> -->
     <v-main>
        <Home />
        <Features />
        <Works />
        <OurTeam />
        <Testimonials />
        <Downloads />
     </v-main>
     <TheFooter />
    </div>
</template>

<script>

import Home from './Home.vue';
import Features from './Features.vue';
import Works from './Works.vue';
import OurTeam from './OurTeam.vue';
import Testimonials from './Testimonials.vue';
import Downloads from './Downloads.vue';
import TheFooter from '@/components/TheFooter.vue';
export default {
    name:'client',
    components:{
        Home,
        Features,
        Works,
        OurTeam,
        Testimonials,
        Downloads,
        TheFooter
        // TheNavigation
    }
}
</script>