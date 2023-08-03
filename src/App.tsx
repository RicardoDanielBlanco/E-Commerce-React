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
import RequireNotAuth from './components/RequireNotAuth';
import RequireRole from './components/RequireRole';
import CategoriesCreate from './screens/CategoriesCreate';
import CategoriesEdit from './screens/CategoriesEdit';
import CartProvider from './Context/CartContext';

const queryClient = new QueryClient()

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<RequireNotAuth><Login /></RequireNotAuth>}/>
                <Route path='/register' element={<RequireNotAuth><Register /></RequireNotAuth>}/>
                <Route path='/logout' element={<Logout />}/>
                <Route path='/categories' element={<Categories />}/>
                <Route path='/products' element={<Products />}/>
                <Route path='/products/:id' element={<ProductDetails />}/>
                <Route path='/products/create' element={<RequireRole><ProductCreate /></RequireRole>}/>
                <Route path='/products/edit/:id' element={<RequireRole><ProductEdit /></RequireRole> }/>
                <Route path='/categories/create' element={<RequireRole><CategoriesCreate /></RequireRole>}/>
                <Route path='/categories/edit/:id' element={<RequireRole><CategoriesEdit /></RequireRole> }/>
                <Route path='/cart-detail' element={<RequireAuth><CartDetail /></RequireAuth>} />
              </Route>
            </Routes>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
    </>
  )
}

export default App;