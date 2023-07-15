
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Contact from './pages/contact'
import Home from './pages/home'
import About from './pages/about'
import Portfolio from './pages/portfolio'
import Counseling from './pages/counseling'
import Products from './pages/products'






let App = () => {
  return(
    <div>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/counseling' element={<Counseling />} />
        <Route path='/products' element={<Products />} />

      </Routes>
    </div> 
  )
}

export default App

