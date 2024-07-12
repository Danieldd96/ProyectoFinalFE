import Carrusel from "../components/Carrusel"
import { ScrollArea,AlertDialog,Button,Flex } from "@radix-ui/themes";
import { useState,useEffect } from "react";
import { Get } from "../hooks/Get";
import { useNavigate } from "react-router-dom";
import ScrollButton from "../components/ScrollButton";


const Home = ()=>{
    const navegar = useNavigate()
    const productsUrl="http://localhost:3001/products/"     ///Esta url es para obtener los productos del api 
    const [lista,setLista]=useState([])                     ///Este estado sera donde guardare los datos del api

    
    useEffect(()=>{
        const ListarProductos=async()=>{                    ///Listar productos hara que Lista espere la respuesta del Get pasandole el url del api que necesitamos
            const Lista=await Get(productsUrl)              ///cambiando el estdo y haciendo que el useState lista contenga los productos de la api
            setLista(Lista)
        }
        ListarProductos()                                   ///Y al final llamando la funcion con su respectivo useEffect para que se inicie una vez la pagina cargue
    },[]);
    const carrito= async(newgames)=>{
        localStorage.setItem("juegosCarrito",newgames)
    }
    return(
        <div className="Fondo">
            <div className="Destacados">
                <h2>Destacados y recomendados</h2>
                <hr style={{paddingBottom:50}}/>
                    <div className="carruselFondo">
                        <Carrusel/>
                    </div>
                    <div>
                    <div className="listgames">
                        <h2>Lista de juegos</h2>
                        <hr style={{paddingBottom:50}}/>
                        <div className="fondoListajuegos">
                            <ul>
                                <div className="listGamesimg" style={{padding:25}}>
                                    <ScrollArea type="always" scrollbars="vertical" style={{ width:800, height: 380 }}>
                                    <ul >
                                    <p style={{fontSize:"28PX"}}>Overwatch 2</p>
                                    <img src="src/img/Overwatch.jpeg"  width={300} height={170}/><p>Precio: <br />30000 colones</p>
                                    <AlertDialog.Root>
                                            <AlertDialog.Trigger>
                                            <Button color="red">Agregar al carrito</Button>
                                            </AlertDialog.Trigger>
                                            
                        
                                            <AlertDialog.Content maxWidth="450px">
                                            <AlertDialog.Title>Articulo agregado al carrito</AlertDialog.Title>
                                            <AlertDialog.Description size="2">
                                            Articulo agregado al carrito
                                            </AlertDialog.Description>
                        
                                        <Flex gap="3" mt="4" justify="end">
                                        <AlertDialog.Cancel>
                                            <Button variant="soft" color="gray">
                                            Continuar comprando
                                            </Button>
                                        </AlertDialog.Cancel>
                                        <AlertDialog.Action>
                                            <Button onClick={()=>{navegar('/carrito')}} variant="solid" color="red">
                                            Ir al carrito
                                            </Button>
                                        </AlertDialog.Action>
                                        </Flex>
                                        </AlertDialog.Content>
                                        </AlertDialog.Root>
                                    <p style={{fontSize:"28PX"}}>Days Gone</p>
                                    
                                    <img src="src/img/days gone.jpg"  width={300} height={170}/><p>Precio: <br />30000 colones</p>
                                    <AlertDialog.Root>
                                            <AlertDialog.Trigger>
                                            <Button color="red">Agregar al carrito</Button>
                                            </AlertDialog.Trigger>
                                            
                        
                                            <AlertDialog.Content maxWidth="450px">
                                            <AlertDialog.Title>Articulo agregado al carrito</AlertDialog.Title>
                                            <AlertDialog.Description size="2">
                                            Articulo agregado al carrito
                                            </AlertDialog.Description>
                        
                                        <Flex gap="3" mt="4" justify="end">
                                        <AlertDialog.Cancel>
                                            <Button variant="soft" color="gray">
                                            Continuar comprando
                                            </Button>
                                        </AlertDialog.Cancel>
                                        <AlertDialog.Action>
                                            <Button onClick={()=>{navegar('/carrito')}} variant="solid" color="red">
                                            Ir al carrito
                                            </Button>
                                        </AlertDialog.Action>
                                        </Flex>
                                        </AlertDialog.Content>
                                        </AlertDialog.Root>
                                    <p style={{fontSize:"28PX"}}>Honkai Star Rail</p>
                                    <img src="src/img/Honkai.jpg"  width={300} height={170}/><p>Precio: <br />30000 colones</p>
                                    <AlertDialog.Root>
                                            <AlertDialog.Trigger>
                                            <Button color="red">Agregar al carrito</Button>
                                            </AlertDialog.Trigger>
                                            
                        
                                            <AlertDialog.Content maxWidth="450px">
                                            <AlertDialog.Title>Articulo agregado al carrito</AlertDialog.Title>
                                            <AlertDialog.Description size="2">
                                            Articulo agregado al carrito
                                            </AlertDialog.Description>
                        
                                        <Flex gap="3" mt="4" justify="end">
                                        <AlertDialog.Cancel>
                                            <Button variant="soft" color="gray">
                                            Continuar comprando
                                            </Button>
                                        </AlertDialog.Cancel>
                                        <AlertDialog.Action>
                                            <Button onClick={()=>{navegar('/carrito')}} variant="solid" color="red">
                                            Ir al carrito
                                            </Button>
                                        </AlertDialog.Action>
                                        </Flex>
                                        </AlertDialog.Content>
                                        </AlertDialog.Root>
                                    <p style={{fontSize:"28PX"}}>Pubg</p>
                                    <img src="src/img/Pubg.jpg"  width={300} height={170}/><p>Precio: <br />30000 colones</p>
                                    <AlertDialog.Root>
                                            <AlertDialog.Trigger>
                                            <Button color="red">Agregar al carrito</Button>
                                            </AlertDialog.Trigger>
                                            
                        
                                            <AlertDialog.Content maxWidth="450px">
                                            <AlertDialog.Title>Articulo agregado al carrito</AlertDialog.Title>
                                            <AlertDialog.Description size="2">
                                            Articulo agregado al carrito
                                            </AlertDialog.Description>
                        
                                        <Flex gap="3" mt="4" justify="end">
                                        <AlertDialog.Cancel>
                                            <Button variant="soft" color="gray">
                                            Continuar comprando
                                            </Button>
                                        </AlertDialog.Cancel>
                                        <AlertDialog.Action>
                                            <Button onClick={()=>{navegar('/carrito')}} variant="solid" color="red">
                                            Ir al carrito
                                            </Button>
                                        </AlertDialog.Action>
                                        </Flex>
                                        </AlertDialog.Content>
                                        </AlertDialog.Root>
                                        <p style={{fontSize:"28PX"}}>Warframe</p>
                                    <img src="src/img/warframe.png"  width={300} height={170}/><p>Precio: <br />30000 colones</p>
                                    <AlertDialog.Root>
                                            <AlertDialog.Trigger>
                                            <Button color="red">Agregar al carrito</Button>
                                            </AlertDialog.Trigger>
                                            <AlertDialog.Content maxWidth="450px">
                                            <AlertDialog.Title>Articulo agregado al carrito</AlertDialog.Title>
                                            <AlertDialog.Description size="2">
                                            Articulo agregado al carrito
                                            </AlertDialog.Description>
                        
                                        <Flex gap="3" mt="4" justify="end">
                                        <AlertDialog.Cancel>
                                            <Button variant="soft" color="gray">
                                            Continuar comprando
                                            </Button>
                                        </AlertDialog.Cancel>
                                        <AlertDialog.Action>
                                            <Button onClick={()=>{navegar('/carrito')}} variant="solid" color="red">
                                            Ir al carrito
                                            </Button>
                                        </AlertDialog.Action>
                                        </Flex>
                                        </AlertDialog.Content>
                                        </AlertDialog.Root>
                                    </ul>
                                    </ScrollArea>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2>Juegos nuevos</h2>
                        <hr style={{paddingBottom:50}}/>
                            <div className="fondosNewgames">
                                <ul >   
                                    <div className="imgsNewgames" style={{padding:25}}>
                                        <ScrollArea type="always" scrollbars="vertical" style={{ width:800, height: 380 }}>
                                        {lista.map((newgames)=>(
                                            <ul key={newgames.id}>
                                                <p style={{fontSize:"28PX"}}>{newgames.gameName}</p>
                                                <img src={newgames.img} style={{width:"300px",height:"170px"}}/>
                                                <p>El precio del producto: <br/>{newgames.precio} Colones</p>
                                                <AlertDialog.Root>
                                                    <AlertDialog.Trigger>
                                                    <Button onClick={()=>carrito(newgames)} color="red">Agregar al carrito</Button>
                                                    </AlertDialog.Trigger>
                                                    <AlertDialog.Content maxWidth="450px">
                                                    <AlertDialog.Title>Articulo agregado al carrito</AlertDialog.Title>
                                                    <AlertDialog.Description size="2">
                                                    Articulo agregado al carrito
                                                    </AlertDialog.Description>
                                                <Flex gap="3" mt="4" justify="end">
                                                <AlertDialog.Cancel>
                                                    <Button variant="soft" color="gray">
                                                    Continuar comprando
                                                    </Button>
                                                </AlertDialog.Cancel>
                                                <AlertDialog.Action>
                                                    <Button onClick={()=>{navegar('/carrito')}} variant="solid" color="red">
                                                    Ir al carrito
                                                    </Button>
                                                </AlertDialog.Action>
                                                </Flex>
                                                </AlertDialog.Content>
                                                </AlertDialog.Root>
                                            </ul>
                                        ))}
                                        </ScrollArea>
                                    </div>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
            <ScrollButton/>
        </div>
    )
}
export default Home