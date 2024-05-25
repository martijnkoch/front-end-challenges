<script lang="ts">
  import { onMount } from "svelte";
  const diceIcon = "/images/icon-dice.svg";
  const desktopPattern = "/images/pattern-divider-desktop.svg";

  interface Advice {
    slip: {
      id: number;
      advice: string;
    };
  }

  let loading: boolean = false;
  let buttonDisabled: boolean = false;
  let data: Advice = { slip: { id: 0, advice: "" } };

  onMount(async () => {
    await loadData();
  });

  async function loadData() {
    loading = true;
    buttonDisabled = true;
    const response = await fetch("https://api.adviceslip.com/advice");
    data = await response.json();
    loading = false;
    setTimeout(() => {
      buttonDisabled = false;
    }, 2000);
  }
</script>

<div
  class="flex flex-col items-center justify-center h-screen m-auto p-4 md:p-0"
>
  <div
    class="bg-[#313a49] rounded-xl p-11 text-center gap-3 min-h-52 md:w-[540px] w-full"
  >
    {#if loading}
      <svg
        class="animate-spin h-5 w-5 text-white m-auto"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    {:else}
      <h3 class="text-[#52fea8] uppercase font-bold tracking-widest text-xs">
        advice #{data.slip.id}
      </h3>
      <p class="text-[#cee3e8] text-2xl font-bold my-6">
        "{data.slip.advice}"
      </p>
      <img src={desktopPattern} alt="Desktop pattern" class="m-auto" />
    {/if}
  </div>

  <button
    on:click={loadData}
    class="bg-[#52ffa8] size-16 rounded-full -mt-6 hover:shadow-[0_0_40px_#52ffa8]"
    disabled={buttonDisabled}
    class:opacity-50={buttonDisabled}
  >
    <img src={diceIcon} alt="Dice Icon" class="m-auto" />
  </button>
</div>
