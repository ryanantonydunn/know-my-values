<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Step1 from "./screens/Step1.svelte";
  import Step2 from "./screens/Step2.svelte";
  import Step3 from "./screens/Step3.svelte";

  const defaultValues = [
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

  let values = [];
  let step = 0;

  const next = (newValues) => {
    values = newValues;
    step++;
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
    {#if step === 0}
      <Step1 {next} {defaultValues} />
    {:else if step === 1}
      <Step2 {next} {values} />
    {:else}
      <Step3 {values} />
    {/if}
  </section>
  <Footer />
</div>
