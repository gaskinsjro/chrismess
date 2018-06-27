console.log('It works!');
const button = document.querySelector('button')
const updateText = function() {
  const p = document.querySelector('h1')
  p.textContent = "ChrisGiving: The Return of Chrismess"
  
}
button.addEventListener('click', updateText)

const button2 = document.querySelector('#formStuff')

const addToListFilm = function(ev){
  ev.preventDefault()
  const fName = ev.target
  const movieName = fName.movieName.value
  const fitem  = document.createElement('li')
  fitem.textContent = movieName
  const list = document.querySelector('#listStart')
  list.appendChild(fitem)
  fName.reset()
}

button2.addEventListener('submit',addToListFilm)

const addToListYear = function(event){
  event.preventDefault()
  const yTime = event.target
  const yearTime = yTime.yearTime.value
  const yItem = document.createElement('li')
  yItem.textContent = yearTime
  const listing = document.querySelector('#yearInput')
  listing.appendChild(yItem)
  yTime.reset()
}
button2.addEventListener('submit',addToListYear)