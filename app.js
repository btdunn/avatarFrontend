const baseURL = 'http://localhost:3000/characters'

const $earth = 'https://i.imgur.com/W4wbLm8.png'
const $fire = 'https://i.imgur.com/ozXuJ0Q.png'
const $water = 'https://i.imgur.com/PoUG5y6.png'
const $air = 'https://www.pinclipart.com/picdir/big/68-683481_tamerlane-was-a-savage-beast-in-his-soul.png'
const $boomerang = 'https://i.imgur.com/YwwjtuR.png'
const $fan = 'https://i.imgur.com/jzBSDgJ.png'

const $cardContainer = document.querySelector('.cardContainer')
const $containerContainer = document.querySelector('.containerContainer')

const gaang = [
    '5cf5679a915ecad153ab68c9',
    '5cf5679a915ecad153ab6a45',
    '5cf5679a915ecad153ab6993',
    '5cf5679a915ecad153ab6a54',
    '5cf5679a915ecad153ab6ab8',
    '5cf5679a915ecad153ab6a70',
]

fetch(baseURL)
    .then(response => response.json())
    .then(objects => getCharacters(objects))

function getCharacters(objects){
    objects.forEach(object => showCharacter(object))
}

function showCharacter(object){
    const $img = document.createElement('img')
    const $li = document.createElement('li')
    const $bending = document.createElement('img')
    $bending.className = 'invisible'
    $li.className = 'cardContainer'
    $img.src = object.url
    $img.alt = object.name
    if(gaang.includes(object.api_id)){
        $li.append($img, $bending)
        $containerContainer.appendChild($li)
        handleClick($li)
    }
}

function handleClick(card){
    card.addEventListener('click', bending)
}



function bending (){
const $bending = document.querySelector('.invisible')
    const $character = event.target.alt
    if ($character == 'Aang'){
        $bending.src = $air
        $bending.className = 'show'
    } else if ($character == 'Katara (games)'){
        $bending.src = $water
        $bending.className = 'show'
    } else if ($character == 'Sokka'){
        $bending.src = $boomerang
        $bending.className = 'show'
    } else if ($character == 'Suki'){
        $bending.src = $fan
        $bending.className = 'show'
    } else if ($character == 'Zuko (pilot)'){
        $bending.src = $fire
        $bending.className = 'show'
    } else if ($character == 'Toph Beifong'){
        $bending.src = $earth
        $bending.className = 'show'
    }
}




// function bending (){
//     $fan.className = 'show'
//     setTimeout(() => {$fan.className = 'invisible'}, 2000) 
// }
