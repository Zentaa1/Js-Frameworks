import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../components/functions/CartContext";
import { Helmet } from "react-helmet";

const CheckoutSuccess = () => {
    const { cartItems } = useContext(CartContext);

    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-white p-4">
            <Helmet>
                <title>ShopExtra - #123456</title>
            </Helmet>
            <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
            <p className="text-lg mb-6">Your order has been successfully processed.</p>

            <div className="bg-gray-800 p-6 rounded-md shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                <div className="mb-2">
                    <span className="font-medium">Order Number:</span> 
                    <span className="text-customOrange"> #123456</span>
                </div>
                <div className="mb-2">
                    <span className="font-medium">Total Amount:</span> 
                    <span className="text-customOrange"> ${totalAmount.toFixed(2)}</span>
                </div>
                <div className="mb-4">
                    <span className="font-medium">Estimated Delivery:</span> 
                    <span className="text-customOrange"> October 20, 2024</span>
                </div>

                <h3 className="text-lg font-semibold mb-2">Items in Your Order:</h3>
                <ul className="list-disc list-inside">
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.title} - ${item.price.toFixed(2)}
                        </li>
                    ))}
                </ul>
            </div>
            <p className="mt-6 text-lg">
                You will receive an email confirmation shortly.
            </p>

            <Link to="/">
                <button className="bg-customOrange text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition mt-4">
                    Continue Shopping
                </button>
            </Link>
        </div>
    );
};

export default CheckoutSuccess;
