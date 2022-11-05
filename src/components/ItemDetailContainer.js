import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { getItem } from '../mock/products'
import {useParams} from 'react-router-dom';

export default function ItemDetailContainer() {

    const [item, setItem] = useState({})

    const {bookId} = useParams();

    useEffect(() => {
        getItem(bookId)
            .then(data => {
                setItem(data);
            })
            .catch( errorMessage => {
                console.error(errorMessage);
            })
    }, [bookId]); //Aunque en este caso NO VAMOS a utilizar este cambio, lo dejamos asi
                  //para evitar el warning que tira React. Tranquilamente podemos dejarlo
                  //con los [] vacíos.

    return (
        <div><ItemDetail item = {item}/></div>
    )
}
