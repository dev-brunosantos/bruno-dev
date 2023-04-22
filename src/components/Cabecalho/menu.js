const MenuPrincipal = () => {

    const menu = document.querySelectorAll('.menu');

    menu.forEach((opcao) => {
        opcao.addEventListener('click', (evento) => {
            evento.preventDefault()
            
        })
    })

    return (
        <nav className="menuPrincipal">
            <ul className="centralizar alinhar">
                <li className="menu">
                    <a href="#home">Home</a>
                </li>
                <li className="menu">
                    <a href="#sobre">Sobre</a>
                </li>
                <li className="menu">Projetos</li>
                <li className="menu">Contatos</li>
            </ul>
        </nav>
    )
}

export default MenuPrincipal