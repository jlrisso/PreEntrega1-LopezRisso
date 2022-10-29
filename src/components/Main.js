import React from 'react'
import { Container } from 'react-bootstrap'
import ItemDetailContainer from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'
import {Routes, Route} from 'react-router-dom';

export default function Main() {
  return (
    <Container className='mt-5'>
        <Routes>
            <Route path='/' element={<ItemListContainer greeting='Hola Mundo!' />} />
            <Route path='/category/:categoryName' element={<ItemListContainer greeting='Hola Mundo!' />} />
            <Route path='/detail' element={<ItemDetailContainer />} />
        </Routes>
    </Container>
  )
}

