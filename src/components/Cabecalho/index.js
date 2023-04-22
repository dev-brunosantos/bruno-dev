import './cabecalho.css'
import MenuPrincipal from './menu'

import CabecalhoRedes from './redes'

const logomarca = require('../../img/logomarca-removebg-preview.png')

const Cabecalho = () => {
    return (
        <header className="cabecalho centralizar ">
            <div className="logomarca">
                <a href='#'>
                    <img src={logomarca} ></img>
                </a>
            </div>

            <CabecalhoRedes />

            <MenuPrincipal />
        </header>
    )
}

export default Cabecalho