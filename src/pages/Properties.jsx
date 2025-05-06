import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { products4 } from '../data/data';
import NewProductCard from '../components/NewProductCard';

function Properties() {
  const [activeFilter, setActiveFilter] = useState('*');
  const [isFiltering, setIsFiltering] = useState(false);

  const handleFilterClick = (filter) => {
    setIsFiltering(true);
    setActiveFilter(filter);
    
    // Reset the filtering state after animation completes
    setTimeout(() => {
      setIsFiltering(false);
    }, 500);
  };

  const filteredProducts = products4.filter(
    product => activeFilter === '*' || product.class === activeFilter
  );

  return (
    <div className="properties-page">
      <Header />
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="breadcrumb"><a href="#">Home</a> / Products</span>
              <h3>Trinox Abrasive Products</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="section properties">
        <div className="container">
          <ul className="properties-filter">
            <li>
              <a 
                className={activeFilter === '*' ? 'is_active' : ''} 
                href="#!" 
                onClick={(e) => {
                  e.preventDefault();
                  handleFilterClick('*');
                }}
              >
                Show All
              </a>
            </li>
            <li>
              <a 
                className={activeFilter === 'adv' ? 'is_active' : ''} 
                href="#!" 
                onClick={(e) => {
                  e.preventDefault();
                  handleFilterClick('adv');
                }}
              >
                Cutting Wheel
              </a>
            </li>
            <li>
              <a 
                className={activeFilter === 'str' ? 'is_active' : ''} 
                href="#!" 
                onClick={(e) => {
                  e.preventDefault();
                  handleFilterClick('str');
                }}
              >
                Grinding Wheel
              </a>
            </li>
            <li>
              <a 
                className={activeFilter === 'rac' ? 'is_active' : ''} 
                href="#!" 
                onClick={(e) => {
                  e.preventDefault();
                  handleFilterClick('rac');
                }}
              >
                Others
              </a>
            </li>
          </ul>
          <div className={`row properties-box ${isFiltering ? 'filtering' : ''}`}>
            {filteredProducts.map(product => (    
              <div 
                key={product.id} 
                className={`col-lg-4 col-md-6 align-self-center mb-30 properties-items ${product.class}`}
              >
                <NewProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Properties;