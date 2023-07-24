import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { ChakraProvider } from '@chakra-ui/react'

import '../style/nav.scss'

function nev() {
  return (
    <ChakraProvider>
        
    <div className='nav-div'>
        
    <ul>
        <li>
        
            <HashLink className='link' to='/#home'>Home</HashLink>
              
        </li>
        <li>
            <HashLink className='link' to='/#about'>Facilitys</HashLink>
        </li>
        <li>
            <HashLink className='link' to='/#about'>Rules</HashLink>
        </li>
        <li>
            <HashLink className='link' to='/#about'>Events</HashLink>
        </li>
        <li>
            <HashLink className='link' to='/#about'>About</HashLink>
        </li>
        <li>
            <HashLink  className='link' to='/#contact'>Contact</HashLink>
        </li>
    </ul>
</div>
    </ChakraProvider>
  )
}

export default nev