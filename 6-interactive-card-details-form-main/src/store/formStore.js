import { defineStore } from "pinia";

export const useFormStore = defineStore("formStore", {
  state: () => {
    return {
      name: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
    };
  }
});
