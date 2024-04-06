import './App.css';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer' 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/Furniture' element={<ShopCategory category="Furniture" />} />
          <Route path='/Wall Decor' element={<ShopCategory category="Wall Decor" />} />
          <Route path='/Marble Handicrafts' element={<ShopCategory category="Marble Handicrafts" />} />
          <Route path='/Tableware' element={<ShopCategory category="Tableware" />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
