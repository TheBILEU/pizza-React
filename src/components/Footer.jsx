import "../assets/Footer.css"
import Restaurante from "../assets/restaurante.png"
import Pizza from "../assets/pizza.png"

function Footer(){
    return (
        <div>
            <footer>
                <section>

                    <div className="imgs">
                        <img className="location" src={Restaurante} alt="" />
                        <img className="pizza" src={Pizza} alt="" />
                    </div>
                    
                    <div>
                        <h3>Sobre a La Pizza</h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Fusce quis justo sem. Donec consequat, nunc a dapibus</p>
                        <p>dapibus, justo dolor tristique tortor, sit amet tincidunt</p>
                        <p>lorem nisl at ex. Cras dolor purus, varius in euismod</p>
                        <p>pretium, finibus nec mi. Curabitur aliquam pharetra lectus in pharetra.</p>
                        <p>Nullam viverra elementum neque quis</p>
                        <p>fermentum. </p>

                        <button>Ler mais</button>
                    </div>

                    
                </section>

                <p className="rodape">TODOS OS DIREITOS RESERVADOS</p>
            </footer>
        </div>
    )
}

export default Footer
