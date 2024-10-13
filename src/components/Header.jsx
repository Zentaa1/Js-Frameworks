import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../components/functions/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuOnClickOutside = (event) => {
    const menu = document.getElementById('navbar-menu');
    if (menu && !menu.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const totalCartItems = cartItems.length > 0
    ? cartItems.reduce((total, item) => total + (item.quantity || 1), 0)
    : 0;

  return (
    <div className='bg-secondary text-pageText font-bold text-xl rounded-br-md mb-10'>
      <div className='container mx-auto flex justify-between items-center py-2'>
        <div>
          <Link to='/'>
            <h2 className='text-2xl'>ShopExtra</h2>
          </Link>
        </div>
        <div className='md:flex md:items-center'>
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-white focus:outline-none'>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
              </svg>
            </button>
          </div>
          <div className='flex-row hidden md:flex items-center'>
            <Link className='mx-2 hover:text-customOrange hover:underline' to='/'>Home</Link>
            <Link className='mx-2 hover:text-customOrange hover:underline' to='/contact'>Contact Us</Link>
            <Link className='mx-2 hover:text-customOrange hover:underline' to='/about'>About Us</Link>
            <Link className='mx-4 hover:text-customOrange hover:underline relative' to='/cart'>
              <FaShoppingCart />
              {totalCartItems > 0 && (
                <span className="absolute -top-3 -right-4 bg-customOrange text-white text-sm rounded-full h-5 w-5 flex items-center justify-center">
                  {totalCartItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div id='navbar-menu' className='md:hidden'>
          <div className='fixed inset-0 bg-primary bg-opacity-90 z-50 flex justify-end' onClick={closeMenuOnClickOutside}>
            <div className='bg-secondary w-64 h-full py-4 px-8'>
              <button onClick={toggleMenu} className='text-white focus:outline-none absolute top-4 right-4'>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                </svg>
              </button>
              <div className='flex flex-col items-start mt-12'>
                <Link className='my-4 hover:text-customOrange hover:underline' to='/' onClick={closeMenu}>Home</Link>
                <Link className='my-4 hover:text-customOrange hover:underline' to='/contact' onClick={closeMenu}>Contact Us</Link>
                <Link className='my-4 hover:text-customOrange hover:underline' to='/about' onClick={closeMenu}>About Us</Link>
                <Link className='my-4 hover:text-customOrange hover:underline relative' to='/cart' onClick={closeMenu}>
                  <FaShoppingCart />
                  {totalCartItems > 0 && (
                    <span className="absolute -top-3 -right-4 bg-customOrange text-white text-sm rounded-full h-5 w-5 flex items-center justify-center">
                      {totalCartItems}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
