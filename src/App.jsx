import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Product from "./Pages/Product/Product"
import Cart from "./Pages/Cart/Cart"
import Contact from "./Pages/Contact/Contact"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Login/Register"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
