import { createRoot } from "react-dom/client";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./features/inventory/Products";
import About from "./components/About";
import Product from "./features/inventory/Product";
import Cart from "./components/Cart";
import Error from "./components/Error";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index
            element={
              <main>
                <p style={{ fontSize: "2rem", fontWeight: 900 }}>
                  Happy shopping
                </p>
              </main>
            }
          />
          <Route path="products" element={<Products />} />
          <Route path="product">
            <Route path=":id" element={<Product />} />
            <Route path="*" element={<Error />} />
          </Route>

          <Route path="/cart" element={<Cart />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
