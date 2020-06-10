<script>
  import Step1 from "./Step1.svelte";
  import Step2 from "./Step2.svelte";
  import Step3 from "./Step3.svelte";

  let step = 0;
  let values = [];
  const next = newValues => {
    values = newValues;
    step++;
  };
</script>

<div class="header">
  <h1>Know my values</h1>
  <p>Clarify your core values with a simple rank sorting exercise.</p>
</div>

{#if step === 0}
  <Step1 {next} />
{:else if step === 1}
  <Step2 {next} {values} />
{:else}
  <Step3 {values} />
{/if}
