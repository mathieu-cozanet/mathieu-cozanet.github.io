<script>
function handleSubmit(event) {
event.preventDefault();
alert('Formulaire envoyé !');
// Ajouter la logique pour gérer le formulaire
}
</script>

<section class="contact">
<h2>Contactez-moi</h2>
<div class="social-links">
    <a href="https://www.linkedin.com/in/mathieu-cozanet-merlingeas-1b8a562aa/" target="_blank" aria-label="LinkedIn">
    <img src="images/logos/linkedin.svg" alt="LinkedIn">
    </a>
    <a href="https://twitter.com/CozanetMathieu" target="_blank" aria-label="Twitter">
        <img src="images/logos/X.svg" alt="Twitter">
        </a>
    <a href="https://github.com/mathieu-cozanet" target="_blank" aria-label="GitHub">
    <img src="images/logos/github.svg" alt="GitHub">
    </a>
</div>
</section>

<style>
.contact {
padding: 60px 20px;
background: #ffffff;
text-align: center;
}

.social-links {
    display: flex;
    justify-content: center;
    align-items: center;
    /* max-width: 1200px;
    margin: 0 auto; */
}

.social-links img {
    width: 50px;
    height: 50px;
    margin: 0 20px;
}
</style>
