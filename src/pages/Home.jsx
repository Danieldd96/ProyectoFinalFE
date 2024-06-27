import Carrusel from "../components/Carrusel"
const Home = ()=>{
    return(
        <div>
            <div className="Destacados">
                <h2>Destacados y recomendados</h2>
                <Carrusel/>
                
            </div>
            <div>
                <h2>Juegos en oferta</h2>
                <ul>
                    <li><h2></h2></li>
                    <li><h2></h2></li>
                    <li><h2></h2></li>
                    <li><h2></h2></li>
                    <li><h2></h2></li>
                    <li><h2></h2></li>
                </ul>
            </div>
            <div>
                <h2>Juegos populares</h2>
                <ul>
                    <li><h2></h2></li>
                    <li><h2></h2></li>
                    <li><h2></h2></li>
                    <li><h2></h2></li>
                    <li><h2></h2></li>
                    <li><h2></h2></li>
                </ul>
            </div>
        </div>
    )
}
export default Home