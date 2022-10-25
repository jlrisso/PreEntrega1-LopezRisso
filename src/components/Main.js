import React from 'react'
import { Container } from 'react-bootstrap'
import ItemListContainer from './ItemListContainer'

export default function Main() {
  return (
    <Container className='mt-5'>
        <ItemListContainer greeting='Hola Mundo!' />
    </Container>
  )
}

