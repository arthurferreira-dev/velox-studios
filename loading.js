document.addEventListener('DOMContentLoaded', () => {
    let img = document.querySelector('img#loading-done');
    img.src = 'network/loading-done.gif'
    img.setAttribute('width', '100')
    img.setAttribute('alt', 'Animated GIF Loading Done');
});

document.querySelector('button').addEventListener('click', () => {
    window.location = 'https://velox-studios.vercel.app'
});