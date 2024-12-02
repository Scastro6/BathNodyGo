import logo from '../../assets/logo.png';
import persona from '../../assets/persona.png';
import carrito from '../../assets/carrito.png';
import { Outlet, Link } from "react-router-dom";
import './Header.css';

import CarritoDeCompras from '../CarritoDeCompras/CarritoDeCompras.jsx'
import Ordenes from '../Ordenes/Ordenes.jsx'
import Modal from '../Modal/Modal.jsx'


const Header = ({ onSearch }) => {
    const handleInputChange = (e) => {
      onSearch(e.target.value); 
    };
  
    return (
        <header>
            <div class="header-container">
                <img src={logo}/>
                <div class="resto">
                    <input type="text" placeholder="Buscar" 
                     onChange={handleInputChange}/>
                    <a href='/login'><img src={persona}/></a>
                    <a href='/carrito'><img src={carrito}/></a>
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href='/nuevo'>NUEVO Y AHORA</a>
                    </li>
                    <li>CUIDADO CORPORAL</li>
                    <li>HOMBRES</li>
                    <li>JABONES & ANTIBACTERIALES</li>
                    <li>HOGAR</li>
                    <li>REGALOS</li>
                    <li>PROMOCIONES</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header