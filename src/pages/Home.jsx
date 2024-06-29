import Carrusel from "../components/Carrusel"
import { ScrollArea } from "@radix-ui/themes";
const Home = ()=>{
    
    return(
        <div>
            <div className="Destacados">
                <h2>Destacados y recomendados</h2>
                <hr style={{paddingBottom:50}}/>
                <Carrusel/>
                <div>
                    <div className="listgames">
                        <h2>LIsta de juegos</h2>
                        <div >
                            <hr style={{paddingBottom:50}}/>
                            <ul >
                                <div>
                            <ScrollArea type="always" scrollbars="vertical" style={{ width:800, height: 380 }}>
                                    <h2>Elden Ring</h2>
                                    <img src="src/img/Elden ring.jpg"  width={200} height={100}/><h2>Precio: 30000 colones</h2>
                                    <h2>Elden Ring</h2>
                                    <img src="src/img/Elden ring.jpg"  width={200} height={100}/><h2>Precio: 30000 colones</h2>
                                    <h2>Elden Ring</h2>
                                    <img src="src/img/Elden ring.jpg"  width={200} height={100}/><h2>Precio: 30000 colones</h2>
                                    <h2>Elden Ring</h2>
                                    <img src="src/img/Elden ring.jpg"  width={200} height={100}/><h2>Precio: 30000 colones</h2>
                            </ScrollArea>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="newgames">
                        <h2>Juegos nuevos</h2>
                        <div >
                            <hr style={{paddingBottom:50}}/>
                            <ul >
                                <div>
                            <ScrollArea type="always" scrollbars="vertical" style={{ width:800, height: 380 }}>
                                    <h2>Elden Ring</h2>
                                    <img src="src/img/Elden ring.jpg"  width={200} height={100}/><h2>Precio: 30000 colones</h2>
                                    <h2>Elden Ring</h2>
                                    <img src="src/img/Elden ring.jpg"  width={200} height={100}/><h2>Precio: 30000 colones</h2>
                                    <h2>Elden Ring</h2>
                                    <img src="src/img/Elden ring.jpg"  width={200} height={100}/><h2>Precio: 30000 colones</h2>
                                    <h2>Elden Ring</h2>
                                    <img src="src/img/Elden ring.jpg"  width={200} height={100}/><h2>Precio: 30000 colones</h2>
                            </ScrollArea>
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