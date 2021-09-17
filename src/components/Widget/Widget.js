import { Link } from "react-router-dom";
import "./Widget.css";

function Widget() {
  return (
    <div className="icono">
      <i className="fas fa-shopping-cart"></i>
      <Link to="/cart">Carro</Link>
    </div>
  );
}

export default Widget;
