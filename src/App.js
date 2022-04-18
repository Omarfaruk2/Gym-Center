
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About/About'
import Blogs from './Pages/Blogs/Blogs'
import Footer from './Pages/Footer/Footer'
import Header from './Pages/Home/Header/Header'
import Home from './Pages/Home/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'


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
        <Route path="/register" element={<Register></Register>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
