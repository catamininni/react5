import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase";

//ItemListContainer define un estado y una promesa, resuelve la promesa
//luego de dos segundos, y setea el estado con los productos que devuelve
//la promesa. Despues, este mismo estado se lo pasa a ItemList
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = db.collection("items");
    itemsCollection.get().then( querySnapshot => {
      let itemsAux = []
      querySnapshot.docs.map( doc => itemsAux.push({ id: doc.id, ...doc.data() }) )
      setItems(itemsAux)
      console.log(items)
    })
  }, []);

  return (
    <section className="container ">
      <ItemList items={items} />
    </section>
  );
};

export default ItemListContainer;
