<script>
  export let values;
</script>

<h2>Your ranked values</h2>
<div class="list">
  {#each values as value, i}
    <div class="list-item">
      <div class="number">{i + 1}</div>
      {value}
    </div>
  {/each}
</div>
