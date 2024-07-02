import { Box, Flex } from '@radix-ui/themes'
import React from 'react'

export default function Info() {
  return (
    <div >
      <div  style={{padding:30}}>
        <Flex>
        <div className='logo' style={{backgroundColor:"gray", borderRadius:20, marginRight:20, marginBottom:20}}><p style={{paddingLeft:10, paddingTop:5}}>STICKY GAMES <img src="src/img/logo.png" width={30} height={30}/></p></div>
        <div className='text-message' ><p>© 2024 STICKY GAMES Compani. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
        VAT included in all prices where applicable.</p></div>
        </Flex>
        <div className='links'>
            <Box>
            <Flex>
            <div style={{paddingRight:20}}><p>Redes sociales</p></div>
            <div><a href=''style={{textDecorationColor:"Scrollbar"}}>Whatsapp <i className='bx bxl-whatsapp bx-tada'></i></a></div>
            <div><a href='' style={{textDecorationColor:"Scrollbar"}}>Facebook <i className='bx bxl-whatsapp bx-tada'></i></a></div>
            <div><a href='' style={{textDecorationColor:"Scrollbar"}}>Instagram <i className='bx bxl-whatsapp bx-tada'></i></a></div>
            </Flex>
            </Box>
        </div>
        
      </div>
    </div>
  )
}
