const menu = document.getElementById('menu');
const btn = document.getElementById('btn');
const circle = document.getElementById('circle');

document.addEventListener('mousemove', (e) => {
    const height = circle.offsetHeight;
    const width = circle.offsetWidth;

    if (e.target.tagName === 'CONTAINER' ||
        e.target.tagName === 'H1' ||
        e.target.parentNode.tagName === 'H1') {
        circle.classList.add('big');
    } else {
        circle.classList.remove('big');
    }
// ICI on met un delai sur le mouvement de la souris
    setTimeout(() => { 
        circle.style.left = `${e.pageX - width/2}px`;
        circle.style.top = `${e.pageY - height/2}px`;
    }, 50);
});