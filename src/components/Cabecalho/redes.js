import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsFillMoonFill } from 'react-icons/bs'
import { BsLightbulb } from 'react-icons/bs'

const CabecalhoRedes = () => {
    return (
        <div className='cabecalho-redes centralizar '>
            <a href='#'>
                <AiFillLinkedin className='redes' />
            </a>

            <a href='#'>
                <AiFillGithub className='redes' />
            </a>

            <a href='#'>
                <AiOutlineInstagram className='redes' />
            </a>

            <div className='tema'>
                <div id='noite' className='noite'>
                    <BsFillMoonFill className='redes mudar-tema' />
                </div>
                <div id='dia' className='dia'>
                    <BsLightbulb className='redes mudar-tema' />
                </div>
            </div>
        </div>
    )
}

export default CabecalhoRedes