import { useContext } from "react";
import { CartContext } from "../components/functions/CartContext";
import PaymentInfo from "../components/PaymentInfo";
import ShippingDetails from "../components/ShippingInfo";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Checkout = () => {
    const { cartItems, totalPrice } = useContext(CartContext);

    return (
        <div className="text-white p-4">
            <Helmet>
                <title>ShopExtra - Order #123456</title>
            </Helmet>
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            {cartItems.length === 0 ? (
                <p className="text-lg">Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-center mb-4">
                            <span className="text-lg">{item.title}</span>
                            <span className="text-lg">${item.price.toFixed(2)}</span>
                        </div>
                    ))}
                    <div className="mt-4 flex justify-between items-center border-t border-gray-500 pt-4">
                        <h3 className="text-xl font-semibold">Total:</h3>
                        <span className="text-lg">${totalPrice.toFixed(2)}</span>
                    </div>
                    <ShippingDetails />
                    <PaymentInfo />
                    <Link to='/checkoutSuccess'>
                      <button className="bg-customOrange text-white py-2 px-4 mt-4 rounded-md hover:bg-opacity-80 transition w-full sm:w-auto">
                        Confirm Purchase
                      </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Checkout;
