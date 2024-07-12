import { Box,Button,Flex,Grid,Heading,Text,AlertDialog,Dialog,TextField } from '@radix-ui/themes'
import React, { useEffect, useState } from 'react'
import { darDatos } from '../hooks/Post';
import { GetByUser } from '../hooks/Get';
import { deleteData } from '../hooks/Delete';
import { actualizarJuego } from '../hooks/Put';
import ScrollButton from '../components/ScrollButton';



const Publicar = () => {
    const productsUrl="http://localhost:3001/products?userID="     ///Esta Url se usara para buscar un producto especifico en base al usuario que lo creo
    const product="http://localhost:3001/products/"                ///Esta url sera la que se usara para mandar productos y actualizarlos
    ///Estados de los productos
    const [game,setGame] = useState("");                          
    const [precio,setPrecio] = useState("");
    const [description,setDescrip] = useState("");
    const [image,setImg] = useState("");
    const [date,setFecha] = useState("");
    ///Estados generales
    const [lista,setLista]=useState([])
    ///Estados para actualizar productos
    const [namenew,setnamenew] = useState("");
    const [newprice,setnewprice] = useState("");
    const [newdescription,setnewdescription] = useState("");
    const [imgnew,setImgnew] = useState("");
    ///Funcion para obtener la lista de los productos guardados en la api
    useEffect(()=>{                       ///Este useEffect sera para renderizar la pagina al cambiar los estos puestos en el.
        const ListarProductos=async()=>{
            const Lista=await GetByUser(productsUrl,localStorage.getItem("idUsuario"))
            setLista(Lista)
        }
        ListarProductos()
    },[lista]);
    ///Funcion para crear un nuevo producto
    const newgames=async()=>{
        let games={                                   ///El let games sera el objeto que sera pasado al metodo Post el cual guardara el producto.
            gameName:game,
            precio:precio,
            description:description,
            fecha:date,
            img:imgnew,
            userID:localStorage.getItem("idUsuario")
        }
        await darDatos(games,productsUrl)
    };
    ///Funcion para borrar productos
    const deleteGame= async(id)=>{       ///En esta funcion recibiremos un parametro que obtendra el id el cual se usara para eliminar el producto en especico
        await deleteData(product,id)
    };
    ///Funcion para actualizar los datos de los productos
    const newData= async(newgame)=>{                                          ///El const newData recibira un parametro que contendra los productos
        let nuevosdatos={
            gameName:namenew?namenew:newgame.gameName,
            precio:newprice?newprice:newgame.precio,
            description:newdescription?newdescription:newgame.description,
            img:image?image:newgame.img,
            fecha:newgame.fecha
        }
        ///Al metodo Put le pasaremos los parametros "product" que es el url de la api,el parametro "newgame" se le agrega un .id para que el metodo actualice los datos
        // del producto en especifico y se le pasaria el parametro "nuevosdatos" que contendra los datos que se actualizaran 
        await actualizarJuego(product,newgame.id,nuevosdatos)
    }
    ///Esta funcion recibira un evento que transformara la imagen recibida con el FileReader y que el resultado sea manda a los estados
    function handleFileSelect(event) {
        const file = event.target.files[0]; 
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const fileContent = e.target.result;
                setImg(fileContent);
                setImgnew(fileContent);
            };
            reader.readAsDataURL(file);
        }
    }
  return (
    <div>
      <Box p="8">
        <Heading>
            Publicar mi Juego
        </Heading>
        <Box maxWidth="250px" className='formGame'>
        <form action="">
            <Text as='div' size="3" weight="regular">
                <Grid align="center" gap="2">
                    <label>Nombre del juego</label>
                    {/* Este input tiene un onchange que obtiene el valor del input cada vez que se cambie algo y lo manda al estado creado previamente */}
                    <input type="text" onChange={(e)=>setGame(e.target.value)}required/>
                    <label>Precio</label>
                    {/* Este input tiene un onchange que obtiene el valor del input cada vez que se cambie algo y lo manda al estado creado previamente */}
                    <input type="text" onChange={(e)=>setPrecio(e.target.value)} required/>
                    <label>Descripcion</label>
                    {/* Este input tiene un onchange que obtiene el valor del input cada vez que se cambie algo y lo manda al estado creado previamente */}
                    <input type="text" onChange={(e)=>setDescrip(e.target.value)} required/>
                    <label>Fecha de Publicacion</label>
                    {/* Este input tiene un onchange que obtiene el valor del input cada vez que se cambie algo y lo manda al estado creado previamente */}
                    <input type="date" onChange={(e)=>setFecha(e.target.value)} required/>
                    <label>Adjuntar Imagen del juego</label>
                    {/* Este input tiene un onchange que obtiene el valor del input cada vez que se cambie algo y lo manda al estado creado previamente */}
                    <input type="file" name="imagen" onChange={(e)=>setImg(handleFileSelect(e))}required/>
                    {/* Este Boton llamara a la funcion newgames que recibira el objeto con los datos de los inputs */}
                    <Button type='button' onClick={()=>newgames()}>
                        publicar
                    </Button>
                </Grid>
            </Text>
        </form>
        </Box>
        <Flex>
            
        <Box style={{paddingTop:'30px'}}>
        <Text size={"7"}>
            Juegos publicados
        </Text>
        <div>
        {/* Aqui lista que es el estado que contiene los productos previamente creados seran mapeados dentro de un ul para poder mostrarse en 
        la pagina que tendra como estructura etiquetas <p> con datos del producto, una de <img> que mostrara las imagenes de los productos
        y dos botones uno para actualizar y otro para eliminar */}
        {lista.map((newgames)=>(
            <ul key={newgames.id}>
                <p style={{fontSize:"28PX"}}>{newgames.gameName}</p>
                <img src={newgames.img} style={{width:"300px",height:"170px"}}/>
                <p style={{paddingTop:'20px'}}>Fecha de publicacion: <br/>{newgames.fecha}</p>
                <p>El precio del producto: <br/>{newgames.precio} Colones</p>
                <p>Descripcion: {newgames.description}</p>
                {/* Boton para editar los productos con despliegue para agregar datos */}
                <Dialog.Root>
                    <Dialog.Trigger>
                        <Button>Edit profile</Button>
                    </Dialog.Trigger>
                    <Dialog.Content maxWidth="450px">
                        <Dialog.Title>Editar datos del juego</Dialog.Title>
                            <Dialog.Description size="2" mb="4">
                            Crea cambios en los datos de tu juego
                            </Dialog.Description>
                        <Flex direction="column" gap="3">
                            {/* Este label sera el que obtendra el valor de con un onchange y sera mandado a su respectivo estado creado previamente */}
                            <label onChange={(e)=>setnamenew(e.target.value)}>   
                                <Text as="div" size="2" mb="1" weight="bold">
                                Nombre del Juego
                                </Text>
                                <TextField.Root
                                defaultValue={newgames.gameName}
                                placeholder="Ingresa el nuevo nombre del juego"
                                />
                            </label>
                            {/* Este label sera el que obtendra el valor de con un onchange y sera mandado a su respectivo estado creado previamente */}
                            <label onChange={(e)=>setnewprice(e.target.value)}>
                                <Text as="div" size="2" mb="1" weight="bold">
                                Precio del juego
                                </Text>
                                <TextField.Root
                                defaultValue={newgames.precio}
                                placeholder="Ingresar precio nuevo"
                                />
                            </label>
                            {/* Este label sera el que obtendra el valor de con un onchange y sera mandado a su respectivo estado creado previamente */}
                            <label onChange={(e)=>setnewdescription(e.target.value)}>
                                <Text as="div" size="2" mb="1" weight="bold">
                                Descripcion del juego
                                </Text>
                                <TextField.Root
                                defaultValue={newgames.description}
                                placeholder="Ingresar nueva descripcion"
                                />
                            </label>
                            {/* Este label sera el que obtendra el valor de con un onchange y sera mandado a su respectivo estado creado previamente */}
                            <label onChange={(e)=>setImgnew(handleFileSelect(e))}>
                                <Text as="div" size="2" mb="1" weight="bold">
                                Nueva imagen
                                </Text>
                                <input type="file" src="" alt="" />
                            </label>
                        </Flex>

                        <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close>
                            <Button variant="soft" color="gray">
                            Cancel
                            </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                            {/* Este boton tendra un onclick que le mandara el newgames que son los productos como parametro */}
                            <Button onClick={()=>newData(newgames)}>Save</Button>
                        </Dialog.Close>
                        </Flex>
                    </Dialog.Content>
                </Dialog.Root>
                {/* Boton para eliminar juego con confirmacion de eliminacion */}
                <AlertDialog.Root>
                    <AlertDialog.Trigger>
                        <Button color="red">Eliminar Juego</Button>
                    </AlertDialog.Trigger>
                    <AlertDialog.Content maxWidth="450px">
                        <AlertDialog.Title>Eliminar Definitivamente</AlertDialog.Title>
                        <AlertDialog.Description size="2">
                            Esta seguro de querer eliminar su cuenta?
                        </AlertDialog.Description>

                        <Flex gap="3" mt="4" justify="end">
                            <AlertDialog.Cancel>
                                <Button variant="soft" color="gray">
                                Cancel
                                </Button>
                            </AlertDialog.Cancel>
                            <AlertDialog.Action>
                                {/* Este boton con un onclick que le pasara a la funcion deleteGame un parametro que contendra el id de el objeto a eliminar */}
                                <Button variant="solid" color="red" onClick={()=>deleteGame(newgames.id)}>
                                Eliminar
                                </Button>
                            </AlertDialog.Action>
                        </Flex>
                    </AlertDialog.Content>
                </AlertDialog.Root>
            </ul>
        ))}
        </div>
        </Box>
        </Flex>
      </Box>
      <ScrollButton/>
    </div>
  )
}

export default Publicar
