import { IoLogoHtml5 } from 'react-icons/io'
import { IoLogoCss3 } from 'react-icons/io'
import { DiJavascript } from 'react-icons/di'
import { FaBootstrap } from 'react-icons/fa'
import { FaSass } from 'react-icons/fa'
import { DiReact } from 'react-icons/di'
import { FaNode } from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'
import { TbSql } from 'react-icons/tb'

import './tecnologias.css'

export const Tecnologias = () => {
    return (
        <div className='tecnologias centralizar'>
            <h2 className='titulo'>Tecnologias Utilizadas</h2>

            <div className='tecnologias-icones centralizar'>
                <div className='tecnologias-usadas centralizar alinhar'>
                    <IoLogoHtml5 className='tecnologia' />
                    <p>HTML5</p>
                </div>

                <div className='tecnologias-usadas centralizar alinhar'>
                    <IoLogoCss3 className='tecnologia' />
                    <p>CSS3</p>
                </div>

                <div className='tecnologias-usadas centralizar alinhar'>
                    <DiJavascript className='tecnologia' />
                    <p>JavaScript</p>
                </div>

                <div className='tecnologias-usadas centralizar alinhar'>
                    <FaBootstrap className='tecnologia' />
                    <p>Bootstrap</p>
                </div>

                <div className='tecnologias-usadas centralizar alinhar'>
                    <FaSass className='tecnologia' />
                    <p>Sass</p>
                </div>

                <div className='tecnologias-usadas centralizar alinhar'>
                    <DiReact className='tecnologia' />
                    <p>React</p>
                </div>

                <div className='tecnologias-usadas centralizar alinhar'>
                    <FaNode className='tecnologia' />
                    <p>Node.JS</p>
                </div>

                <div className='tecnologias-usadas centralizar alinhar'>
                    <DiMongodb className='tecnologia' />
                    <p>Mongodb</p>
                </div>

                <div className='tecnologias-usadas centralizar alinhar'>
                    <TbSql className='tecnologia' />
                    <p>Sql</p>
                </div>
            </div>
        </div>
    )
}