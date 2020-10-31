<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import SelectValues from "./screens/SelectValues.svelte";
  import ChoosePreferences from "./screens/ChoosePreferences.svelte";
  import ViewResults from "./screens/ViewResults.svelte";

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
  let page = "select-values";

  const setPage = (newPage, newValues) => {
    page = newPage;
    values = newValues;
  };
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: white;
    color: #4a5568;
    min-height: 100vh;
  }

  .content {
    flex: 1;
  }
</style>

<div class="container">
  <Header />
  <section class="content">
    {#if page === 'select-values'}
      <SelectValues {setPage} {values} />
    {:else if page === 'choose-preferences'}
      <ChoosePreferences {setPage} {values} />
    {:else if page === 'view-results'}
      <ViewResults {values} />
    {/if}
  </section>
  <Footer />
</div>
