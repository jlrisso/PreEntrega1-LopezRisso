import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { getItem } from '../mock/products'
import {useParams} from 'react-router-dom';

export default function ItemDetailContainer() {

    const [item, setItem] = useState({})

    const {bookId} = useParams();

    useEffect(() => {
        getItem()
            .then(data => {
                setItem(data);
            })
            .catch( errorMessage => {
                console.error(errorMessage);
            })
    }, []);

    return (
        <div><ItemDetail {...item}/></div>
    )
}
