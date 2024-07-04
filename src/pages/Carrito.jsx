import React from 'react'
import { useState,useEffect } from 'react'
import { Get } from '../hooks/Get'
import { Box,Inset,Card,Strong,Text, Grid,DataList,Link,Button } from '@radix-ui/themes'

export default function Carrito() {
  const productsUrl="http://localhost:3001/users/"
    
    const [lista,setLista]=useState([])

    useEffect(()=>{
        
        const ListarProductos=async()=>{
            const Lista=await Get(productsUrl)
            setLista(Lista)
        }
        ListarProductos()
    },[]);
  
  return (
    <div>
      {lista.map((agregado)=>(
        <ul key={agregado.id}>
      <Grid>
      <div style={{padding:5, margin:100}}>
          <Box >
            <Card>
              <Inset>
                <Text size="8" ml="5"  >
                  <Strong>Finalizar Compra de : {agregado.gameName}</Strong>
                </Text>

                <Box maxWidth="500px">
                <Card size="2" ml="5" mb="5" mt="5">
                <Inset clip="padding-box" side="top" pb="current">
                  <img
                    src={agregado.img}
                    style={{
                      display: 'block',
                      objectFit: 'cover',
                      width: '100%',
                      height: 140,
                      backgroundColor: 'var(--gray-5)',
                    }}
                />
              </Inset>
              <Text as="p" size="4">
                <Strong>Descripcion:</Strong> <br />{agregado.description}
                </Text>
                <DataList.Root>
                
  
  <DataList.Item>
    <DataList.Label minWidth="88px">ID</DataList.Label>
    <DataList.Value>
      {agregado.id}
    </DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label minWidth="88px">Nombre del Juego</DataList.Label>
    <DataList.Value>{agregado.gameName}</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label minWidth="88px">Precio</DataList.Label>
    <DataList.Value>
      {agregado.precio} colones
    </DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label minWidth="88px">Company</DataList.Label>
    <DataList.Value>
      <Link target="_blank" to="/">
        STICKY GAMES
      </Link>
    </DataList.Value>
  </DataList.Item>
</DataList.Root>
<Button>Confirmar Compra</Button>
              </Card>
              
            </Box>
                </Inset>
              </Card>
            </Box>
      </div>
      </Grid>
      </ul>
      ))}
    </div>
  )
}
