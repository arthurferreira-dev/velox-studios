let OptionsInfo = document.querySelector('#informations-options');
let LoreOptions = document.querySelector('#lore-options');
let SuportOptions = document.querySelector('#suporte-options');
let click = true // clicks do usuário

function GamesInfo() {
    let ArrowDownGames = document.querySelector('i#arrow-down-line-games');

    if (click) {
        ArrowDownGames.classList.remove('ri-arrow-down-s-line');
        ArrowDownGames.classList.add('ri-arrow-up-s-line');
        OptionsInfo.classList.remove('hidden');
        click = false
    } else {
        ArrowDownGames.classList.remove('ri-arrow-up-s-line');
        ArrowDownGames.classList.add('ri-arrow-down-s-line');
        OptionsInfo.classList.add('hidden');
        click = true
    }
}

function LoreInfo() {
    let ArrowDownLore = document.querySelector('i#arrow-down-line-lore');

    if (click) {
        ArrowDownLore.classList.remove('ri-arrow-down-s-line');
        ArrowDownLore.classList.add('ri-arrow-up-s-line');
        LoreOptions.classList.remove('hidden');
        click = false
    } else {
        ArrowDownLore.classList.add('ri-arrow-down-s-line');
        ArrowDownLore.classList.remove('ri-arrow-up-s-line');
        LoreOptions.classList.add('hidden');
        click = true
    }
}

function SuportInfo() {
    let ArrowDownSuport = document.querySelector('i#arrow-down-line-suport');

    if (click) {
        ArrowDownSuport.classList.remove('ri-arrow-down-s-line');
        ArrowDownSuport.classList.add('ri-arrow-up-s-line');
        SuportOptions.classList.remove('hidden');
        click = false
    } else {
        ArrowDownSuport.classList.remove('ri-arrow-up-s-line');
        ArrowDownSuport.classList.add('ri-arrow-down-s-line');
        SuportOptions.classList.add('hidden');
        click = true
    }

}