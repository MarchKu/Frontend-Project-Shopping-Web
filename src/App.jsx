import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import ProductDetail from './pages/ProductDetail'
import Checkout from './pages/Checkout'
import ShoppingCart from './pages/ShoppingCart'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/product_detail" element={<ProductDetail/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/ShoppingCart" element={<ShoppingCart/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
