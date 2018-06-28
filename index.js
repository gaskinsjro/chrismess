
const form = document.querySelector('#formStuff')



const addToListFilm = function(ev){
  ev.preventDefault()
  const flickArray = []
  const fName = ev.target
  const movieName = fName.movieName.value
  const fitem  = document.createElement('span')

  fitem.textContent = movieName

  const list = document.querySelector('#listStart')

  list.appendChild(fitem)
  const testingAdd = flickArray.push(movieName)
  
  console.log(flickArray)
  fName.reset()
  addToListYear(ev)
}
const deleteButton = function(ev){
    yes.OnClick() = function(){
      testingAdd.pop(movieName)
    }
  }
form.addEventListener('deletingButton', deleteButton)
form.addEventListener('submit',addToListFilm)

const addToListYear = function(event){
  console.log("add list to function")
  const yTime = event.target
  console.log(yTime.yearTime.value)
  const yearTime = yTime.yearTime.value

  const yItem = document.createElement('span')
  console.log(yearTime)
  yItem.textContent = yearTime
  const listing = document.querySelector('#yearInput')
  listing.appendChild(yItem)
}
