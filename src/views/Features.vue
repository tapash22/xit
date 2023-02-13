<template>
<div class="features">
    <v-container>
        <v-row class="d-flex justify-center pa-10">
            <v-col cols="6" sm="6" md="4" lg="4" xl="4" v-for="item in items" :key="item.id" class="pa-0">
                <FeaturedCard :item="item" />
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import FeaturedCard from '@/components/FeaturedCard.vue';

export default {
    name: 'features',
    data() {
        return {
            items: [{
                    id: 1,
                    title: 'easy customised',
                    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ea cupiditate placeat iusto porro quo culpa harum ratione voluptatem soluta.',
                    iocn: 'mdi-facebook'
                },
                {
                    id: 2,
                    title: 'responsive ready',
                    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ea cupiditate placeat iusto porro quo culpa harum ratione voluptatem soluta.',
                    iocn: 'mdi-monitor'
                },
                {
                    id: 3,
                    title: 'modern design',
                    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ea cupiditate placeat iusto porro quo culpa harum ratione voluptatem soluta.',
                    iocn: 'mdi-lightbulb-outline'
                },
                {
                    id: 4,
                    title: 'clean code',
                    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ea cupiditate placeat iusto porro quo culpa harum ratione voluptatem soluta.',
                    iocn: 'mdi-react'
                },
                {
                    id: 5,
                    title: 'ready to ship',
                    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ea cupiditate placeat iusto porro quo culpa harum ratione voluptatem soluta.',
                    iocn: 'mdi-react'
                },
                {
                    id: 6,
                    title: 'download for free',
                    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ea cupiditate placeat iusto porro quo culpa harum ratione voluptatem soluta.',
                    iocn: 'mdi-cloud-download-outline'
                },
            ]
        }
    },

    components: {
        FeaturedCard
    }
}
</script>