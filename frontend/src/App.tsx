import { useState } from 'react'
import Layout from './layouts/Layout'
import { BrowserRouter } from 'react-router-dom'


const App = ()=>{
  return(
    <>
   <BrowserRouter>
      <Layout />
    </BrowserRouter>
    </>
  )
}

export default App
