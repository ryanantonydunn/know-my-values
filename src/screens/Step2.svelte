<script>
  import Button from "../components/Button.svelte";
  export let next;
  export let values;

  // duplicate values and randomise the order
  let vals = [...values];
  vals.sort(() => Math.random() - 0.5);

  // record which combinations of values have already had a preference chosen
  let checkedCombos = [
    /* { opt1, opt2, choice } */
  ];

  let hasChanged = false;
  let i = 0;

  // is the current order of preferences changing?
  const change = () => {
    const second = vals[i];
    vals[i] = vals[i + 1];
    vals[i + 1] = second;
    hasChanged = true;
  };

  // action if we have already checked this combo
  const haveWeDoneThisAlready = () => {
    const checkedCombo = checkedCombos.find(
      ({ opt1, opt2 }) =>
        [opt1, opt2].includes(vals[i]) && [opt1, opt2].includes(vals[i + 1])
    );
    if (checkedCombo) {
      const { choice } = checkedCombo;
      // change if the choice is currently lower in the sort
      if (choice === vals[i + 1]) {
        change();
      }
      increment();
    }
  };

  // move through the list of preferences
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

  // choose whether to keep the current order (choose left)
  // or switch the choices in the preference array (choose right)
  const choose = (switching) => {
    checkedCombos = [
      ...checkedCombos,
      {
        opt1: vals[i],
        opt2: vals[i + 1],
        choice: switching ? vals[i + 1] : vals[i],
      },
    ];
    if (switching) {
      change();
    }
    increment();
  };
</script>

<style>
  .choices {
    margin: 0 0 3rem 0;
  }

  .choice {
    padding: 0 2rem;
  }

  .combos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 50rem;
    margin: 0 auto 3rem;
  }

  .combo {
    font-size: 0.8rem;
    padding: 0.4rem;
    border: 1px solid #eee;
    border-radius: 4px;
    margin: 0.2rem;
    color: #aaa;
  }

  .combo span {
    color: #333;
  }

  .combo .active {
    font-weight: 700;
  }

  @media (min-width: 38rem) {
    .choices {
      display: flex;
      width: 38rem;
      align-items: center;
      margin: 0 auto 3rem;
    }

    .choice {
      flex: 1;
    }
  }
</style>

<h2><b>Step 2:</b> Which do you value more?</h2>
<div class="choices">
  <div class="choice">
    <Button
      fill
      large
      secondary
      onClick={() => choose(false)}
      title={vals[i]} />
  </div>
  <div>Or</div>
  <div class="choice">
    <Button
      fill
      large
      secondary
      onClick={() => choose(true)}
      title={vals[i + 1]} />
  </div>
</div>

<div class="combos">
  {#each checkedCombos as combo}
    <div class="combo">
      <span class:active={combo.opt1 === combo.choice}>{combo.opt1}</span>
      /
      <span class:active={combo.opt2 === combo.choice}>{combo.opt2}</span>
    </div>
  {/each}
</div>
