<template>
        <v-card class="pa-0">
                    <v-img :src="team.image" height="200"  />
                    <v-card-title class="text-uppercase text-body-1">
                        {{ team.name }}
                    </v-card-title>
                    <v-card-subtitle class="text-uppercase red--text text-body-2" >{{ team.designation }}</v-card-subtitle>
                    <v-card-text class="pa-0 mx-2">
                        <p class="text-body-2 text-left pa-2">
                            {{ team.speach }}
                        </p>
                    </v-card-text>
                    <v-card-actions class="d-flex justify-start ">
                        <v-btn v-for="link in team.links" :key="link.id" small>
                            <a  :href="link.link" class="text-decoration-none pa-0 black--text">
                            <v-icon color="gray" size="20">
                                {{ link.icon }}
                            </v-icon>
                        </a>
                        </v-btn>
                       
                    </v-card-actions>
                </v-card>
</template>

<script>
export default {
    name:'team-card',
    props:['team']
}
</script>