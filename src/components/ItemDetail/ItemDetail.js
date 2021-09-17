import React, {useState} from "react";
import "./ItemDetail.css";
import Counter from "../Counter/Counter";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";


const ItemDetail = ({ item }) => {
  
  const { addItem } = useCartContext()
  const [buttonIsClicked, setButtonIsClicked] = useState(false)

  const { name, img, price, description, stock } = item

  const handleAdd = (count) => {
    addItem(item, count)
    setButtonIsClicked(true)
  }

  return (
    <div className="detail">
      <div className="titulo">
        <p className="title__item"> {name}</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <img className="./images/apple1.jpeg" src={img} />
          </div>
          <div className=" col-sm div__item div__detalle_producto ">
            <div className="div__info_producto">
              <p>
                <b>Precio </b>: $ {price}
              </p>
              <p>
                <b>Descripcion</b>:{description}
              </p>
            </div>
            <p>
              <b>Stock</b>: {stock}
            </p>
            { buttonIsClicked ? <Link to="/cart">Terminar compra</Link> : <Counter initial={1} stock={10} onAdd={handleAdd} /> }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
