<script>
  import Logo from "./Logo.svelte";
</script>

<style>
  .main-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(90deg, #805ad5, #4299e1);
    padding: 0.4rem;
  }

  .home-link {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    padding: 0.2rem 0.6rem;
    border: 2px solid transparent;
    border-radius: 999px;
    transition: border-color 0.2s;
  }

  .home-link:hover,
  .home-link:focus {
    border-color: rgba(255, 255, 255, 0.6);
    outline: none;
  }

  h1 {
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: normal;
    margin: 0 0 0 1rem;
    color: white;
  }

  .subtitle {
    background-color: #efefef;
    padding: 1rem;
    font-size: 1rem;
  }
</style>

<header>
  <div class="main-header">
    <a href="/" class="home-link" aria-label="Go back to the start">
      <Logo />
      <h1>Know <b>My</b> Values</h1>
    </a>
  </div>
  <div class="subtitle">
    Clarify your core values with a simple sorting exercise.
  </div>
</header>
