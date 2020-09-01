$suki = document.querySelector('.suki')
$fan = document.querySelector('.invisible')
$cardContainer =  document.querySelector('cardContainer')

$suki.addEventListener('click', bending)

function bending (){
    $fan.className = 'show'
    setTimeout(() => {$fan.className = 'invisible'}, 2000) 
}
