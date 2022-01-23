import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Products/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Product />
      <Cart />
    </div>
  );
}

export default App;
