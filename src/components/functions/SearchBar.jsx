import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function SearchBar({ products = [] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filterProducts = products.filter((product) =>
    product.title.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full flex items-center flex-col justify-center m-5 relative">
      <label htmlFor="search" className="w-2/4 text-md font-bold text-white mb-2">
        Looking for something?
      </label>

      <input
        autoComplete="off"
        className="bg-primary text-white border-2 border-white rounded-md p-2 w-6/12 transition duration-200 focus:outline-none focus:ring-2 focus:ring-customOrange"
        value={searchTerm}
        id="search"
        placeholder="Search for products..."
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {filterProducts.length > 0 && searchTerm.length > 0 && (
        <ul className="border rounded-lg p-2 w-6/12 absolute top-full mt-2 z-50 bg-primary shadow-lg text-lg text-white">
          {filterProducts.map((product) => (
            <li key={product.id}>
              <Link
                to={`products/${product.id}`}
                className="block p-4 hover:bg-customOrange hover:text-white transition duration-200"
              >
                {product.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

SearchBar.propTypes = {
  products: PropTypes.array.isRequired,
};

export default SearchBar;
