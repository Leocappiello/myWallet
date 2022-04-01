import views from '../views/home.html'

export default () => {

    const divElements = document.createElement('div')
    divElements.className = "container-fluid"
    divElements.innerHTML = views

    return divElements
}