import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import CheckoutSuccess from './pages/CheckoutSuccess';
import { CartProvider } from './components/functions/CartContext.jsx';

const App = () => {
  return (
    <CartProvider>
      <div className='font-sourceSans bg-primary'>
        <Router>
          <Header />
          <div className='min-h-screen'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products/:productId" element={<ProductPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/checkoutSuccess" element={<CheckoutSuccess />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
      </CartProvider>
  );
};

export default App;
