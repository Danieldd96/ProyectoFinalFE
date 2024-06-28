import React from 'react'
import { Flex, DataList,Badge,Code,IconButton,Box,Heading,Text  } from '@radix-ui/themes';
import { Link } from '@radix-ui/themes';
const Contact = () => {
  return (
    <div>
    
  <Box p="7" pr="8">
    <Heading size="6" mb="2" trim="start">
      Que es STICKY GAMES
    </Heading>
    <Flex direction="column" gap="4">
      <Text as="p">
        Es una pagina por y para gamers en el cual encontraras juegos de la mas alta calidad a un muy buen
        precio comparables a las mejores tiendas de la actualidad.
        
      </Text>

      <Text as="p">
      Tambien si quieres que las personas compren un juego diseñado por ti aqui puedes publicar el juego
      que entrara al catalogo de nuestra pagina para que asi generes beneficios de tu creacion.
      </Text>

      <DataList.Root>
        <DataList.Item align="center">
                    
            <DataList.Value>
                <Badge color="jade" variant="soft" radius="full" >
                    Informacion de contacto
                </Badge>
                </DataList.Value>
                </DataList.Item>
                
                    <DataList.Label minWidth="100px">Numeros de Contacto</DataList.Label>
                <DataList.Item>
                    <DataList.Value>
                    <Link href="">70407668</Link>
                    </DataList.Value>
                    <DataList.Value>
                    <Link href="">70407668</Link>
                    </DataList.Value>
                    <DataList.Value>
                    <Link href="">70407668</Link>
                    </DataList.Value>
                    <DataList.Value>
                    <Link href="">70407668</Link>
                    </DataList.Value>
                </DataList.Item>
                    
                        <DataList.Label minWidth="88px">Email</DataList.Label>
                    <DataList.Item>
                        <DataList.Value>
                        <Link href="">correo1</Link>
                        </DataList.Value>
                        <DataList.Value>
                        <Link href="">correo2</Link>
                        </DataList.Value>
                        <DataList.Value>
                        <Link href="}">correo3</Link>
                        </DataList.Value>
                    </DataList.Item>
        </DataList.Root>
    </Flex>
  </Box>

    </div>
  )
}

export default Contact
