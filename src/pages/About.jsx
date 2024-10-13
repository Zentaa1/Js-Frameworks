import { Helmet } from "react-helmet"

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>ShopExtra - About us</title>
        <meta name="description" content="Where did shopextra start? How did it start?"/>
      </Helmet>
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-white">About ShopExtra</h1>
      <p className="mt-4 text-lg text-white">
        Your one-stop shop for all things electronics and beauty!
      </p>
    </div>
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-white mb-4">Who We Are</h2>
      <p className="text-white text-lg leading-relaxed">
        Welcome to <strong>ShopExtra</strong>, where innovation meets elegance! 
        We are dedicated to providing you with the finest quality electronics and beauty products 
        at competitive prices. Our journey started with a vision to bridge technology and beauty 
        for customers who desire both convenience and excellence in their shopping experience.
      </p>
    </section>
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
      <p className="text-white text-lg leading-relaxed">
        At <strong>ShopExtra</strong>, our mission is to empower people with products 
        that enhance their everyday life. We believe in offering high-quality electronics and beauty 
        essentials to our customers in a fast, reliable, and affordable way. With an extensive 
        range of products and exceptional customer service, we aim to be the go-to destination 
        for modern-day shopping.
      </p>
    </section>
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-white mb-4">Our Values</h2>
      <ul className="list-disc pl-6 text-white text-lg leading-relaxed">
        <li className="mb-2">
          <strong>Quality:</strong> We prioritize the quality of our products to meet and exceed customer expectations.
        </li>
        <li className="mb-2">
          <strong>Innovation:</strong> We bring you the latest in technology and beauty trends to keep you ahead of the curve.
        </li>
        <li className="mb-2">
          <strong>Customer-Centric:</strong> Your satisfaction is our top priority. We aim to provide the best shopping experience possible.
        </li>
        <li className="mb-2">
          <strong>Integrity:</strong> Transparency and honesty are at the core of everything we do.
        </li>
        <li className="mb-2">
          <strong>Sustainability:</strong> We are committed to promoting products that are environmentally friendly.
        </li>
      </ul>
    </section>
    <section className="text-center mt-12">
      <h2 className="text-2xl font-semibold text-white mb-4">Join Us Today!</h2>
      <p className="text-white text-lg leading-relaxed mb-6">
        Discover why thousands of customers choose ShopExtra for their electronics and beauty needs. 
        Shop with confidence and elevate your lifestyle with our handpicked products.
      </p>
    </section>
  </div>
  )
}

export default About