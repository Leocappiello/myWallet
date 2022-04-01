import {pages} from '../controllers/index'

const router = (route) => {
    let content = document.getElementById('main')
    content.innerHTML = ''
    switch (route) {        
        case '':{
            return content.appendChild(pages.wallet())
        }   
        case '#/':{
            return content.appendChild(pages.home())
        }
        case '#/forget':{
            return content.appendChild(pages.forget())
        }
        default:{
            return content.appendChild(pages.notFound())
        }
    }
}

export { router }