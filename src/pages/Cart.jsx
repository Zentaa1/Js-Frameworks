import { useContext, useMemo } from "react";
import { CartContext } from "../components/functions/CartContext";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

    const totalPrice = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    }, [cartItems]);

    return (
        <div className="text-white p-4">
            <Helmet>
                <title>ShopExtra - Shopping cart</title>
                <meta name="description" content="Your cart at shopextra..."/>
            </Helmet>
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-lg">Cart is empty</p>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col sm:flex-row justify-between items-center mb-4 p-2 border-b border-gray-500"
                        >
                            <img className="h-16 w-16 object-cover mb-2 sm:mb-0" src={item.image.url} alt={item.title} />
                            <span className="text-lg sm:text-left text-center">{item.title}</span>
                            <span className="text-lg sm:text-left text-center">${item.price.toFixed(2)}</span>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="bg-customOrange text-white py-1 px-2 rounded-md hover:bg-opacity-80 transition"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="flex justify-between items-center mt-4 border-t border-gray-500 pt-4">
                        <h3 className="text-xl font-semibold">Total:</h3>
                        <span className="text-lg">${totalPrice.toFixed(2)}</span>
                    </div>
                  <div className="flex flex-col">
                    <button
                          onClick={clearCart}
                          className="bg-red-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-opacity-80 transition w-full sm:w-auto"
                      >
                          Clear Cart
                      </button>
                      <Link className="bg-customOrange text-white py-2 px-4 mt-4 rounded-md hover:bg-opacity-80 transition w-full sm:w-auto flex justify-center" to='/checkout'>
                      <button>
                          Checkout
                      </button>
                      </Link>
                  </div>
                </>
            )}
        </div>
    );
};

export default Cart;
