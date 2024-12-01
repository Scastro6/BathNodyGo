import promo from '../../assets/promo.webp';
import navidad from '../../assets/navidad.webp';
import velas_japo from '../../assets/velas_japo.webp';
import cuidado_corporal from '../../assets/cuidado_corporal.webp';
import velas from '../../assets/velas.webp';
import wallflowers from '../../assets/wallflowers.webp';
import jabones from '../../assets/jabones.webp';
import wellness from '../../assets/wellness.webp';
import hombres from '../../assets/hombres.webp';
import regalos from '../../assets/regalos.webp';
import img1 from '../../assets/img1.webp';
import img2 from '../../assets/img2.webp';
import img3 from '../../assets/img3.webp';
import img4 from '../../assets/img4.webp';
import regalofragante from '../../assets/regalofragante.webp';
import regalos1 from '../../assets/regalos1.webp';
import regalos2 from '../../assets/regalos2.webp';
import regalos3 from '../../assets/regalos3.webp';
import regalosgrande from '../../assets/regalosgrande.webp';

import './Aside.css';

const Aside = () => {
    return (
        <body>
        <section class="compra-online">
            <img src={promo}/>
        </section>
        <section class="promo-navidad">
            <img src={navidad}/>
        </section>
        <section class="promo-navidad-valido">
            <p>Válido del 8 al 10 noviembre del 2024.</p>
        </section>
        <section class="promo-navidad">
            <img src={velas_japo}/>
        </section>
        <section class="promo-navidad-valido">
            <p>Válido del 8 al 10 noviembre del 2024.</p>
        </section>
        

        <section class="comprar-categoria">
            <h2 class="hr-lines">COMPRAR POR CATEGORIA</h2>
            <ul>
                <li>
                    <img src={cuidado_corporal}/>
                    <p>CUIDADO CORPORAL</p>
                </li>
                <li>
                    <img src={velas}/>
                    <p>VELAS</p>
                </li>
                <li>
                    <img src={wallflowers}/>
                    <p>WALLFLOWERS</p>
                </li>
                <li>
                    <img src={jabones}/>
                    <p>JABONES</p>
                </li>
                <li>
                    <img src={wellness}/>
                    <p>WELLNESS</p>
                </li>
                <li>
                    <img src={hombres}/>
                    <p>HOMBRES</p>
                </li>
                <li>
                    <img src={regalos}/>
                    <p>REGALOS</p>
                </li>
            </ul>
        </section>
        <section class="seccion-navidad">
            <div class="fila-navidad">
                <ul>
                    <li>
                        <img src={img1}/>
                        <p>Érase una vez un hogar dulce hogar</p>
                        <button type="button">COMPRAR VELAS</button>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src={img2}/>
                        <p>No hay un lugar como The Men's Shop</p>
                        <button type="button">COMPRAR MENS</button>
                    </li>
                </ul>
            </div>
            <div class="fila-navidad">
                <ul>
                    <li>
                        <img src={img3}/>
                        <p>Deja que suene la relajación</p>
                        <button type="button">COMPRAR WELLNESS</button>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src={img4}/>
                        <p>Una historia de fragancias 24/7</p>
                        <button type="button">COMPRAR WALLFLOWERS</button>
                    </li>
                </ul>
            </div>
        </section>
        <section class="promo-navidad">
            <img src={regalofragante}/>
        </section>

        <section class="regalos-seccion">
            <div class="regalos-buttons">
                <div class="regalo-sus">
                    <button><img src={regalos1}/></button>
                </div>
                <div class="regalo-sus">
                    <button><img src={regalos2}/></button>
                </div>
                <div class="regalo-sus">
                    <button><img src={regalos3}/></button>
                </div>
            </div>
        </section>
        <section class="regalos-grande">
            <div class="guia-de-regalos">
                <img src={regalosgrande}/>
            </div>
        </section>
            
        </body>
    )
}

export default Aside