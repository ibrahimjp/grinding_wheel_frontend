import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import FeaturedSection from '../components/FeaturedSection';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import Contact from './Contact';
import { products,products2,products3 } from '../data/data.js';
import OtherItems from '../components/OtherItems';
// CSS imports (relative path goes up one level to access assets)
import '../assets/css/animate.css';
import '../assets/css/flex-slider.css';
import '../assets/css/fontawesome.css';
import '../assets/css/owl.css';
import '../assets/css/templatemo-villa-agency.css';
// JS imports
import '../assets/js/counter.js';
import '../assets/js/custom.js';
import '../assets/js/isotope.min.js';
import '../assets/js/owl-carousel.js';
import './style.css';

function Home() {
  // Sample product data - replace with your actual data


  return (
    <div className="home-page">
      <Header />
      <Banner />
      <FeaturedSection />
      <div className="properties section">
        <div className="container">
          <div className="row">
          <div className="col-lg-4 offset-lg-4">
          <div className="section-heading text-center">
            <h6>| Properties</h6>
            <h2>We Provide The Best Grinding Wheels You Like</h2>
              </div>
            </div>
            <h2>CUT OFF WHEELS</h2>
            <div className='row'>
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
            </div>
            <h2>GRINDING DISC</h2>
            <div className='row'>
             { products2.map(product => (
              <ProductCard key={product.id} product={product} />
             ))}
            </div>
            <h2>Some Other Items</h2>
            <div className='row'>
            {products3.map(product => (
                  <OtherItems key={product.id} product={product} />
               ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;