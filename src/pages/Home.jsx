import ProductContainer from "../components/Home/ProductContainer"
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ShopExtra - Homepage</title>
        <meta name="description" content="Welcome to shopextra, buy exclusive products for good prices!" />
      </Helmet>
      <ProductContainer />
    </div>
  )
}

export default Home