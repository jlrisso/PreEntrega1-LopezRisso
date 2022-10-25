import React, { useEffect, useState } from 'react'
import getItems from '../mock/products'
import ItemList from './ItemList';

export default function ItemListContainer({greeting}) {

  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems()
      .then(data => {
          setItems(data);
      })
      .catch( errorMessage => {
          console.error(errorMessage);
      })
  }, []);
  

  return (
    <>
      <div>{greeting}</div> 
      <div><ItemList items={items}/></div>
    </>
  )
}
