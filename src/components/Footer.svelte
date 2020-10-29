<script>
  import Twitter from "svelte-icons/fa/FaTwitter.svelte";
  import GlobeEurope from "svelte-icons/fa/FaGlobeEurope.svelte";
  import Github from "svelte-icons/fa/FaGithub.svelte";
</script>

<style>
  .main-footer {
    background-color: #efefef;
    padding: 2rem;
    font-size: 0.9rem;
  }

  p {
    margin: 0.5rem 0;
  }

  .icon-link {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    padding: 0.4rem;
    border: 2px solid transparent;
    border-radius: 999px;
    color: #444;
    transition: border-color 0.2s, transform 0.2s;
  }

  .icon-link:hover,
  .icon-link:focus {
    outline: none;
    border-color: #bbb;
    transform: scale(1.2);
  }
</style>

<footer class="main-footer">
  <p>Made by Ryan Dunn</p>
  <a
    href="https://ryandunn.dev"
    rel="noopener noreferrer"
    aria-label="Ryan Dunn's personal website"
    class="icon-link"><GlobeEurope /></a>
  <a
    href="https://twitter.com/ryandunndev"
    rel="noopener noreferrer"
    aria-label="Ryan Dunn on Twitter"
    class="icon-link"><Twitter /></a>
  <a
    href="https://github.com/ryanantonydunn"
    rel="noopener noreferrer"
    aria-label="Ryan Dunn on Github"
    class="icon-link"><Github /></a>
  <p>
    <a
      rel="noopener noreferrer"
      href="https://github.com/ryanantonydunn/know-my-values">View this project
      on Github</a>
  </p>
</footer>
