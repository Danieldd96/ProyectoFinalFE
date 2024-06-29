import { Box,Flex,Heading, Text } from '@radix-ui/themes'
import React from 'react'
import { Get } from '../hooks/Get'


const Publicar = () => {
    const newgames=async()=>{
        let games=await Get
    }
  return (
    <div>
      <Box p="4">
        <Heading>
            Publicar mi Juego
        </Heading>
        <Flex>
        <Text>
            Nombre del juego
        </Text>
        </Flex>
        <input type="text" />
        <Flex>
        <Text>
            Precio
        </Text>
        </Flex>
        <input type="text" />
        <Flex>
        <Text>
            Imagen del juego
        </Text>
        </Flex>
        <input type="file" name="imagen"/>

      </Box>
    </div>
  )
}

export default Publicar
