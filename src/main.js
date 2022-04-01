import '../src/styles.css'

import {router} from './router/index.routes'

router(window.location.hash)

const init = () => {
    window.addEventListener('hashchange', (event) => {
        router(window.location.hash)
        event.preventDefault()
    })    
}

window.addEventListener("load", init)