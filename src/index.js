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

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="products">
            <Route index element={<Products />} />
            <Route path=":id" element={<Product />} />
            <Route
              path="*"
              element={
                <main>
                  <p>Product not found</p>
                </main>
              }
            />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
