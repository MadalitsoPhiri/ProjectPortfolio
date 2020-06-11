
//Selectors
let showButton = document.querySelector('#profile-link');
let chevron = document.querySelector('.fa-chevron-right');
let todo = document.querySelector('#todo')
let survey = document.querySelector('#survey')
let ecom = document.querySelector('#ecom')
let rt = document.querySelector('#react')
let js = document.querySelector('#javascript')
let nouned = document.querySelector('#nouned')




const react = function(event){
        chevron.classList.add('chevron')

}
const unreact = function(event){
    chevron.classList.remove('chevron')    
}

const appear = function(event){
      let child = event.target.childNodes
       child[0].style.visibility = 'visible'
       child[2].style.visibility = 'visible'
       
}
const disappear = function(event){
    let child = event.target.childNodes
    child[0].style.visibility = 'hidden'
    child[2].style.visibility = 'hidden'
}
//Event handlers
//Handle button chevron animation event
showButton.onmouseover = react
showButton.onmouseleave = unreact
todo.onmouseover = appear
todo.onmouseleave = disappear
ecom.onmouseover = appear
ecom.onmouseleave = disappear
js.onmouseover = appear
js.onmouseleave = disappear
nouned.onmouseover = appear
nouned.onmouseleave = disappear
rt.onmouseover = appear
rt.onmouseleave = disappear
survey.onmouseover = appear
survey.onmouseleave = disappear

