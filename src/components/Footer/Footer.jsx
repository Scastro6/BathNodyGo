import facebook from '../../assets/facebook-icon.png';
import instagram from '../../assets/instagram-icon.png';
import visa from '../../assets/visa-icon.png';
import mastercard from '../../assets/mastercard-icon.png';


import './Footer.css';

const Footer = () => {
    return (
        <footer class="footer">

        <div class="footer-description">
            <h2>Bath & Body Works</h2>
            <p>Bath & Body Works Perú es el lugar perfecto para encontrar los mejores <a href="#">regalos</a>. Desde frescas fragancias hasta cremas humectantes, un detalle lindo para esa persona especial. Busca tu fragancia de la temporada y mientras buscas, compra nuestra mejor colección de <a href="#">lociones</a>, <a href="#">jabones para manos</a> y <a href="#">velas</a>.</p>
        </div>
    
        <div class="footer-links">
            <div class="footer-newsletter">
                <h2>¡Recibe nuestras ofertas y últimas noticias de Bath & Body Works!</h2>
                <form class="newsletter-form">
                    <label for="email">Ingresar email</label>
                    <input type="email" id="email" placeholder="Ingresar email"/>
                    
                    <label for="confirm-email">Confirmar email</label>
                    <input type="email" id="confirm-email" placeholder="Confirmar email"/>
                    
                    <button type="submit">ENVIAR</button>
                </form>
                <div class="data-acceptance">
                    <input type="checkbox" id="data-acceptance"/>
                    <label for="data-acceptance">Aceptación de datos personales</label>
                    <p>* Aplica únicamente para la primera compra. No es acumulable con promociones especiales.</p>
                </div>
                <div class="social-media">
                    <p>SÍGUENOS</p>
                    <a href="#"><img src={facebook}/></a>
                    <a href="#"><img src={instagram}/></a>
                </div>
            </div>
    
            <div>
                <h3>SERVICIO AL CLIENTE</h3>
                <ul>
                    <li><a href="#">Preguntas Frecuentes</a></li>
                    <li><a href="#">Políticas de Envíos</a></li>
                    <li><a href="#">Políticas de Pick up</a></li>
                    <li><a href="#">Devoluciones</a></li>
                    <li><a href="#">Términos y Condiciones</a></li>
                </ul>
            </div>
            <div>
                <h3>MI CUENTA</h3>
                <ul>
                    <li><a href="#">Entrar / Registro</a></li>
                    <li><a href="#">Órdenes</a></li>
                    <li><a href="#">Lista de deseos</a></li>
                </ul>
            </div>
            <div>
                <h3>BATH & BODY WORKS</h3>
                <ul>
                    <li><a href="#">Acerca de</a></li>
                    <li><a href="#">Bases y condiciones</a></li>
                    <li><a href="#">Políticas de privacidad</a></li>
                    <li><a href="#">Métodos de pago</a></li>
                </ul>
            </div>
            <div>
                <h3>CONTACTO</h3>
                <ul>
                    <li><a href="#">Contáctanos</a></li>
                    <li><a href="#">Tiendas</a></li>
                </ul>
            </div>
        </div>
    
        <div class="footer-payment">
            <p>MÉTODOS DE PAGO:</p>
            <img src={visa}/>
            <img src={mastercard}/>
        </div>

    </footer>
    )
}

export default Footer