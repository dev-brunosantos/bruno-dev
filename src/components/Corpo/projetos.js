import { Cards } from "../Cards"

const duka = require("../../img/projetos/duka-sushi.jpg")
const teste = require("../../img/bruno-santos.png")
const teste2 = require("../../img/fundo.jpg")

export const Projetos = () => {
    return (
        <section className="projetos centralizar">
                <Cards img={duka} titulo="Restaurante Duka Sushi"/>
                <Cards img={teste} titulo="Restaurante Duka Sushi"/>
                <Cards img={teste2} titulo="Restaurante Duka Sushi"/>
                <Cards img={duka} titulo="Restaurante Duka Sushi"/>
                <Cards img={teste} titulo="Restaurante Duka Sushi"/>
                <Cards img={teste2} titulo="Restaurante Duka Sushi"/>
                <Cards img={teste} titulo="Restaurante Duka Sushi"/>
        </section>
    )
}