import { Box,Button,Flex,Grid,Heading,Text,AlertDialog } from '@radix-ui/themes'
import React, { useEffect, useState } from 'react'
import { darDatos } from '../hooks/Post';
import { Get } from '../hooks/Get';
import { deleteData } from '../hooks/Delete';



const Publicar = () => {
    const productsUrl="http://localhost:3001/products/"
    const [game,setGame] = useState("");
    const [precio,setPrecio] = useState("");
    const [image,setImg] = useState("");
    const [description,setDescrip] = useState("");
    const [date,setFecha] = useState("");
    const [lista,setLista]=useState([])
    useEffect(()=>{
        
        const ListarProductos=async()=>{
            const Lista=await Get(productsUrl)
            setLista(Lista)
        }
        ListarProductos()
    },[]);
    console.log(lista)
    
    const newgames=async()=>{

        let games={
            gameName:game,
            precio:precio,
            description:description,
            fecha:date,
            img:image
        }
        await darDatos(games,productsUrl)
    };
    const deleteGame= async(id)=>{
        await deleteData(productsUrl,id)
    };
  return (
    <div>
      <Box p="4">
        <Heading>
            Publicar mi Juego
        </Heading>
        <Box maxWidth="250px">
        <form action="">
            <Text as='div' size="3" weight="regular">
            <Grid align="center" gap="2">
            <label>Nombre del juego</label>
            <input type="text" onChange={(e)=>setGame(e.target.value)}required/>
            <label>Precio</label>
            <input type="number" onChange={(e)=>setPrecio(e.target.value)} required/>
            <label>Descripcion</label>
            <input type="text" onChange={(e)=>setDescrip(e.target.value)} required/>
            <label>Fecha de Publicacion</label>
            <input type="date" onChange={(e)=>setFecha(e.target.value)} required/>
            <label>Adjuntar Imagen del juego</label>
            <input type="file" name="imagen" onChange={(e)=>setImg(e.target.value)}required/>
            
            <Button type='button' onClick={()=>newgames()}>
                publicar
            </Button>
            </Grid>
            </Text>
        </form>
        </Box>
        <Flex>
            
        <Box p="3">
        <Text>
            Juegos publicados
        </Text>
        <div>
            
        {lista.map((newgames)=>(
            <ul key={newgames.id}>
                <p>{newgames.gameName}</p>
                <img src={newgames.img}/>
                <p>El precio del producto: {newgames.precio} Colones</p>
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
