import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
const Container = styled.div``;
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/register" exact element={<Register/>}/>
          <Route path="/product" exact element={<Product/>}/>
          <Route path="/cart" exact element={<Cart/>}/>
       
        </Routes>
      </Router>
    </>
  );
}

export default App;
