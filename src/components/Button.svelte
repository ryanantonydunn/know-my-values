<script>
  export let active = false;
  export let disabled = false;
  export let error = false;
  export let large = false;
  export let secondary = false;
  export let fill = false;
  export let onClick = () => {};
  export let title = "";
</script>

<style>
  .btn {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    padding: 0;
    border: none;
    border-radius: 999px;
    margin: 0.3rem;
    overflow: hidden;
    background-color: #efefef;
    transition: transform 0.2s;
  }

  .btn:before {
    content: "";
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    left: 100%;
    bottom: 0;
    transition: left 0.2s;
    background-image: linear-gradient(to right, #805ad5, #4299e1);
  }

  .secondary:before {
    background-image: linear-gradient(to right, #dd6b20, #d53f8c);
  }

  .btn:focus {
    outline: none;
  }

  .btn:hover:not(:disabled) {
    transform: scale(1.1);
  }

  .active:before,
  .btn:hover:before,
  .btn:focus:before {
    left: 0;
  }

  .inner {
    position: relative;
    z-index: 15;
    padding: 0.7rem 1.2rem;
    border-radius: 999px;
    margin: 2px;
    border: 2px solid white;
    overflow: hidden;
    transform: border-color 0.2s;
  }

  .inner:before {
    content: "";
    position: absolute;
    box-sizing: border-box;
    z-index: 10;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #efefef;
    transition: left 0.2s;
  }

  .active .inner:before {
    left: 100%;
  }

  .active .inner {
    border-color: transparent;
  }

  .active:hover .inner,
  .active:focus .inner {
    border-color: white;
  }

  .text {
    position: relative;
    z-index: 20;
    transition: color 0.2s;
    font-size: 1rem;
  }

  .active:not(:disabled) .text {
    color: white;
  }

  .btn:disabled {
    cursor: not-allowed;
  }

  .btn:disabled:before {
    background-image: none;
  }

  .btn:disabled .text {
    color: #4a5568;
  }

  .large .inner {
    padding: 1.5rem 2.3rem;
  }

  .fill {
    width: 100%;
  }

  @media (min-width: 30rem) {
    .btn {
      width: auto;
    }

    .fill {
      width: 100%;
    }
  }
</style>

<button
  class="btn"
  class:active
  class:error
  class:large
  class:secondary
  class:fill
  on:click={onClick}
  {disabled}
  aria-label={title}>
  <div class="inner"><span class="text">{title}</span></div>
</button>
