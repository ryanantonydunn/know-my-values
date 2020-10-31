<script>
  import Button from "../components/Button.svelte";
  export let setPage;
  export let values;

  const MIN_ITEMS = 4;
  const MAX_ITEMS = 12;

  let selectedValues = [];

  const selectValue = (value) => {
    const valIndex = selectedValues.indexOf(value);
    if (valIndex === -1) {
      selectedValues = [...selectedValues, value];
    } else {
      selectedValues = selectedValues.filter((d) => d !== value);
    }
  };

  $: hasNotEnoughValues = selectedValues.length < MIN_ITEMS;
  $: hasTooManyValues = selectedValues.length > MAX_ITEMS;
  $: btnMessage = hasNotEnoughValues
    ? `Select at least ${MIN_ITEMS - selectedValues.length} more`
    : hasTooManyValues
    ? `Select at least ${selectedValues.length - MAX_ITEMS} fewer`
    : "Proceed to sort your values";
</script>

<style>
  .valuelist {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .button-box {
    padding: 3rem 2rem;
  }

  .selected {
    display: block;
    margin-bottom: 1rem;
  }

  @media (min-width: 30rem) {
    .button-box {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .selected {
      display: inline-block;
      margin: 0 1rem 0 0;
    }
  }
</style>

<h2><b>Step 1:</b> Choose up to {MAX_ITEMS} values to compare</h2>
<div class="valuelist">
  {#each values as value}
    <Button
      secondary
      active={selectedValues.includes(value)}
      error={selectedValues.includes(value) && selectedValues.length > 12}
      onClick={() => selectValue(value)}
      testId={value}
      title={value} />
  {/each}
</div>
<div class="button-box">
  <span class="selected">{selectedValues.length} Selected</span>
  <Button
    active
    disabled={hasNotEnoughValues || hasTooManyValues}
    onClick={() => setPage('choose-preferences', selectedValues)}
    testId="proceed"
    title={btnMessage} />
</div>
