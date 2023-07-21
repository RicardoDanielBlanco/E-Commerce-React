import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query'
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Categories from './screens/Categories';
import ProductDetails from './screens/ProductDetails';
import ProductCreate from './screens/ProductCreate';
import ProductEdit from './screens/ProductEdit';
import CartDetail from './screens/CartDetail';
import Products from './screens/Products';
import AuthProvider from './Context/AuthContext';
import RequireAuth from './components/RequireAuth';
import { Layout } from './components/Layout';
import Logout from './screens/Logout';

const queryClient = new QueryClient()

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Home />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/logout' element={<Logout />}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path='/categories' element={<Categories />}></Route>
              <Route path='/products' element={<Products />}></Route>
              <Route path='/products/:id' element={<ProductDetails />}></Route>
              <Route path='/products/create' element={<ProductCreate />}></Route>
              <Route path='/products/edit/:id' element={<ProductEdit />}></Route>
              <Route path='/cart-detail' element={
              <RequireAuth>
                <CartDetail />
              </RequireAuth>} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
    </>
  )
}

export default App;