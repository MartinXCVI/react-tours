import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Products from './pages/Products'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/destinations" element={<Destinations />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
