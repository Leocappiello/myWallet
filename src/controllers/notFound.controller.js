import views from '../views/notFound.html'

export default () => {

    const divElements = document.createElement('div')
    divElements.className = "container-fluid"
    divElements.innerHTML = views

    return divElements
}