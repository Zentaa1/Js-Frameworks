import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-white p-6">
      <Helmet>
        <title>ShopExtra - 404 Not Found</title>
        <meta name="description" content="Shopextra 404 - page not found"/>
      </Helmet>
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-lg mb-8">Sorry, the page you are looking for does not exist.</p>
      
      <Link to="/">
        <button className="bg-customOrange text-white py-2 px-6 rounded-md hover:bg-opacity-80 transition">
          Go to Homepage
        </button>
      </Link>

      <div className="mt-10 text-center">
        <p className="text-gray-400 text-sm">Error Code: 404 - Not Found</p>
        <p className="text-gray-400 text-sm">Please check the URL or return to the homepage.</p>
      </div>
    </div>
  );
};

export default NotFound;
