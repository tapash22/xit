<template>
    <div class="team">
        <v-container>
        <v-row class="d-flex justify-center pa-12">
            <v-col cols="6" sm="6" md="3" lg="3" xl="3" v-for="team in teams" :key="team.id" class="pa-2">
            <TeamCard :team="team" />
            </v-col>
        </v-row>
    </v-container>
    </div>
</template>

<script>
import TeamCard from '../components/TeamCard.vue';

export default {
    name:'team',
    data(){
        return{
            teams:[
                {
                    id:1,
                    name:'ruth woods',
                    designation:'founder ceo',
                    speach:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta laboriosam nisi sint neque nostrum deserunt soluta nemo dolores, facilis repellendus cumque laudantium labore quisquam quas cupiditate natus, commodi ducimus. Quae.',
                    image:'https://image.cnbcfm.com/api/v1/image/107026247-1646665039439-Lisa_Skeete_Tatum_Headshot.jpg?v=1669923628 ',
                    links:[
                        {
                            id:1,
                            icon:'mdi-facebook',
                            link:'https://unsplash.com/'
                        },
                        {
                            id:2,
                            icon:'mdi-twitter',
                            link:'https://unsplash.com/'
                        },
                        {
                            id:3,
                            icon:'mdi-linkedin',
                            link:'https://unsplash.com/'
                        },
                    ]
                },
                {
                    id:2,
                    name:'timothy reed',
                    designation:'co-founder developer',
                    speach:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta laboriosam nisi sint neque nostrum deserunt soluta nemo dolores, facilis repellendus cumque laudantium labore quisquam quas cupiditate natus, commodi ducimus. Quae.',
                    image:'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg',
                    links:[
                        {
                            id:1,
                            icon:'mdi-facebook',
                            link:'https://unsplash.com/'
                        },
                        {
                            id:2,
                            icon:'mdi-twitter',
                            link:'https://unsplash.com/'
                        },
                        {
                            id:3,
                            icon:'mdi-linkedin',
                            link:'https://unsplash.com/'
                        },
                    ]
                },
                {
                    id:3,
                    name:'victoria valdez',
                    designation:'ui designer',
                    speach:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta laboriosam nisi sint neque nostrum deserunt soluta nemo dolores, facilis repellendus cumque laudantium labore quisquam quas cupiditate natus, commodi ducimus. Quae.',
                    image:'https://t4.ftcdn.net/jpg/04/13/55/45/360_F_413554591_BQzOaigFwRTgpoXU8WLY6hhQZYzijQek.jpg',
                    links:[
                        {
                            id:1,
                            icon:'mdi-facebook',
                            link:'https://unsplash.com/'
                        },
                        {
                            id:2,
                            icon:'mdi-twitter',
                            link:'https://unsplash.com/'
                        },
                        {
                            id:3,
                            icon:'mdi-linkedin',
                            link:'https://unsplash.com/'
                        },
                    ]
                },
                {
                    id:4,
                    name:'beverly little',
                    designation:'data scientist',
                    speach:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta laboriosam nisi sint neque nostrum deserunt soluta nemo dolores, facilis repellendus cumque laudantium labore quisquam quas cupiditate natus, commodi ducimus. Quae.',
                    image:'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg',
                    links:[
                        {
                            id:1,
                            icon:'mdi-facebook',
                            link:'https://unsplash.com/'
                        },
                        {
                            id:2,
                            icon:'mdi-twitter',
                            link:'https://unsplash.com/'
                        },
                        {
                            id:3,
                            icon:'mdi-linkedin',
                            link:'https://unsplash.com/'
                        },
                    ]
                }
            ]
        }
    },
    components:{
        TeamCard,
    }
}
</script>