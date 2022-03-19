<template>
    <h1 class="text-3xl font-bold mt-10">Coloured Boxes</h1>
    <div class="flex items-center p-10 w-full flex-wrap justify-center">
        <div class="px-5 py-10 m-5 text-center basis-1/4" :style="{background: types.colours}" v-for="types in box" :key="types.colours">
            <p :style="{color: types.text}">This box colour is {{types.colours}} and the text is {{types.text}}</p>
        </div>
    </div>
</template>
<script>
export default {
   name: 'colourBoxes',
   props: {
       colour: String,     
   },
   data() {
       return {
           box: [
                {
                    colours: "blue",
                    text: 'white',
                },
                {
                    colours: "orange",
                    text: 'white'
                },
                {
                    colours: "red",
                    text: 'black',
                },
                {
                    colours: "black",
                    text: 'white',
                },
                 {
                    colours: "green",
                    text: 'white',
                },
                 {
                    colours: "yellow",
                    text: 'black',
                },
                {
                    colours: "gray",
                    text: 'black',
                },
                {
                    colours: "black",
                    text: 'white',
                },
                {
                    colours: "pink",
                    text: 'black',
                },
           ]
       }
   },
   methods: {
       changeColour(){
           const random = Math.floor(Math.random()*16777215).toString(16);
           document.getElementById('colour-box').style.background = '#' + random;
           
       }
   }
}
</script>
