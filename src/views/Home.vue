<template>
  <WebsitePages title="Website Pages"/>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(126, 34, 206)" fill-opacity="1" d="M0,64L1440,288L1440,320L0,320Z"></path></svg>
    <div class="bg-purple-700 text-left text-white p-10">
      <h1 class="font-bold text-3xl">Fun facts</h1>
      <div class="w-full mt-4 flex">
          <div class="bg-blue-900 rounded-lg w-3/6 p-10">
            <h1 class="text-lg pb-2">Oreo Fun Facts</h1>
            <p>1. It was created March 6, 1912. </p>
            <p>2. More than 123,000 tons of creme are made each year</p>
            <br/>
            <p>Elephants are the largest land mammals on earth and have distinctly massive bodies,
              large ears, and long trunks. They use their trunks to pick up objects, trumpet warnings, 
              greet other elephants, or suck up water for drinking or bathing, among other uses.
              Both male and female African elephants grow tusks and each individual can either be 
              left- or right-tusked, and the one they use more is usually smaller because of wear
              and tear. Elephant tusks serve many purposes. These extended teeth can be used to 
              protect the elephant's trunk, lift and move objects, gather food, and strip bark from
              trees. They can also be used for defense. During times of drought, elephants even use
              their tusks to dig holes to find water underground.</p>
          </div>
          <div class="ml-10 w-3/6">
            <p class="mb-10">Information about rhino</p>
            <p>A rhinoceros (/raɪˈnɒsərəs/, from Greek rhinokerōs 'nose-horned', 
              from rhis 'nose', and keras 'horn'), commonly abbreviated to rhino, is a member
              of any of the five extant species (or numerous extinct species) of odd-toed ungulates 
              in the family Rhinocerotidae. (It can also refer to a member of any of the extinct species
              of the superfamily Rhinocerotoidea.) Two of the extant species are native to Africa,
              and three to South and Southeast Asia.</p>
              <img class="m-5 border-4 border-black" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Rhino_collage.png/260px-Rhino_collage.png"/>
              <button @click="functionhey('leqi');getDate()" class=" transition-all px-5 py-2 mr-2 text-center bg-black text-white hover:bg-slate-800">
                click here for fun fact about Le Qi
              </button>
              <button @click="functionhey('abhishek');getDate()" class=" transition-all px-5 py-2 text-center bg-black text-white hover:bg-slate-800">
                click here for fun fact about abhishek
              </button>
          </div>

      </div>
    </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(126, 34, 206)" fill-opacity="1" d="M0,64L1440,288L1440,0L0,0Z"></path></svg>
  
  <colourBoxes />
  <RandomUser />
  <div class="py-10 w-full text-center text-black">
    <p class="text-7xl font-bold mb-4">Today's Date:<br/>{{getDate()}}</p>
  </div>
</template>

<script>
import '../assets/tailwind.css';
import WebsitePages from '../components/pages.vue';
import colourBoxes from '../components/colourBox.vue';
import RandomUser from '../components/random.vue';

export default {
  name: 'App',
  components: {
    WebsitePages,
    colourBoxes,
    RandomUser,
  },
  methods: {
    functionhey(name){
      if(name == 'leqi'){
        alert('His name is Le Qi');
      }else if(name == 'abhishek'){
        alert('He is back in camp this week!!');
      }
    },
    getDate(){
      var current = new Date();
      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      return date;
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
#app {
  font-family: 'Raleway';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
