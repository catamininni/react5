import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import {useParams} from 'react-router-dom';
import { getFirestore } from '../../firebase';

//ItemDetailContainer recibe el id desde la URL con useParams(), crea una promesa, la resuelve
//y con el resultado de la promesa setea el estado local. Este estado se lo pasa a ItemDetail
const ItemDetailContainer = () => { 

    const [localProduct, setLocalProduct] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = db.collection("items");
        const firebaseItem = itemsCollection.doc(id)

        firebaseItem.get().then( doc => {
            if (doc.exists){
                setLocalProduct({ id: doc.id, ...doc.data() })
            }
            else alert("no existe")
        } )

    },[])

    useEffect(() => {
        console.log(localProduct)
    }, [localProduct])

    return (
        <div className='row'>
            <ItemDetail item = {localProduct} />
        </div>
      )
};

export default ItemDetailContainer;