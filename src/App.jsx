import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {Routes, Route} from 'react-router-dom'
import Success from "./pages/Success";
import { useSelector } from "react-redux";


const App = () => {
  const user = useSelector((state)=> state.user.currentUser);
  console.log(user);
  return (
  <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<Product />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </>
  );
};

export default App;