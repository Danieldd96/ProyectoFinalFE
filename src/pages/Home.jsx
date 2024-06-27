import Carrusel from "../components/Carrusel"

import { dataGratis } from "../assets/dataGratis";
import { dataOfertas } from "../assets/dataOfertas";
import { dataDestacada } from "../assets/dataDestacada";
const Home = ()=>{
    return(
        <div>
            <div className="Destacados">
                <h2>Destacados y recomendados</h2>
                <Carrusel datos={dataDestacada} />
                
            </div>
            <div>
                <h2>Juegos en oferta</h2>
                <Carrusel datos={dataGratis} />
            </div>
            <div>
                <h2>Juegos populares</h2>
                <Carrusel datos={dataOfertas} />
            </div>
        </div>
    )
}
export default Home