<template>
<div style="margin-top: 0%; margin-left: 40%;">
  <form class="max-w-2xl" @submit.prevent="gen_pass">
    <div class="flex flex-wrap">
      <div>
        <label class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2" for="length">
          Length
        </label>
        <input @click="clear_input" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="length" v-model.number="length">
      </div>
    </div>
    <div style="text-align: left">
      <span class="text-rose-500 text-2xs" v-if="length && length < 12">Passwords less than 12 characters are not very secure!</span><br v-if="length && length < 12">
      <div v-for="x in res" :key=x.name>
      <div class="form-check">
        <label class="form-check-label inline-block text-xl text-gray-800" for="lowercase">
          {{x.display}}
        </label>
        <input class="form-check-input appearance-none h-8 w-8 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" id="lowercase" type="checkbox" v-model="x.checked">
      </div><br>
      </div>
      <div class="text-green-600 text-3xl">{{ password }}</div><br>
      <button type="button" v-if="password" @click="copy_clipboard" class="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-l">
        <span v-if="copied">Copied</span>
        <span v-else>Copy</span>
      </button>
      <br v-if="password">
      <br v-if="password">
      <button type="submit" class="inline-flex items-center h-19 px-8 text-2xl text-white transition-colors duration-150 bg-green-500 rounded-lg focus:shadow-outline hover:bg-green-500">
        <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path d="M 24 4 C 19.599415 4 16 7.599415 16 12 L 16 16 L 12.5 16 C 10.032499 16 8 18.032499 8 20.5 L 8 39.5 C 8 41.967501 10.032499 44 12.5 44 L 35.5 44 C 37.967501 44 40 41.967501 40 39.5 L 40 20.5 C 40 18.032499 37.967501 16 35.5 16 L 32 16 L 32 12 C 32 7.599415 28.400585 4 24 4 z M 24 7 C 26.779415 7 29 9.220585 29 12 L 29 16 L 19 16 L 19 12 C 19 9.220585 21.220585 7 24 7 z M 12.5 19 L 35.5 19 C 36.346499 19 37 19.653501 37 20.5 L 37 39.5 C 37 40.346499 36.346499 41 35.5 41 L 12.5 41 C 11.653501 41 11 40.346499 11 39.5 L 11 20.5 C 11 19.653501 11.653501 19 12.5 19 z M 24 27 A 3 3 0 0 0 24 33 A 3 3 0 0 0 24 27 z"/></svg>
        <span>Generate Password</span>
      </button>
      </div>
  </form>
</div>
</template>

<script>
/*
 * maps are custom datastructures
 * which are essentially arrays of objects
 * each map array contains one of more objects
 * each object contains the lowerbound and upperbound of the character codes
 * the codes correspond to the charset each map is supposed to hold
 */

const map_lowercase = [
  {
    lb: 97,
    ub: 122
  }
];

const map_uppercase = [
  {
    lb: 65,
    ub: 90
  }
];

const map_number = [
  {
    lb: 48,
    ub: 57
  }
];

const map_symbol = [
  {
    lb: 33,
    ub: 47
  },
  {
    lb: 58,
    ub: 64
  },
  {
    lb: 91,
    ub: 96
  },
  {
    lb: 123,
    ub: 126
  }
];

/*
 * helper functions
 */

const chr = (n) => String.fromCharCode(n);

const gen_random_int = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default {
  name: "PassGen",
  data() {
    return {
      length: 16,
      password: "",
      copied: false,
      res: [
        {
          name: 'lower',
          display: 'Lowercase (a-z)',
          checked: false,
        },
        {
          name: 'upper',
          display: 'Uppercase (A-Z)',
          checked: false,
        },
        {
          name: 'num',
          display: 'Numbers (0-9)',
          checked: false,
        },
        {
          name: 'sym',
          display: 'Symbols (!@#$%^\\*()[]{}-_=+|\'";:.>,/?`~)',
          checked: false,
        },
      ]
    };
  },
  methods: {
    gen_pass() {
      var     i = 0;
      var     random = 0;
      var     maps_count = 0;
      var     cur_map = [];
      var     cur_map_count = 0;
      var     maps = [];
      var     charset = {};
      
      const { length } = this;
      this.password = "";
      this.copied = false;
      if (length < 1 || isNaN(length)) {
        alert("Enter a proper length!");
        return;
      }
      
      for (i = 0; i < this.res.length; i++) {
        if (this.res[i].checked) {
          switch (this.res[i].name) {
            case "lower":
              maps.push(map_lowercase);
              break;
            
            case "upper":
              maps.push(map_uppercase);
              break;

            case "num":
              maps.push(map_number);
              break;

            case "sym":
              maps.push(map_symbol);
              break;
            
            default:
              break;
          }
        }
      }

      maps_count = maps.length;
      if (maps_count < 1) {
        alert("Choose at least 1 charset!");
        return;
      }

      for (i = 0; i < length; i++) {
        random = gen_random_int(0, maps_count-1);
        cur_map = maps[random];
        cur_map_count = cur_map.length;
        
        random = gen_random_int(0, cur_map_count-1);
        charset = cur_map[random];

        this.password += chr(gen_random_int(charset.lb, charset.ub));
      }

      return;
    },

    copy_clipboard() {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(this.password);
        this.copied = true;
      }
      else {
        alert("Automatic copy does not work without HTTPS!");
      }

      return;
    },
  clear_input() {
      this.length = "";
    },
  },
};
</script>