import logo from '../../assets/logo.png';
import persona from '../../assets/persona.png';
import carrito from '../../assets/carrito.png';
import './Header.css';


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
                    <img src={persona}/>
                    <img src={carrito}/>
                </div>
            </div>
            <nav>
                <ul>
                    <li>NUEVO Y AHORA</li>
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