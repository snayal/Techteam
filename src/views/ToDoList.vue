<script>
let id = 0;
export default {
  data() {
    return {
      newItem: '',
      tasks: [],
    };
  },
  methods: {
    addToDo() {
      this.tasks.push({ id: id++, text: this.newItem });
      this.newItem = '';
    },
    rmToDo(td) {
      this.tasks = this.tasks.filter((x) => x !== td);
    },
    edit() {
      this.tasks;
    },
  },
};
</script>

<template>
  <body class=" h-screen w-full">
    <div class=" border-4 border-solid border-slate-900 bg-slate-400 w-2/3 h-full rounded-3xl translate-y-20 m-auto flex flex-col">
      <div class="text-center text-4xl font-bold underline p-5">To-Do List</div>
      <div class="text-base inline-flex flex-row h-9 m-2">
        <input v-model="newItem" @keyup.enter="addToDo" class="pl-4 rounded-3xl relative outline-none w-11/12 focus:border-t focus:border-r focus:border-blue-300"
        />
        <button
          @click="addToDo"
          class="hover:bg-cyan-900 hover:text-blue-400 -ml-3 border-2 bg-orange-300 border-solid border-blue-300 rounded-r-3xl w-2/12"
        >
          Add Item
        </button>
      </div>
      <div class="bg-slate-500 m-2 h-full rounded-xl">
        <div
          class="overflow-y-auto h-1/3 scroll-my-4 scroll-py-12 p-4 m-2 bg-slate-500"
        >
          <ul>
            <li
              class="flex flex-row border-2 border-black bg-orange-300 rounded-3xl pl-5 mt-2 h-8 "
              v-for="td in tasks"
              :key="td.id"
            >
              <div class=" h-7 w-11/12 font-bold pt-1 text-left">{{ td.text }}</div>
              <button
                @click="rmToDo(td)"
                class="hover:bg-blue-300 hover:overflow-hidden rounded-r-3xl pt-1 -mr-3 border-l-2 h-7 text-center w-1/12 border-black"
              >
                X
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </body>
</template>
