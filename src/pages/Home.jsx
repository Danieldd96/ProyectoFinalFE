import Carrusel from "../components/Carrusel"
import { ScrollArea } from "@radix-ui/themes";
const Home = ()=>{
    
    return(
        <div>
            <div className="Destacados">
                <h2>Destacados y recomendados</h2>
                <hr />
                <Carrusel/>
                <div>
                    <div>
                        <h2>LIsta de juegos</h2>
                        <div>
                            <hr />
            <ScrollArea type="always" scrollbars="vertical" style={{ height: 380 }}>
                            <ul className="contenedorImgs">
                                <div>
                                    <h2>Elden Ring</h2>
                                    <img src="src/img/Elden ring.jpg"  width={200} height={100}/><h2>Precio: 30000 colones</h2>
                                    <h2>Elden Ring</h2>
                                    <img src="src/img/Elden ring.jpg"  width={200} height={100}/><h2>Precio: 30000 colones</h2>
                                    <h2>Elden Ring</h2>
                                    <img src="src/img/Elden ring.jpg"  width={200} height={100}/><h2>Precio: 30000 colones</h2>
                                    <h2>Elden Ring</h2>
                                    <img src="src/img/Elden ring.jpg"  width={200} height={100}/><h2>Precio: 30000 colones</h2>
                                </div>
                            </ul>
            </ScrollArea>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Home