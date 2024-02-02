<script setup lang="ts">
import { ref } from "vue";

const sideItems = ref([
  {
    title: "Dashboard",
    image: "/sidebar-images/home.svg",
  },
  {
    title: "Students",
    image: "/sidebar-images/student.svg",
  },
  {
    title: "Teachers",
    image: "/sidebar-images/teacher.svg",
  },
  {
    title: "Letters of explanation",
    image: "/sidebar-images/letter.svg",
  },
  {
    title: "Bonuses",
    image: "/sidebar-images/bonus.svg",
  },
  {
    title: "Stuff",
    image: "/sidebar-images/stuff.svg",
  },
  {
    title: "Courses",
    image: "/sidebar-images/courses.svg",
  },
  {
    title: "Groups",
    image: "/sidebar-images/group.svg",
  },
  {
    title: "Papa Mama",
    image: "/sidebar-images/friend.svg",
  },
  {
    title: "Quality Department",
    image: "/sidebar-images/quality.svg",
  },
  {
    title: "Homework",
    image: "/sidebar-images/homework.svg",
  },
  {
    title: "Time table",
    image: "/public/sidebar-images/table.svg",
  },
  {
    title: "Settings",
    image: "/public/sidebar-images/setting.svg",
  },
]);

const isActive = ref(false);

const onClickIndex = (item: string) => {
  const items = sideItems.value.map((val) => {
    if (val.title !== item) {
      return val;
    } else {
      return {
        ...val,
        active: true,
      };
    }
  });
  sideItems.value = [...items];
  console.log(sideItems.value);
};
</script>

<template>
  <aside
    class="w-80 h-screen bg-[#121111] flex flex-col pt-5 scroll-auto relative"
  >
    <div class="flex items-center gap-x-4 ml-5">
      <img src="/logo.svg" alt="Logo" />
      <div class="text-white">
        <h2 class="font-bold text-2xl">Fast Education</h2>
        <p class="uppercase tracking-[4px] text-xs">Intranet System</p>
      </div>
    </div>
    <div class="border-b mx-auto w-[90%] mt-5 border-slate-600 mb-3"></div>
    <ul v-for="item in sideItems" :key="item.title" class="w-[90%] mx-auto">
      <li
        @click="() => onClickIndex(item.title)"
        class="text-white flex items-center py-3 gap-x-3 pl-4 rounded-xl cursor-pointer"
        :class="item?.active ? 'bg-white text-[#121111]' : ''"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class="w-6 h-6"
          :class="item?.active ? 'text-red-500' : ''"
        />
        <h2>{{ item.title }}</h2>
      </li>
    </ul>
    <button
      class="text-white absolute bottom-4 left-[50%] -translate-x-[50%] bg-lime-500 w-[90%] py-3 rounded-lg"
    >
      Developed by: PROEND TEAM
    </button>
  </aside>
</template>
