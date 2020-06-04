<script>
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
    "Wealth"
  ];

  let selectedValues = [];

  const selectValue = value => {
    const valIndex = selectedValues.indexOf(value);
    if (valIndex === -1) {
      selectedValues = [...selectedValues, value];
    } else {
      selectedValues = selectedValues.filter(d => d !== value);
    }
  };
</script>

<h2>Step 1 - Choose up to 12 values</h2>
<div class="valuelist">
  {#each values as value}
    <button
      class="valuelist-button"
      class:active={selectedValues.includes(value)}
      class:error={selectedValues.includes(value) && selectedValues.length > 10}
      on:click={() => selectValue(value)}>
      {value}
    </button>
  {/each}
</div>
<button
  disabled={selectedValues.length < 4 || selectedValues.length > 12}
  class="btn"
  on:click={() => next(selectedValues)}>
  <b>{selectedValues.length}</b>
  - {selectedValues.length < 4 ? 'Select a few more' : selectedValues.length > 12 ? 'Too many selected' : 'Proceed to step 2'}
</button>
