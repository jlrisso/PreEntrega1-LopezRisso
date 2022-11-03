import React, { useEffect, useState } from 'react'
import { getItems } from '../mock/products'
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';

export default function ItemListContainer() {

  const [items, setItems] = useState([]);
  
  const {categoryName} = useParams();

  useEffect(() => {
    getItems(categoryName)
      .then(data => {
          setItems(data);
      })
      .catch( errorMessage => {
          console.error(errorMessage);
      })
  }, [categoryName]);
  

  return (
    <>
      {items.length === 0 ? <h3>Loading Books...</h3> : <div><ItemList items={items}/></div>}
    </>
  )
}
