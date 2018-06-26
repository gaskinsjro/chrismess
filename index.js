console.log('It works!');
const button = document.querySelector('button')
const updateText = function() {
  const p = document.querySelector('h1')
  p.textContent = "ChrisGiving: The Return of Chrismess"
  
}
button.addEventListener('click', updateText)

const button2 = document.querySelector('#formStuff')

const updateText2 = function(){
  const a = document.querySelector('#header2')
  a.textContent = document.querySelector("input").value
  event.preventDefault()
}
button2.addEventListener('click',updateText2)