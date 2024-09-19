<script>
let projects = [
    {
    name: "UPG DAYZ",
    description: "Réalisation d'une application web pour une communauté de jeu en ligne avec Svelte et Laravel.",
    image: "images/upg.png", // Remplace par le chemin réel de l'image
    link: "https://upgdayz.com"
    },
    {
    name: "24000 Productions",
    description: "Réalisation d'une application web en HTML, CSS et JavaScript pour une entreprise de production audiovisuelle.",
    image: "images/24000.png",
    link: "#"
    },
    {
    name: "O'Top",
    description: "Réalisation d'une application web en Svelte, Symfony et Sass pour la création de cahiers des charges en ligne",
    image: "images/otop.png",
    link: "https://lien-vers-projet-2.com"
    }
    // Ajoute plus de projets ici
];
</script>

<section class="projects">
<h2>Mes Projets</h2>
<div class="project-list">
    {#each projects as project}
    <div class="project-card">
        <img src={project.image} alt="Image du projet {project.name}">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank">Voir le projet</a>
    </div>
    {/each}
</div>
</section>

<style>
.projects {
    padding: 60px 20px;
    background: #f7f7f7;
    text-align: center;
}
.project-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}
.project-card {
    background: white;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    width: 300px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
img {
    max-width: 100%;
    border-radius: 10px;
}
a {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border-radius: 5px;
    text-decoration: none;
}
</style>
