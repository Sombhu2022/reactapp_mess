import React from 'react'
import { Button, ChakraProvider } from '@chakra-ui/react'

import '../style/home.scss'

function home() {
  return (
    <ChakraProvider>

    <div  id='home'>
       <Button background={'whatsapp.700'} color={'facebook.800'} left={4}>click</Button>
       <h2>Home </h2>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, accusamus autem tenetur quia accusantium aspernatur blanditiis ullam ipsa vero laboriosam distinctio, alias error iure aliquid molestias cum quod et nam?</p>
    </div>
    </ChakraProvider>
  )
}

export default home