<script>
    let technologies = [
        { name: "Html", logo: "/images/logos/html-5.svg" },
        { name: "Css", logo: "/images/logos/css-3.svg" },
        { name: "Sass", logo: "/images/logos/sass.svg" },
        { name: "Svelte", logo: "/images/logos/svelte.svg" },
        { name: "Laravel", logo: "/images/logos/laravel.svg" },
        { name: "Directus", logo: "/images/logos/directus.svg" },
        { name: "JWT", logo: "/images/logos/jwt.svg" },
        { name: "MySQL", logo: "/images/logos/mysql.svg" },
    ];
</script>

<section class="about">
<h2>À propos de moi</h2>
<p>Je suis un développeur web full-stack junior, passionné par la conception et la réalisation de solutions numériques innovantes et personnalisées. Mon expertise couvre à la fois le développement front-end et back-end, avec une attention particulière à la performance, à l'expérience utilisateur et à l'optimisation des flux de travail.<br><br>

    Côté front-end, j'ai un goût prononcé pour les technologies modernes comme Svelte, qui me permettent de créer des interfaces interactives et dynamiques. Côté back-end, je maîtrise des frameworks robustes comme Laravel et des outils tels que Directus, garantissant une gestion des données efficace et sécurisée.<br><br>
    
    Je suis également compétent dans l'implémentation d'authentification sécurisée grâce à des technologies comme JWT (JSON Web Token), assurant ainsi l'intégrité et la protection des applications web. Toujours en quête de nouvelles compétences, je m'efforce de rester à l'avant-garde des tendances technologiques pour apporter des solutions performantes et évolutives à chaque projet.
    
        </p>
<h2>Technologies que j'utilise</h2>
  <div class="technologies">
    {#each technologies as tech}
      <div class="technology">
        <img src={tech.logo} alt={`Logo de ${tech.name}`} />
        <p>{tech.name}</p>
      </div>
    {/each}
  </div>
</section>

<style>
  .about {
    padding: 50px 20px;
    text-align: center;
    max-width: 1200px; /* Limite la largeur maximale */
    margin: 0 auto; /* Centre horizontalement */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .technologies {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .technology {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
  }

  .technology img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }

  .technology p {
    font-size: 1rem;
    margin: 0;
  }
</style>
