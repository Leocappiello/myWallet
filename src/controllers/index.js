import Home from './home.controller'
import Wallet from './wallet.controller'
import Forget from './forget.controller'
import NotFound from './notFound.controller'

const pages = {
    home: Home,
    wallet: Wallet,
    forget: Forget,
    notFound: NotFound,
}

export {pages}