<template>
  <form
    @submit.prevent="submitForm()"
    class="flex flex-col w-full lg:max-w-[382px] justify-center p-4 lg:p-0 z-10"
  >
    <div class="flex flex-col mb-4">
      <Label for="name" text="Cardholder Name" />
      <Input
        v-model="formStore.name"
        placeholder="e.g. Jane Appleseed"
        id="name"
        :error="v$.name.$error"
      />
      <ErrorMessage
        :error="v$.name.$error"
        :msg="getErrorMessage(v$.name.$errors)"
      />
    </div>

    <div class="flex flex-col mb-4">
      <Label for="number" text="Card number" />
      <Input
        v-model="formStore.number"
        placeholder="e.g. 1234 5678 9123 0000"
        id="number"
        type="number"
        :error="v$.number.$error"
      />
      <ErrorMessage
        :error="v$.number.$error"
        :msg="getErrorMessage(v$.number.$errors)"
      />
    </div>
    <div class="flex flex-col lg:flex-row mb-4 gap-2">
      <div class="flex flex-col">
        <Label for="number" text="Exp. Date (mm/yy)" />
        <div class="grid grid-cols-2 lg:flex gap-2">
          <Input
            v-model="formStore.month"
            placeholder="MM"
            id="month"
            class="lg:w-20"
            :error="v$.month.$error"
          />
          <Input
            v-model="formStore.year"
            placeholder="YY"
            id="year"
            class="lg:w-20"
            :error="v$.year.$error"
          />
        </div>
        <div class="flex gap-2">
          <ErrorMessage
            :error="v$.month.$error"
            :msg="getErrorMessage(v$.month.$errors)"
          />
          <ErrorMessage
            :error="v$.year.$error"
            :msg="getErrorMessage(v$.year.$errors)"
          />
        </div>
      </div>

      <div class="flex flex-col">
        <Label for="cvc" text="Cvc" />
        <Input
          v-model="formStore.cvc"
          placeholder="e.g. 123"
          id="cvc"
          type="number"
          :error="v$.cvc.$error"
        />
        <ErrorMessage
          :error="v$.cvc.$error"
          :msg="getErrorMessage(v$.cvc.$errors)"
        />
      </div>
    </div>

    <button class="bg-very-dark-violet text-white rounded-lg p-4" type="submit">
      Confirm
    </button>
  </form>
</template>

<script setup>
import { computed } from "vue";
import { useFormStore } from "../store/formStore";
import { useVuelidate } from "@vuelidate/core";
import { required, numeric, helpers, maxLength } from "@vuelidate/validators";
import Label from "./Base/Label.vue";
import Input from "./Base/Input.vue";
import ErrorMessage from "./Base/Errormessage.vue";

const formStore = useFormStore();

const generateValidationRules = () => {
  const rules = {
    name: {
      required: helpers.withMessage("Name is required", required),
    },
    number: {
      required: helpers.withMessage("Card number is required", required),
      numeric: helpers.withMessage("Card number must be numeric", numeric),
    },
    month: {
      required: helpers.withMessage("Month is required", required),
      numeric: helpers.withMessage("Month must be numeric", numeric),
      maxLength: helpers.withMessage("Month must be 2 digits", maxLength(2)),
    },
    year: {
      required: helpers.withMessage("Year is required", required),
      numeric: helpers.withMessage("Year must be numeric", numeric),
      maxLength: helpers.withMessage("Year must be 4 digits", maxLength(4)),
    },
    cvc: {
      required: helpers.withMessage("Cvc is required", required),
      numeric: helpers.withMessage("Cvc must be numeric", numeric),
      maxLength: helpers.withMessage("Cvc must be 3 digits", maxLength(3)),
    },
  };

  return rules;
};

const formValidationRules = computed(() => generateValidationRules(true));
const v$ = useVuelidate(formValidationRules, formStore);

const getErrorMessage = (errors) => {
  if (errors && errors.length > 0) {
    return errors[0].$message;
  }
  return "";
};

const emit = defineEmits(['submitForm']);

const submitForm = async () => {
  const isFormCorrect = await v$.value.$validate();
  if (!isFormCorrect) return;
  emit('submitForm');
};
</script>
