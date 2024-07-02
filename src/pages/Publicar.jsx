import { Box,Button,Flex,Grid,Heading,Text,AlertDialog,Dialog,TextField } from '@radix-ui/themes'
import React, { useEffect, useState } from 'react'
import { darDatos } from '../hooks/Post';
import { GetByUser } from '../hooks/Get';
import { deleteData } from '../hooks/Delete';
import { actualizarJuego } from '../hooks/Put';



const Publicar = () => {
    const productsUrl="http://localhost:3001/products?userID="
    const product="http://localhost:3001/products/"
    const [game,setGame] = useState("");
    const [precio,setPrecio] = useState("");
    const [image,setImg] = useState("");
    const [description,setDescrip] = useState("");
    const [date,setFecha] = useState("");
    const [lista,setLista]=useState([])
    const [reload,setReload] = useState(null)
    const [reloadD,setReloadD] = useState(null)
    const [reloadDe,setReloadDe] = useState(null)

    const [namenew,setnamenew] = useState("");
    const [newprice,setnewprice] = useState("");
    const [newdescription,setnewdescription] = useState("");
    const [imgnew,setImgnew] = useState("");
    useEffect(()=>{
        
        const ListarProductos=async()=>{
            const Lista=await GetByUser(productsUrl,localStorage.getItem("idUsuario"))
            setLista(Lista)
        }
        ListarProductos()
    },[reload,reloadD,reloadDe]);
    
    const newgames=async()=>{

        let games={
            gameName:game,
            precio:precio,
            description:description,
            fecha:date,
            img:imgnew,
            userID:localStorage.getItem("idUsuario")
        }
        await darDatos(games,productsUrl)
        setReload(true)
    };
    const deleteGame= async(id)=>{
        await deleteData(product,id)
        setReloadD(true)

    };
    const newData= async(id)=>{
        let nuevosdatos={
            gameName:namenew,
            precio:newprice,
            description:newdescription,
            img:image
        }        
        await actualizarJuego(product,id,nuevosdatos)
        setReloadDe(true)
    }

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
            <input type="text" onChange={(e)=>setGame(e.target.value)}required/>
            <label>Precio</label>
            <input type="text" onChange={(e)=>setPrecio(e.target.value)} required/>
            <label>Descripcion</label>
            <input type="text" onChange={(e)=>setDescrip(e.target.value)} required/>
            <label>Fecha de Publicacion</label>
            <input type="date" onChange={(e)=>setFecha(e.target.value)} required/>
            <label>Adjuntar Imagen del juego</label>
            <input type="file" name="imagen" onChange={(e)=>setImg(handleFileSelect(e))}required/>
            
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
            
        {lista.map((newgames)=>(
            <ul key={newgames.id}>
                <p style={{fontSize:"28PX"}}>{newgames.gameName}</p>
                <img src={newgames.img} style={{width:"300px",height:"170px"}}/>
                <p style={{paddingTop:'20px'}}>Fecha de publicacion: <br/>{newgames.fecha}</p>
                <p>El precio del producto: <br/>{newgames.precio} Colones</p>
                <p>Descripcion: {newgames.description}</p>
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
                    <label onChange={(e)=>setnamenew(e.target.value)}>
                        <Text as="div" size="2" mb="1" weight="bold">
                        Nombre del Juego
                        </Text>
                        <TextField.Root
                        defaultValue={newgames.gameName}
                        placeholder="Ingresa el nuevo nombre del juego"
                        />
                    </label>
                    <label onChange={(e)=>setnewprice(e.target.value)}>
                        <Text as="div" size="2" mb="1" weight="bold">
                        Precio del juego
                        </Text>
                        <TextField.Root
                        defaultValue={newgames.precio}
                        placeholder="Ingresar precio nuevo"
                        />
                    </label>
                    <label onChange={(e)=>setnewdescription(e.target.value)}>
                        <Text as="div" size="2" mb="1" weight="bold">
                        Descripcion del juego
                        </Text>
                        <TextField.Root
                        defaultValue={newgames.description}
                        placeholder="Ingresar nueva descripcion"
                        />
                    </label>
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
                        <Button onClick={()=>newData(newgames.id)}>Save</Button>
                    </Dialog.Close>
                    </Flex>
                </Dialog.Content>
                </Dialog.Root>

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
    </div>
  )
}

export default Publicar
