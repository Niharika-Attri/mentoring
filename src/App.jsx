import { useState } from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Login_page from './pages/login_page'

function App() {

  return (
    <>
      <ChakraProvider>
        <Login_page/>
      </ChakraProvider>
    </>
  )
}

//add conditional rendering: email enters only when there is '@gmail.com' included
// if not: print 'wrong email'

//css:
// less use of margin

export default App
