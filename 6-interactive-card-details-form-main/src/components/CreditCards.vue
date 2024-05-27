<template>
  <div
    class="bg-main-mobile lg:bg-main-desktop bg-[length:100%_240px] lg:bg-[length:484px_100%] bg-no-repeat h-80	lg:h-auto overflow-hidden"
  >
    <div class="flex flex-col justify-center items-center lg:h-screen lg:gap-8">
      <div
        class="bg-front-creditcard bg-no-repeat h-64 relative w-[286px] lg:w-[448px] order-2 lg:order-1 bg-contain -mt-40 lg:mt-0	"
      >
        <img
          src="@/assets/card-logo.svg"
          alt="Logo"
          class="absolute left-8 right-0 top-8 bottom-0"
        />
        <p class="text-white absolute left-8 top-1/3 lg:top-2/4">
          {{ formStore.number || "0000 0000 0000 0000" }}
        </p>
        <p class="text-white absolute left-8 bottom-28 lg:bottom-8">
          {{ formStore.name || "John Doe" }}
        </p>
        <p class="text-white absolute right-8 bottom-8">
          {{ formStore.month || "00" }}
          /
          {{ formStore.year || "00" }}
        </p>
      </div>
      <div
        class="-mr-4 xl:-mr-20 bg-back-creditcard bg-no-repeat h-64 relative w-[286px] lg:w-[448px] order-1 lg:order-2 bg-contain mt-4 lg:mt-0"
      >
        <p class="text-white absolute right-16 top-16 lg:top-28">
          {{ formStore.cvc || "000" }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFormStore } from "../store/formStore";
const formStore = useFormStore();
</script>
