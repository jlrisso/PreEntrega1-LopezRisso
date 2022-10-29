import React, { useEffect, useState } from 'react'
import { getItems } from '../mock/products'
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';

export default function ItemListContainer({greeting}) {

  const {categoryName} = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems()
      .then(data => {
          setItems(data);
      })
      .catch( errorMessage => {
          console.error(errorMessage);
      })
  }, [categoryName]);
  

  return (
    <>
      <div>{greeting}</div> 
      <div><ItemList items={items}/></div>
    </>
  )
}
