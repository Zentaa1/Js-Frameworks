import { useEffect, useState } from 'react';
import { fetchData } from '../functions/fetchData';
import PropTypes from 'prop-types';
import Loading from '../Loading';
import SearchBar from '../functions/SearchBar';

const StarRating = ({ rating }) => {
  return (
    <div className="flex mt-2">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < rating ? "yellow" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          className="w-5 h-5 text-yellow-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ))}
    </div>
  );
};

const ProductContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(setData, setLoading, setError);
  }, []);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  const generateProductPageLink = (item) => `/products/${item.id}`;

  return (
    <div className="container mx-auto px-4">
      <SearchBar products={data} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-secondary text-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between items-center p-4"
          >
            <img
              src={item.image.url}
              alt={item.title}
              className="h-48 w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold">{item.title}</h3>

            {item.price === item.discountedPrice ? (
                <p className="text-customOrange font-semibold mt-2">
                    ${item.discountedPrice}
                </p>
                ) : (
                <div className="flex flex-col items-center">
                    <p className="text-customOrange font-semibold mt-2">
                    ${item.discountedPrice}
                    </p>
                    <p className="line-through text-gray-400">${item.price}</p>
                </div>
                )}
            <div className="flex justify-between mt-4 w-full">
              <a className="bg-customOrange text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
              href={generateProductPageLink(item)}>
                View
              </a>
              <StarRating rating={item.rating} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;

StarRating.propTypes = {
  rating: PropTypes.node.isRequired, 
};
