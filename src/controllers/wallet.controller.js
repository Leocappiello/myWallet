import views from '../views/wallet.html'

export default () => {

    const divElements = document.createElement('div')
    divElements.className = "container-fluid"
    divElements.innerHTML = views

    return divElements
}