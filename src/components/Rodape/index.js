import { AiOutlineMenu } from 'react-icons/ai'

import './rodape.css'

const Rodape = () => {

    const abrirMenu = () => {
        const menuPrincipal = document.querySelector('.menuPrincipal');

        menuPrincipal.classList.toggle('abrir-menu')
    }

    return (
        <footer className='rodape centralizar alinhar'>
            <div className='icones'>
                <AiOutlineMenu className='icones' onClick={abrirMenu} />
            </div>
        </footer>
    )
}

export default Rodape