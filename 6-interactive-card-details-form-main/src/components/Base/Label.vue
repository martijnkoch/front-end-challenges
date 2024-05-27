<template>
  <label
    class="uppercase text-xs text-dark-violet font-medium tracking-widest mb-2"
    :for="for"
    >{{ text }}</label
  >
</template>

<script setup>
defineProps({
    for: {
        type: String, 
    },
    text: {
        type: String,
    }
});
</script>
