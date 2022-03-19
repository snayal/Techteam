<template>
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path id="svg-1" fill="blue" fill-opacity="1"
    d="M0,160L26.7,138.7C53.3,117,107,75,160,48C213.3,21,267,11,320,10.7C373.3,11,427,21,480,53.3C533.3,
    85,587,139,640,133.3C693.3,128,747,64,800,80C853.3,96,907,192,960,234.7C1013.3,277,1067,267,1120,
    234.7C1173.3,203,1227,149,1280,133.3C1333.3,117,1387,139,1413,149.3L1440,160L1440,320L1413.3,
    320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,
    320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,
    320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
    <div :class="gender" class="w-full m-0 py-2">
        <h1 class="text-3xl font-bold mt-10 text-white">Random User Generator</h1>
        <div class="my-5 py-5 w-1/2 mx-auto rounded-full bg-white">
            <img
                v-bind:src="picture"
                :alt="`${firstName} ${lastName}`"
                class="mx-auto rounded-full border-4 border-black"
            />
            <h1>{{firstName}} {{lastName}}</h1>
            <h3>{{email}}</h3>
            <h3>{{gender}}</h3>
            <button class="bg-black px-6 py-4 mt-2 rounded-full text-white" @click="getUser()">Shuffle Person</button>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path id="svg-2" fill="blue"
     fill-opacity="1" d="M0,96L30,117.3C60,139,120,181,180,181.3C240,181,300,139,360,106.7C420,
     75,480,53,540,69.3C600,85,660,139,720,133.3C780,128,840,64,900,32C960,0,1020,0,1080,42.7C1140,
     85,1200,171,1260,181.3C1320,192,1380,128,1410,96L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,
     0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,
     240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
</template>
<script>

export default {
    name: 'RandomUser',
    data() {
        return {
        firstName: 'Samuel',
        lastName: 'Hey',
        email: 'test@gmail.com',
        gender: 'male',
        picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            // console.log(results)

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
            if(results[0].gender == 'male'){
                document.getElementById('svg-1').style.fill = 'blue';
                document.getElementById('svg-2').style.fill = 'blue';
            }else if(results[0].gender == 'female'){
                document.getElementById('svg-1').style.fill = 'pink';
                document.getElementById('svg-2').style.fill = 'pink';
            }
        },
  },
}

</script>
<style scoped>
    .male {
        background: blue;
    }

    .female {
        background: pink;
    }
</style>
