import Products from "./features/inventory/Products";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
