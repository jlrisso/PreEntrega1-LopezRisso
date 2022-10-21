import React from 'react'
import { Container } from 'react-bootstrap'
import ItemListContainer from './ItemListContainer'

export default function Main() {
  return (
    <Container className='mt-5'>
        <ItemListContainer greeting='Bienvenidos a mi e-commerce!' />
    </Container>
  )
}
