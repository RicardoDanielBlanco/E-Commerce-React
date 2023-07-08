import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Categories from './screens/Categories';
import Prodcuts from './screens/Products';
import ProductDetails from './screens/ProductDetails';
import ProductCreate from './screens/ProductCreate';
import ProductEdit from './screens/ProductEdit';
import CartDetail from './screens/CartDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/categories' element={<Categories />}></Route>
          <Route path='/products' element={<Prodcuts />}></Route>
          <Route path='/products/:id' element={<ProductDetails />}></Route>
          <Route path='/products/create' element={<ProductCreate />}></Route>
          <Route path='/products/edit/:id' element={<ProductEdit />}></Route>
          <Route path='/cart-detail' element={<CartDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;