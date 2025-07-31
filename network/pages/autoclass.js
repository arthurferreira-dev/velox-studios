window.addEventListener('load', Loader)

function Loader() {
    Load();
}

function Load() {
    let imgs = [GetElement('img#img-1-vx', 'queryselector'), GetElement('img#img-2-vx', 'queryselector')]
    let ps = [GetElement('desc-vx-1', 'ById'), GetElement('desc-vx-2', 'ById')]
    Classer(imgs[1], 'w-[400px] m-auto mb-4 rounded-[50%] max-[500px]:w-[300px]')
    Classer(imgs[0], 'w-[400px] m-auto mb-4 max-[500px]:w-[300px]')
    Classer(GetElement('main', 'queryselector'), 'w-[90%] m-auto mt-5 p-3')
    Src(imgs[0], '../auras-vx.png')
    Alt(imgs[0], 'auras-vx')
    Src(imgs[1], '../restaurado-vx.png')
    Alt(imgs[1], 'restaurado-vx')
    Classer(ps[0], 'w-[80%] m-auto')
    Text(ps[0], Memory(1))
    Classer(ps[1], 'w-[80%] m-auto')
    Text(ps[1], Memory(2))
    Classer(GetElement('btn-return', 'byid'), 'p-2 text-center m-auto block bg-green-500 w-[200px] duration-[.41s] rounded-md hover:bg-green-600 hover:cursor-pointer')
    AddEvent(GetElement('btn-return', 'byid'), 'click', Return)
}

function GetElement(id, type) {
    let t = type.toUpperCase()
    if (t === 'QUERYSELECTOR') {
        return document.querySelector(id)
    } else if (t === 'BYID') {
        return document.getElementById(id)
    } else if (t === 'BYCLASSNAME') {
        return document.getElementsByClassName(id)
    } else {
        console.error('Nenhum dos métodos da function funciona com seu segundo parâmetro')
    }
}

function Classer(element, classe) {
    element.classList.add(...classe.split(' '))
}

function Alt(element, txt) {
    element.setAttribute('alt', txt)
}

function Src(element, url) {
    element.src = url
}

function Text(element, txt) {
    element.innerHTML = txt
}

function AddEvent(element, event, func) {
    element.addEventListener(event, func)
}

function Memory(id) {
    if (id === 1) {
        let x = 'Há muito tempo atrás, no espaço existia duas Auras que lutavam entre si, uma delas se chamava <strong>AuraLU</strong>, ela era responsável por ter o conhecimento da bondade, mas não tinha nenhum conhecimento  da maldade, e o outro que se chamava <strong>AuraSR</strong>, e ele era responsável por trazer a maldade, mas ele não tinha o conhecimento da bondade, a luta deles duraram por anos ou até séculos, até que um dia um ser celestial enviou um ser que batizam de <strong>Good VX</strong>, ele foi responsável por selar os poderes das Auras em duas espadas, a espada da bondade e a espada da maldade, e após isso ele selou as duas Auras, em dois buracos negros mantendo um dos dois quilômetros á quilômetros de distâncias. E após isso antes de selar, uma explosão acontece fazendo a criação dos universos, e após isso cada espada foi colocada em um lugar escondido em universos diferentes, ele deixou em cada universo uma peça dela para que seja quase impossível de ser completa, e se algum dia as duas espadas forem completas, por duas pessoas e essas duas pessoas se encontrarem, as duas Auras seriam libertas.'
        return x
    } else if (id === 2) {
        let y = 'Um <strong>som</strong> ecua dentro do reinado das <strong>Sombras</strong>, aonde esse som não e Visto como Algo Normal, não reconhecido como algo familiar.. mais sim conhecido como uma <strong>lenda</strong> nas eras antigas.. Mais antigas do que a era da criação, um som que poucos irão <strong class="font-mono">Reconhecer</strong>..'
        return y
    }
}