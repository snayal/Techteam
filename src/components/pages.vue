<template>
  <h1 class="text-3xl font-bold">{{title}}</h1>
  <div class="flex mt-5">
    <div v-for="list in pages" :key="list.name" @click="golink(list.link)"
      class="image-links flex-1 bg-slate-200 hover:bg-slate-400 cursor-pointer transition-all m-10 p-4 rounded-md">
      <h1>{{list.name}}'s Webpage</h1>
      <img class="pt-5" src="./website-icon.png"/>

    </div>
  </div>

</template>

<script>
export default {
  name: 'WebsitePages',
  props: {
    title: String,
  },
  data() {
    return {
      pages: [
        {
          name: 'Abhishek',
          link: '/abhishek',
        },
        {
          name: 'Elias',
          link: '/',
        },
        { 
          name: 'Le Qi',
          link: '/leqi',
        },
      ]
    }
  },
  methods: {
    golink(link){
      window.location.href = link;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.image-links img{
  width: 50%;
  margin: auto;
}

.profile img{
  width: 30%;
} 

@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
</style>
