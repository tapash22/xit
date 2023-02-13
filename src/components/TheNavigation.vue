<template>
<v-container>
    <nav class="d-flex justify-center">
        <v-app-bar elevation="0" color="transparent" class="appbar">
            <v-app-bar-nav-icon @click="drawer = !drawer " class="hidden-sm-and-up"></v-app-bar-nav-icon>
            <v-app-bar-title class="text-h6 font-weight-bold text-uppercase white--text ">logo</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-list color="transparent" class="d-md-flex d-sm-flex d-none">
                <v-list-item v-for="list in lists" :key="list.id">
                    <router-link :to="list.link" class="text-decoration-none black--text">
                        <v-list-item-title class="text-body-2 text-uppercase white--text">
                            {{ list.title }}
                        </v-list-item-title>
                    </router-link>
                </v-list-item>
            </v-list>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" temporary app>
            <v-app-bar-title class="text-h6 font-weight-bold text-uppercase my-5 text-center">logo</v-app-bar-title>
            <v-list color="transparent" class="d-block">
                <v-list-item v-for="list in lists" :key="list.id">
                    <router-link :to="list.link" class="text-decoration-none black--text">
                        <v-list-item-title class="text-body-1 text-uppercase black-text">
                            {{ list.title }}
                        </v-list-item-title>
                    </router-link>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</v-container>
</template>

<script>
export default {
    name: 'the-navigation',
    data() {
        return {
            drawer: false,
            lists: [{
                    id: 1,
                    title: 'home',
                    link: '/home'
                },
                {
                    id: 2,
                    title: 'features',
                    link: '/features'
                },
                {
                    id: 3,
                    title: 'works',
                    link: '/works'
                },
                {
                    id: 4,
                    title: 'ourteam',
                    link: '/ourteam'
                },
                {
                    id: 5,
                    title: 'testimonials',
                    link: '/testimonials'
                },
                {
                    id: 6,
                    title: 'downloads',
                    link: '/downloads'
                },
            ]
        }
    }
}
</script>

<style scoped>
.v-app-bar-title__content {
    width: 60px !important;
}
</style>
