class App {
  constructor() {
    const form = document.querySelector('form#flickForm')
    form.addEventListener('submit', (ev) => {
      ev.preventDefault()
      this.handleSubmit(ev)
    })
    this.flicks= []
    localStorage.setItem('flicks', JSON.stringify(flicks));
    var retrieval = JSON.parse(localStorage.getItem('flicks'));
    console.log(retrieval)
    console.log("json")
  }
    
  renderProperty(name, value) {
    const span = document.createElement('span')
    span.classList.add(name)
    span.textContent = value
    return span
  }

  renderItem(flick) {
    const item = document.createElement('li')
    item.classList.add('flick')

    // get the list of properties
    const properties = Object.keys(flick)

    // loop over the properties
    properties.forEach((propertyName) => {
      // build a span, and append it to the list
      const span = this.renderProperty(propertyName, flick[propertyName])
      item.appendChild(span)
    })
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'delete'
    item.appendChild(deleteButton)
    deleteButton.addEventListener('click', item)
    return item
  }
  removeFlick(ev){
    const item = ev.target.parentElement
    const list = item.parentElement
    list.removeChild()
  }
  handleSubmit(ev) {
    const f = ev.target
    const deleted = document.querySelector('#deleteIt')
    const flick = {
      name: f.flickName.value, 
      chris: f.chrisName.value,
    }

    const item = this.renderItem(flick)

    const list = document.querySelector('#flicks')
    list.appendChild(item)

    f.reset()
    f.flickName.focus()
    this.flicks.push(flick)
    
  }
}

const app = new App()