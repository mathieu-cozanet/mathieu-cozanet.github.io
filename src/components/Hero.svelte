<script>
let name = "Mathieu COZANET MERLINGEAS";
let title = "Développeur Web Full-Stack Junior";
let imageSrc = "images/moi.jpg"; // Remplace avec le chemin réel de l'image
let backgroundImage = "images/bg.png"; // Remplace avec le chemin réel de ton image de fond
</script>

<section class="hero" style="background-image: url({backgroundImage});">
<h1>{name}</h1>
<p>{title}</p>
<img src={imageSrc} alt="Photo de {name}">
<button on:click={() => window.scrollTo(0, document.querySelector('.about').offsetTop)}>En savoir plus</button>
</section>

<style>
.hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 100px 20px;
    background-size: cover; /* Pour couvrir toute la section */
    background-position: center; /* Centrer l'image */
    background-attachment: fixed; /* Image de fond fixe lors du défilement */
    color: white; /* Couleur du texte pour contraster avec l'image de fond */
    
}

h1 {
    font-size: 3rem;
    text-shadow: 2px 2px 10px black;
}

p {
    font-size: 1.5rem;
    color: #fff; /* Couleur du texte */
    text-shadow: 2px 2px 10px black;
}

img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    overflow: hidden;
    border-radius: 20%;
    margin-top: 20px;
    border: 2px solid white; /* Optionnel : un contour blanc autour de l'image */
}

button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>