<template>
  <p v-if="error" class="text-[#ff768b] mt-2 text-xs">{{ msg }}</p>
</template>

<script setup>
defineProps({
  error: {
    type: Boolean,
  },
  msg: {
    type: String,
  },
});
</script>
