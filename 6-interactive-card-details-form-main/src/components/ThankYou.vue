<template>
  <div class="flex flex-col justify-center items-center gap-6">
    <img src="../assets/icon-complete.svg" class="size-20" />
    <h1 class="uppercase text-very-dark-violet text-2xl">Thank you!</h1>
    <p>We've added your card details</p>
    <button class="bg-very-dark-violet text-white rounded-lg p-4 w-80" type="submit" @click="goBack">
      Continue
    </button>
  </div>
</template>

<script setup>
import { useFormStore } from "../store/formStore";
const formStore = useFormStore();

const emit = defineEmits(['resetForm']);
const goBack = () => {
  emit('resetForm');
  formStore.$reset()
}
</script>
