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
  <h1>What are my values?</h1>
  <p>Clarify what's really important to you. Choose and rank your values.</p>
</div>

{#if step === 0}
  <Step1 {next} />
{:else if step === 1}
  <Step2 {next} {values} />
{:else}
  <Step3 {values} />
{/if}
