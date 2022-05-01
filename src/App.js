import "./styles.css";
import Navbar from "./components/Navbar.jsx";
import { Home } from "./components/Home.jsx";
import {Routes, Route} from 'react-router-dom'
import  Product  from "./components/Product.jsx";
import SpecificProduct from "./components/SpecificProduct";
import Cart from "./components/Cart";
// import Product from './'
export default function App() {
  return (
    <div>
      <Navbar />
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/products/:id" element={<SpecificProduct/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}
