import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalog from './components/Catalog/Catalog';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header />
        <div className="appWrapper__content">
          <Routes>
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter >

  );
}

export default App;
