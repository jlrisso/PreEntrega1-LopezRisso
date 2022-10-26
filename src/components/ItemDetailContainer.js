import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { getItem } from '../mock/products'

export default function ItemDetailContainer() {

    const [item, setItem] = useState({})

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
