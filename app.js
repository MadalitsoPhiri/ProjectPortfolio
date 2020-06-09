
//Selectors
let showButton = document.querySelector('#profile-link');
let chevron = document.querySelector('.fa-chevron-right');


const react = function(event){
        chevron.classList.add('chevron')

}
const unreact = function(event){
    chevron.classList.remove('chevron')    
}

//Evemt handlers
//Handle button chevron animation event
showButton.onmouseover = react
showButton.onmouseleave = unreact
