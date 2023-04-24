import { Tecnologias } from '../Tecnologias'

const fotoBruno = require('../../img/bruno-santos.png')

const Sobre = () => {
    return (
        <section id="sobre" className="sobre">
            <div className="resumo centralizar alinhar">
                <div className="resumo-img">
                    <img src={fotoBruno}></img>
                </div>

                <div className='resumo-texto'>
                    <p>Olá! Eu sou o Bruno Santos. Sou desenvolvedor Full Stack.</p>
                    <p>
                        Sempre tive curiosidade em saber como sites, jogos e sisemas eram criados e
                        esse curiosidade foi com que eu buscasse informações sobre a área de desenvolvimento.
                        <br />
                        Comecei a realizar uma pesquisa e encontrei muitos conteudos sobres programação.
                    </p>
                </div>

                <Tecnologias />
            </div>
        </section>
    )
}

export default Sobre