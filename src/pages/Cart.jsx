import { useCart } from "../components/functions/cartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart([]);

  if (cart.length === 0) {
    return (
      <>
        <div className="container mx-auto p-4 text-white">
          <p>Your Cart is Empty!</p>
        </div>
      </>
    );
  }

  return (
    <div className="container mx-auto p-4 text-white">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      <ul>
        {cart.map((item) => (
          <>
            <div className="flex flex-row mb-4 p-4 bg-secondary rounded-lg shadow-md">
              <img
                className="h-32 w-auto object-cover rounded-lg"
                src={item.image.url}
                alt=""
              />
              <li key={item.id} className="mx-10">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.discountedPrice ? item.discountedPrice : item.price}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg"
                >
                  Remove from Cart
                </button>
              </li>
            </div>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
