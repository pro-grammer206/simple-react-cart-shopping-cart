import { useSelector, useDispatch } from "react-redux";

import { add, remove, clearAll } from "../features/inventory/inventorySlice";
import { Link } from "react-router-dom";
import addbutton from "../img/add.svg";
import subbutton from "../img/minus.svg";
const Cart = () => {
  const { itemsInCart, amount } = useSelector((state) => state.inventory);
  const dispatch = useDispatch();

  return (
    <div className="cartpage">
      <p>{amount > 0 ? `Total Amount Rs ${amount}` : ""}</p>
      {itemsInCart.length > 0 ? (
        itemsInCart.map((item) => (
          <section className="card-cart" key={item.id}>
            <Link to={`/products/${item.id}`}>
              <img src={item.img} alt={item.name} width={32} height={32} />
            </Link>
            <div className="subcard">
              <p>{item.name}</p>
              <p>Rs {item.price * item.qty}</p>
              <div>
                <img
                  src={subbutton}
                  onClick={() => dispatch(remove(item.id))}
                  alt="subtract"
                />
                <span>Qty {item.qty}</span>
                <img
                  src={addbutton}
                  onClick={() => dispatch(add(item.id))}
                  alt="add"
                />
              </div>
            </div>
          </section>
        ))
      ) : (
        <p>No items in cart</p>
      )}
      <button onClick={() => dispatch(clearAll())} className="btn">
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
