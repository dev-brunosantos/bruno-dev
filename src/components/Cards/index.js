import './cards.css'

export const Cards = (props) => {
    return (
        <div className="card">
            <img src={props.img}></img>

            <div className='texto centralizar alinhar'>
                <h2 className="titulo"> {props.titulo} </h2>
                <a href={props.link} className="botao-ver">Ver Projeto</a>
            </div>


        </div>
    )
}