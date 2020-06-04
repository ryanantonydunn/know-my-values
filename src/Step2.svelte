<script>
  export let next;
  export let values;
  let vals = [...values];
  vals.sort(() => Math.random() - 0.5);

  let checkedCombos = [
    /* { opt1, opt2, choice } */
  ];

  let hasChanged = false;
  let i = 0;

  const change = () => {
    const second = vals[i];
    vals[i] = vals[i + 1];
    vals[i + 1] = second;
    hasChanged = true;
  };

  const haveWeDoneThisAlready = () => {
    const checkedCombo = checkedCombos.find(
      ({ opt1, opt2 }) =>
        [opt1, opt2].includes(vals[i]) && [opt1, opt2].includes(vals[i + 1])
    );
    if (checkedCombo) {
      const { choice } = checkedCombo;
      // if the choice is currently lower in the sort
      if (choice === vals[i + 1]) change();
      increment();
    }
  };

  const increment = () => {
    i++;
    // finished this pass
    if (i === vals.length - 1) {
      if (hasChanged) {
        i = 0;
        hasChanged = false;
        haveWeDoneThisAlready();
      } else {
        next(vals);
      }
    } else {
      haveWeDoneThisAlready();
    }
  };

  const choose = changing => {
    checkedCombos = [
      ...checkedCombos,
      {
        opt1: vals[i],
        opt2: vals[i + 1],
        choice: changing ? vals[i + 1] : vals[i]
      }
    ];
    if (changing) change();
    increment();
  };
</script>

<h2>Step 2 - Which do you value more?</h2>
<div class="choices">
  <button class="choices-button" on:click={() => choose(false)}>
    {vals[i]}
  </button>
  <div class="or">Or</div>
  <button class="choices-button" on:click={() => choose(true)}>
    {vals[i + 1]}
  </button>
</div>

<!-- 
<div>i - {i}</div>

<h3>checkedCombos</h3>
{#each checkedCombos as combo}
  <div>{combo.opt1} - {combo.opt2} - {combo.choice}</div>
{/each}

<h3>vals</h3>
{#each vals as val}
  <div>{val}</div>
{/each} -->
