
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About/About'
import Blogs from './Pages/Blogs/Blogs'
import Checkout from './Pages/Checkout/Checkout'
import Footer from './Pages/Footer/Footer'
import Header from './Pages/Home/Header/Header'
import Home from './Pages/Home/Home/Home'
import Login from './Pages/Login/Login'
import NotFound from './Pages/Notfound Page/NotFound'
import Register from './Pages/Register/Register'
import RequireAuth from './Pages/RequireAuth/RequireAuth'
import ShopDetails from './Pages/ShopDetails/ShopDetails'


function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path='/services/:id' element={<ShopDetails></ShopDetails>}></Route>
        <Route path="/register" element={<Register></Register>} />
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        } />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
