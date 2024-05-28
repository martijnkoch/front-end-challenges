<template>
  <img
    src="/src/assets/images/bg-header-desktop.svg"
    class="h-40 bg-desaturated-dark-cyan w-full"
  />

  <div v-if="searchItems.length" class="container mx-auto flex items-center bg-white px-10 py-4 -mt-8 z-10 relative rounded-md gap-4 md:gap-4 flex-wrap shadow-md">
    <div v-for="item in searchItems" :key="item" class="flex items-center">
      <p class="h-8 bg-light-grayish-cyan flex items-center px-3 gap-2 rounded-l-md text-desaturated-dark-cyan font-bold">{{ item }}</p>
      <div class="bg-desaturated-dark-cyan hover:bg-very-dark-grayish-cyan h-8 w-8 flex items-center justify-center rounded-r-md cursor-pointer" @click="removeFilter(item)">
        <img src="/src/assets/images/icon-remove.svg" />
      </div>
    </div>
    <p class="text-dark-grayish-cyan hover:text-desaturated-dark-cyan hover:underline ml-auto cursor-pointer font-bold" @click="clearFilters">Clear</p>
  </div>

  <ul class="container mx-auto mt-20 flex flex-col justify-center px-4 gap-8 md:gap-4 mb-8">
    <li
      v-for="job in filteredJobs"
      :key="job.id"
      :class="{ 'border-l-4 border-desaturated-dark-cyan': job.featured }"
      class="grid md:grid-cols-2 p-4 md:p-10 bg-white rounded-lg shadow-md"
    >
      <div class="flex flex-col md:flex-row gap-4">
        <img :src="getLogoPath(job.logo)" :alt="job.company" class="h-12 md:h-auto object-contain mr-auto md:mr-0 -mt-8" />
        <div class="flex flex-col justify-between gap-4 md:gap-2">
          <div class="flex gap-2 items-center">
            <p class="text-desaturated-dark-cyan font-bold">{{ job.company }}</p>
            <p v-if="job.new" class="relative before:block before:absolute before:-inset-1 before:bg-desaturated-dark-cyan before:rounded-full h-[18px]">
              <span class="relative text-white uppercase font-medium px-3">new!</span>
            </p>
            <p v-if="job.featured" class="ml-3 relative before:block before:absolute before:-inset-1 before:bg-very-dark-grayish-cyan before:rounded-full h-[18px]">
              <span class="relative text-white uppercase font-medium px-3">featured</span>
            </p>
          </div>
          <h4 class="text-very-dark-grayish-cyan hover:text-desaturated-dark-cyan font-bold text-xl">{{ job.position }}</h4>
          <div class="flex items-center gap-2">
            <p class="flex items-center text-dark-grayish-cyan gap-2 after:size-1 after:bg-dark-grayish-cyan after:rounded-full">{{ job.postedAt }}</p>
            <p class="flex items-center text-dark-grayish-cyan gap-2 after:size-1 after:bg-dark-grayish-cyan after:rounded-full">{{ job.contract }}</p>
            <p class="flex items-center text-dark-grayish-cyan gap-2">{{ job.location }}</p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-4 items-center md:justify-end mt-2 pt-4 border-t md:border-0">
        <p
          v-for="item in [job.role, job.level, ...job.languages, ...job.tools]"
          :key="item"
          class="flex items-center text-desaturated-dark-cyan hover:text-white font-bold bg-light-grayish-cyan hover:bg-desaturated-dark-cyan h-8 px-3 rounded-md cursor-pointer"
          @click="addFilter(item)"
        >
          {{ item }}
        </p>
      </div>
    </li>
  </ul>
</template>


<script setup>
import { ref, computed } from 'vue';
import jobs from './data/data.json';

const searchItems = ref([]);

const getLogoPath = (path) => {
  return new URL(`./${path}`, import.meta.url).href;
};

const addFilter = (item) => {
  if (!searchItems.value.includes(item)) {
    searchItems.value.push(item);
  }
};

const removeFilter = (item) => {
  searchItems.value = searchItems.value.filter((filter) => filter !== item);
};

const clearFilters = () => {
  searchItems.value = [];
};

const filteredJobs = computed(() => {
  if (searchItems.value.length === 0) {
    return jobs;
  }
  return jobs.filter((job) =>
    searchItems.value.every((filter) =>
      job.role === filter ||
      job.level === filter ||
      job.tools.includes(filter) ||
      job.languages.includes(filter)
    )
  );
});
</script>

