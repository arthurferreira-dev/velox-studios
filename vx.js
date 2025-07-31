let time;

window.addEventListener('load', ImageRezises);
window.addEventListener('resize', () => {
    clearTimeout(time);
    time = setTimeout(ImageRezises, 150);
});

UpdateLink('discord-text', 'https://discord.gg/tFptYz9rUA');

let click = null;

function Toggle(sectionId, arrowId) {
    const Sections = document.getElementById(sectionId);
    const Arrows = document.getElementById(arrowId);

    const Visible = !Sections.classList.contains('hidden');

    document.querySelectorAll('#informations-options, #lore-options, #suporte-options, #music-options').forEach(sec => {
        sec.classList.add('hidden') 
    });

    document.querySelectorAll('#arrow-down-line-games, #arrow-down-line-lore, #arrow-down-line-suport, #arrow-down-line-music').forEach(Arrows => {
        Arrows.classList.remove('ri-arrow-up-s-line');
        Arrows.classList.add('ri-arrow-down-s-line');
    });

    if (!Visible) {
        Sections.classList.remove('hidden');
        Arrows.classList.remove('ri-arrow-down-s-line');
        Arrows.classList.add('ri-arrow-up-s-line');
        click = sectionId;
    } else {
        click = null;
    }
}

function ImageRezises() {
    let img = document.querySelector('img#img-principal');

    if (window.innerWidth >= 701) {
        img.src = 'network/sprites.png'
        img.classList.add('w-[64%]', 'h-[500px]', 'm-auto', 'relative', 'rounded-lg');
    } else if (window.innerWidth <= 700 && window.innerWidth >= 500 || window.innerWidth < 500) {
        img.src = 'network/sprites-500.png'
        img.classList.add('w-[100%]', 'h-[400px]', 'm-auto', 'relative', 'rounded-lg')
    }
}

function UpdateLink(id, url) {
    let link = document.getElementById(id);
    link.href = url
}