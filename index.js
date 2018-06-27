console.log('It works!');
const button = document.querySelector('button')
const updateText = function() {
  const p = document.querySelector('h1')
  p.textContent = "ChrisGiving: The Return of Chrismess"
  
}
button.addEventListener('click', updateText)

const button2 = document.querySelector('#formStuff')

const addToList = function(ev){
  ev.preventDefault()
  const f = ev.target
  const movieName = f.movieName.value
  const item  = document.createElement('li')
  item.textContent = movieName
  const list = document.querySelector('#listStart')
  list.appendChild(item)
  
  f.reset()
}
button2.addEventListener('click',addToList)