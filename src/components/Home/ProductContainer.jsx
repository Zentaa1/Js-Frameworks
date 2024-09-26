import { useEffect, useState } from 'react';
import { fetchData } from '../functions/fetchData';

const ProductContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(setData, setLoading, setError);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const generateProductPageLink = (item) => `/products/${item.id}`;

  return (
    <div className="container mx-auto px-4">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
