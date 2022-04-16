import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  const { items } = useSelector((state) => state.inventory);

  return (
    <div>
      <h2>Products</h2>
      <div className="wall">
        {items.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id}>
            <section className="card">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Rs {item.price}</p>
              {item.qty > 0 ? <p>added {item.qty} items to cart</p> : null}
            </section>
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Products;
