document.addEventListener('DOMContentLoaded', () => {
    let img = document.querySelector('img#loading-anim');
    img.src = 'network/loading-update.gif'
    img.setAttribute('width', '100')
    img.setAttribute('alt', 'Animated GIF Loading Update');
});

document.querySelector('button').addEventListener('click', () => {
    window.location = 'https://discord.com/invite/YZy82288'
});