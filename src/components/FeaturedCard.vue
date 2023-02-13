<template>
    <v-card elevation="0" class="pa-5 d-block">
        <v-card-text class="d-flex justify-center pa-0">
            <v-icon size="50" color="red">
                {{ item.iocn }}
            </v-icon>
        </v-card-text>

        <v-card-title class="d-flex justify-center  text-body-1 text-uppercase ">{{ item.title }}</v-card-title>
        <v-card-text class="pa-2">
            <p class="text-body-2 text-center">
                {{ item.text }}
            </p>
        </v-card-text>
    </v-card>

</template>

<script>
export default {
    name: 'featured-card',
    props: ['item']
}
</script>
