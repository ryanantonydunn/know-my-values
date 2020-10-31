<script>
  export let values;
</script>

<style>
  ol {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem 3rem;
    list-style: none;
    counter-reset: county;
  }

  li {
    counter-increment: county;
    display: flex;
    align-items: center;
    width: 14rem;
    max-width: 100%;
  }

  li:not(:last-child) {
    margin-bottom: 1rem;
  }

  li:before {
    content: counter(county);
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    background: linear-gradient(90deg, #805ad5, #4299e1);
    color: white;
    margin-right: 0.8rem;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
</style>

<h2><b>Step 3:</b> Your ranked values</h2>
<ol>
  {#each values as value, i}
    <li>{value}</li>
  {/each}
</ol>
