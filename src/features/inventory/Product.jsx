import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../inventory/inventorySlice";

const Product = () => {
  const items = useSelector((state) => state.inventory.items);
  const dispatch = useDispatch();
  const { id } = useParams();
  return (
    <>
      {items
        .filter((item) => item.id === parseInt(id, 10))
        .map((item) => (
          <section className="card" key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.img} alt={item.name} />
            <div>
              <button className="btn" onClick={() => dispatch(add(item.id))}>
                Buy
              </button>
              <button className="btn" onClick={() => dispatch(remove(item.id))}>
                Remove
              </button>
            </div>
            <p>Rs {item.price}</p>
            <p>{item.description}</p>
            {item.qty > 0 ? (
              <p>
                Added {item.qty} {item.qty === 1 ? "item" : "items"}
              </p>
            ) : null}
          </section>
        ))}
    </>
  );
};

export default Product;
