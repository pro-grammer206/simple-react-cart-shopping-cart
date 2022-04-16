import { NavLink } from "react-router-dom";
import cartimg from "../img/cart.svg";
import { useSelector } from "react-redux";

const Nav = () => {
  const { itemsInCart } = useSelector((state) => state.inventory);
  let activeStyle = {
    boxShadow: "0 0 0.5rem 0.5rem silver",
    borderRadius: "1rem",
  };
  return (
    <nav>
      <section>
        <p>RECART</p>
      </section>
      <section>
        <NavLink
          to="/products"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Products
        </NavLink>
        <NavLink
          to="/cart"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className={itemsInCart.length > 0 ? "shake" : ""}
        >
          <div className="carticon">
            <img src={cartimg} alt="cart" id="cartimg" />
            <span>{itemsInCart.length > 0 ? itemsInCart.length : ""}</span>
          </div>
        </NavLink>
      </section>
    </nav>
  );
};

export default Nav;
