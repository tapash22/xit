<template>
<v-footer>
    <v-row class="d-flex justify-center row pa-5">
        <v-col cols="10" sm="10" lg="3" md="3" xl="3">
            <h2 class="text-body-1 white--text text-center text-uppercase">
                Location
            </h2>
            <div class="links">
                <p class="text-center text-body-2 white--text mx-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
            </div>
        </v-col>
        <v-col cols="10" sm="10" lg="3" md="3" xl="3">
            <h2 class="text-body-1 white--text text-center text-uppercase">
                share with love
            </h2>
            <div class="links">
                <a v-for="link in links" :key="link.id" :href="link.link" class="link">
                    <v-icon color="white" size="20">
                        {{ link.icon }}
                    </v-icon>
                </a>
            </div>

        </v-col>
        <v-col cols="10" sm="10" lg="3" md="3" xl="3">
            <h2 class="text-body-1 white--text text-center text-uppercase">
                about us
            </h2>
            <div class="links">
                <p class="text-center text-body-2 white--text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, quam?
                </p>
            </div>
        </v-col>
    </v-row>
</v-footer>
</template>

<script>
export default {
    data() {
        return {
            links: [{
                    id: 1,
                    icon: 'mdi-facebook',
                    link: 'https://unsplash.com/'
                },
                {
                    id: 2,
                    icon: 'mdi-twitter',
                    link: 'https://unsplash.com/'
                },
                {
                    id: 3,
                    icon: 'mdi-linkedin',
                    link: 'https://unsplash.com/'
                },
            ]
        }
    }
}
</script>

<style scoped>
.row {
    background: rgba(11, 36, 59, 0.884);
}
.links{
    display: flex;
    justify-content: center;
    padding: 5px;
}
.links .link{
    border: 1px solid white;
    text-decoration: none;
    margin: 5px;
    width: 30px;
    height: 30px;
    display:flex;
    justify-content: center;
}
</style>
