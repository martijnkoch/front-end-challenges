<template>
  <div class="grid lg:grid-cols-2 lg:h-screen">
    <CreditCards />
    <CreditCardForm v-if="step === 1" @submitForm="step++" />
    <ThankYou v-if="step === 2" @resetForm="step--" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CreditCards from "./components/CreditCards.vue";
import CreditCardForm from "./components/CreditCardForm.vue";
import ThankYou from "./components/ThankYou.vue";

const step = ref(1);
</script>