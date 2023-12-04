import Cuma from "../assets/cuma.png"
import Labana from "../assets/labana.png"
import Lamenta from "../assets/lamenta.png"
import Toca from "../assets/toca.png"
import "../assets/Card.css"
import { useState } from "react"


function Card(){
    const [msg, setMsg] = useState('')
    const [pizza, setPizza] = useState("")
    const [pizzaImagem, setPizzaImagem] = useState()

        const pizzaCuma = () => {
            setMsg('Seu pedido é:')
            setPizza('La Cuma')
            setPizzaImagem(Cuma)
        }

        const pizzaLabana = () => {
            setMsg('Seu pedido é:')
            setPizza('La Bana')
            setPizzaImagem(Labana)
        }

        const pizzaLamenta = () => {
            setMsg('Seu pedido é:')
            setPizza('La Menta')
            setPizzaImagem(Lamenta)
        }

        const pizzaToca = () => {
            setMsg('Seu pedido é:')
            setPizza('La Toca')
            setPizzaImagem(Toca)
        }

        const limparPizza = () => {
                setPizza('')
                setPizzaImagem()
                setMsg('')
        }


    return (
       
        <div>
            
            <main>
                <div className="functions">
                    <h2>Escolha o seu pedido</h2>
                        <h2>{msg}</h2>
                        <h3>{pizza}</h3>
                        <img src={pizzaImagem}/>
                            {pizza && pizzaImagem &&(
                                <div>
                                    <button onClick={limparPizza}>LIMPAR</button>
                                </div>
                            )}
                </div>
                    
                <h1>As mais vendidas</h1>   
                
            <section className="card-pizzas">
                             

                <div className="card">
                    <img className="imagem" src={Cuma} alt="lacuma" />

                    
                    <h4>La Cuma</h4>
                    <p>Lorem ipsum dolor sit</p>
                    <p>amet, consectetur</p>
                    <p>adipiscing elit.</p>

                    <h2 className="preco">R$ 23</h2>

                    <button onClick={pizzaCuma}>Comprar agora</button>
                </div>
                <div className="card">
                    <img className="imagem" src={Labana} alt="labana" />

                    <h4>La Bana</h4>
                    <p>Lorem ipsum dolor sit</p>
                    <p>amet, consectetur</p>
                    <p>adipiscing elit.</p>

                    <h2 className="preco">R$ 23</h2>

                    <button onClick={pizzaLabana}>Comprar agora</button>
                </div>
                <div className="card">
                    <img className="imagem" src={Lamenta} alt="lamenta" />

                    <h4>La Menta</h4>
                    <p>Lorem ipsum dolor sit</p>
                    <p>amet, consectetur</p>
                    <p>adipiscing elit.</p>

                    <h2 className="preco">R$ 23</h2>

                    <button onClick={pizzaLamenta}>Comprar agora</button>
                </div>
                <div className="card">
                    <img className="imagem" src={Toca} alt="lamenta" />

                    <h4>La Toca</h4>
                    <p>Lorem ipsum dolor sit</p>
                    <p>amet, consectetur</p>
                    <p>adipiscing elit.</p>

                    <h2 className="preco">R$ 23</h2>

                    <button onClick={pizzaToca}>Comprar agora</button>
                </div>
            </section>

            </main>
           
        </div>
    )
}

export default Card