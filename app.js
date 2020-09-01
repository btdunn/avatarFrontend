const baseURL = 'http://localhost:3000/characters'

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
    $li.className = 'cardContainer'
    $img.src = object.url
    $img.alt = object.name
    if(gaang.includes(object.api_id)){
        $li.append($img)
        $containerContainer.appendChild($li)
        handleClick($li)
    }
}

function handleClick(card){
    card.addEventListener('click', bending)
}



function bending (){
    if (event.target.alt == 'Aang'){
        console.log('its aang')
    }
}



// function bending (){
//     $fan.className = 'show'
//     setTimeout(() => {$fan.className = 'invisible'}, 2000) 
// }
