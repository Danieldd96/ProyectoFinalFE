import Carrusel from "../components/Carrusel"
import { ScrollArea,AlertDialog,Button,Flex } from "@radix-ui/themes";
import { useState,useEffect } from "react";
import { Get } from "../hooks/Get";
const Home = ()=>{
    const productsUrl="http://localhost:3001/products/"
    
    const [lista,setLista]=useState([])

    useEffect(()=>{
        
        const ListarProductos=async()=>{
            const Lista=await Get(productsUrl)
            setLista(Lista)
        }
        ListarProductos()
    },[]);
    console.log(lista)
    return(
        <div>
            <div className="Destacados">
                <h2>Destacados y recomendados</h2>
                <hr style={{paddingBottom:50}}/>
                <Carrusel/>
                <div>
                    <div className="listgames">
                        <h2>Lista de juegos</h2>
                        <div >
                            <hr style={{paddingBottom:50}}/>
                            <ul >
                                
                            <ScrollArea type="always" scrollbars="vertical" style={{ width:800, height: 380 }}>
                                <div>
                                    <ul>
                                    <p style={{fontSize:"28PX"}}>Overwatch 2</p>
                                    <img src="src/img/Overwatch.jpeg"  width={300} height={170}/><p>Precio: <br />30000 colones</p>
                                    <AlertDialog.Root>
                                            <AlertDialog.Trigger>
                                            <Button color="red">Agregar al carrito</Button>
                                            </AlertDialog.Trigger>
                                            
                        
                                            <AlertDialog.Content maxWidth="450px">
                                            <AlertDialog.Title>Articulo agregado al carrito</AlertDialog.Title>
                                            <AlertDialog.Description size="2">
                                            Esta seguro de querer eliminar su cuenta?
                                            </AlertDialog.Description>
                        
                                        <Flex gap="3" mt="4" justify="end">
                                        <AlertDialog.Cancel>
                                            <Button variant="soft" color="gray">
                                            Continuar comprando
                                            </Button>
                                        </AlertDialog.Cancel>
                                        <AlertDialog.Action>
                                            <Button variant="solid" color="red">
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
                                            Esta seguro de querer eliminar su cuenta?
                                            </AlertDialog.Description>
                        
                                        <Flex gap="3" mt="4" justify="end">
                                        <AlertDialog.Cancel>
                                            <Button variant="soft" color="gray">
                                            Continuar comprando
                                            </Button>
                                        </AlertDialog.Cancel>
                                        <AlertDialog.Action>
                                            <Button variant="solid" color="red">
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
                                            Esta seguro de querer eliminar su cuenta?
                                            </AlertDialog.Description>
                        
                                        <Flex gap="3" mt="4" justify="end">
                                        <AlertDialog.Cancel>
                                            <Button variant="soft" color="gray">
                                            Continuar comprando
                                            </Button>
                                        </AlertDialog.Cancel>
                                        <AlertDialog.Action>
                                            <Button variant="solid" color="red">
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
                                            Esta seguro de querer eliminar su cuenta?
                                            </AlertDialog.Description>
                        
                                        <Flex gap="3" mt="4" justify="end">
                                        <AlertDialog.Cancel>
                                            <Button variant="soft" color="gray">
                                            Continuar comprando
                                            </Button>
                                        </AlertDialog.Cancel>
                                        <AlertDialog.Action>
                                            <Button variant="solid" color="red">
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
                                            Esta seguro de querer eliminar su cuenta?
                                            </AlertDialog.Description>
                        
                                        <Flex gap="3" mt="4" justify="end">
                                        <AlertDialog.Cancel>
                                            <Button variant="soft" color="gray">
                                            Continuar comprando
                                            </Button>
                                        </AlertDialog.Cancel>
                                        <AlertDialog.Action>
                                            <Button variant="solid" color="red">
                                            Ir al carrito
                                            </Button>
                                        </AlertDialog.Action>
                                        </Flex>
                                        </AlertDialog.Content>
                                        </AlertDialog.Root>
                                    </ul>
                                </div>
                            </ScrollArea>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="newgames">
                        <h2>Juegos nuevos</h2>
                        <div >
                            <hr style={{paddingBottom:50}}/>
                            <ul >
                                
                            <ScrollArea type="always" scrollbars="vertical" style={{ width:800, height: 380 }}>
                            <div>
            
                                {lista.map((newgames)=>(
                                    <ul key={newgames.id}>
                                        <p style={{fontSize:"28PX"}}>{newgames.gameName}</p>
                                        <img src={newgames.img} style={{width:"300px",height:"170px"}}/>
                                        <p>El precio del producto: <br/>{newgames.precio} Colones</p>
                                        <AlertDialog.Root>
                                            <AlertDialog.Trigger>
                                            <Button color="red">Agregar al carrito</Button>
                                            </AlertDialog.Trigger>
                                            
                        
                                            <AlertDialog.Content maxWidth="450px">
                                            <AlertDialog.Title>Articulo agregado al carrito</AlertDialog.Title>
                                            <AlertDialog.Description size="2">
                                            Esta seguro de querer eliminar su cuenta?
                                            </AlertDialog.Description>
                        
                                        <Flex gap="3" mt="4" justify="end">
                                        <AlertDialog.Cancel>
                                            <Button variant="soft" color="gray">
                                            Continuar comprando
                                            </Button>
                                        </AlertDialog.Cancel>
                                        <AlertDialog.Action>
                                            <Button variant="solid" color="red">
                                            Ir al carrito
                                            </Button>
                                        </AlertDialog.Action>
                                        </Flex>
                                        </AlertDialog.Content>
                                        </AlertDialog.Root>
                                        
                                    </ul>
                                ))}
                            </div>
                            </ScrollArea>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Home