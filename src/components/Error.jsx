import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main>
      <p>Page not found</p>
      <Link to="/products">Products page</Link>
    </main>
  );
};

export default Error;
