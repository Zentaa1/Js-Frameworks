import { useContext, useEffect, useState } from "react";
import { fetchData } from "../components/functions/fetchData";
import { useParams } from "react-router-dom";
import { CartContext } from "../components/functions/CartContext";
import { Helmet } from "react-helmet";
import Loading from "../components/Loading";
import NotFound from "./NotFound";

const ProductPage = () => {
  const { addToCart } =useContext(CartContext)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { productId } = useParams();


  useEffect(() => {
    fetchData(setData, setLoading, setError);
  }, []);

  const item = data.length > 0 ? data.find(item => item.id === productId) : null;

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;
  if (!item) return <NotFound />;

  return (
    <div className="container mx-auto px-4">
      <Helmet>
        <title>ShopExtra - {item.title}</title>
        <meta name="description" content={item.description}/>
      </Helmet>
      <div className="text-white flex flex-col justify-between items-center">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <img
            src={item.image.url}
            alt={item.title}
            className="h-1/2 w-1/2 object-cover rounded-lg mb-4"
          />
          <div className="flex flex-col justify-center px-7 w-2/3">
            <p className="text-3xl font-bold">{item.title}</p>
            <p className="pt-2 text-xl">{item.description}</p>
            {item.price === item.discountedPrice ? (
              <p className="text-customOrange font-semibold pt-2 text-xl">
                ${item.discountedPrice}
              </p>
            ) : (
              <div className="flex flex-row items-center pt-2 text-xl">
                <p className="text-customOrange font-semibold mr-4">
                  ${item.discountedPrice}
                </p>
                <p className="line-through text-gray-400">${item.price}</p>
              </div>
            )}
            <button
              onClick={() => addToCart(item)}
              className="bg-customOrange mt-5 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
