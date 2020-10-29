<script>
  import Button from "../components/Button.svelte";
  export let next;
  let values = [
    "Accuracy",
    "Achievement",
    "Adventure",
    "Authority",
    "Autonomy",
    "Caring",
    "Challenge",
    "Change",
    "Comfort",
    "Compassion",
    "Contribution",
    "Cooperation",
    "Courtesy",
    "Creativity",
    "Dependability",
    "Duty",
    "Family",
    "Forgiveness",
    "Friendship",
    "Fun",
    "Generosity",
    "Genuineness",
    "Growth",
    "Health",
    "Helpfulness",
    "Honesty",
    "Humility",
    "Humour",
    "Justice",
    "Knowledge",
    "Leisure",
    "Mastery",
    "Moderation",
    "Nonconformity",
    "Openness",
    "Order",
    "Passion",
    "Popularity",
    "Power",
    "Purpose",
    "Rationality",
    "Realism",
    "Responsibility",
    "Risk",
    "Safety",
    "Self-Knowledge",
    "Service",
    "Simplicity",
    "Stability",
    "Tolerance",
    "Tradition",
    "Wealth",
  ];

  let selectedValues = [];

  const selectValue = (value) => {
    const valIndex = selectedValues.indexOf(value);
    if (valIndex === -1) {
      selectedValues = [...selectedValues, value];
    } else {
      selectedValues = selectedValues.filter((d) => d !== value);
    }
  };

  $: hasNotEnoughValues = selectedValues.length < 4;
  $: hasTooManyValues = selectedValues.length > 12;
  $: btnMessage = hasNotEnoughValues
    ? `Select at least ${4 - selectedValues.length} more`
    : hasTooManyValues
    ? `Select at least ${selectedValues.length - 12} fewer`
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

<h2><b>Step 1:</b> Choose up to 12 values to compare</h2>
<div class="valuelist">
  {#each values as value}
    <Button
      secondary
      active={selectedValues.includes(value)}
      error={selectedValues.includes(value) && selectedValues.length > 12}
      onClick={() => selectValue(value)}
      title={value} />
  {/each}
</div>
<div class="button-box">
  <span class="selected">{selectedValues.length} Selected</span>
  <Button
    active
    disabled={hasNotEnoughValues || hasTooManyValues}
    onClick={() => next(selectedValues)}
    title={btnMessage} />
</div>
