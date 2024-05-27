<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :id="id"
    class="border rounded-lg p-2 focus:ring-1 focus:ring-inset focus:ring-indigo-400 text-very-dark-violet"
    :class="error ? 'border-[#ff768b]' : 'border-light-gray-violet '"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
  error: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>
