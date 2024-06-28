import Carrusel from "../components/Carrusel"
import { dataDestacada } from "../assets/dataDestacada";
const Home = ()=>{
    
    return(
        <div>
            <div className="Destacados">
                <h2>Destacados y recomendados</h2>
                <Carrusel datos={dataDestacada} />
                <div>
                    <div>
                        <h2>LIsta de juegos</h2>
                        <div>
                            <ul className="contenedorImgs">
                                <div>
                                    <h2>Elden Ring</h2>
                                    <img src="src/img/Elden ring.jpg"  width={200} height={100}/><h2>Precio: 30000 colones</h2>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}
export default Home