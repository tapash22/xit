<template>
    <div class="works">
        <div class="images">
            <img class="img" v-for="image in images" :key="image"  :src="image"/>
        </div>
    </div>
</template>

<script>
export default {
    name:'works',
    data(){
        return{
            images:[
                'https://miro.medium.com/max/1018/1*iAu65xDmvpVdBJgps6EDEw.png',
                'https://miro.medium.com/max/1018/1*iAu65xDmvpVdBJgps6EDEw.png',
                'https://miro.medium.com/max/1018/1*iAu65xDmvpVdBJgps6EDEw.png',
                'https://miro.medium.com/max/1018/1*iAu65xDmvpVdBJgps6EDEw.png',
                'https://miro.medium.com/max/1018/1*iAu65xDmvpVdBJgps6EDEw.png',
                'https://miro.medium.com/max/1018/1*iAu65xDmvpVdBJgps6EDEw.png',
                'https://miro.medium.com/max/1018/1*iAu65xDmvpVdBJgps6EDEw.png',
                'https://miro.medium.com/max/1018/1*iAu65xDmvpVdBJgps6EDEw.png'
            ]
        }
    }

}
</script>
<style scoped>
.images{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(200,2);
    grid-gap: 2px;
}
.images img{
    width: 100%;
    height: 200px;
    background-position: center;
    background-size:cover;
}


@media only screen and (max-width: 1200px){
    .images{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    grid-template-rows: repeat(200,2);
    grid-gap: 2px;
}
.images img{
    width: 100%;
    height: 200px;
    background-position: center;
    background-size:cover;
}
}
@media only screen and (max-width: 600px){
	.images{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(200,2);
    grid-gap: 2px;
}
.images img{
    width: 100%;
    height: 200px;
    background-position: center;
    background-size:cover;
}
}

</style>