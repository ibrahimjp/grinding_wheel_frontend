import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewProductCard from '../components/NewProductCard';
import SideCol from '../components/SideCol';
import axios from 'axios';
import { products4 } from '../data/data';
function Properties() {
  const [activeFilter, setActiveFilter] = useState('*');
  const [isFiltering, setIsFiltering] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://trinoxabrasives.com/api/categories/');
        setCategories(response.data.results);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://trinoxabrasives.com/api/products/');
         console.log("Products API response:", response.data.results);
      setProducts(response.data.results); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleFilterClick = (filter) => {
    setIsFiltering(true);
    setActiveFilter(filter);

    setTimeout(() => {
      setIsFiltering(false);
    }, 500);
  };

  // Filter products based on category name
const filteredProducts = products.filter((product) => {
  return activeFilter === '*' || product.category_name === activeFilter;
});

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

            {categories.map((category) => (
              <li key={category.id}>
                <a
                  className={activeFilter === category.name ? 'is_active' : ''}
                  href="#!"
                  onClick={(e) => {
                    e.preventDefault();
                    handleFilterClick(category.name);
                  }}
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>

          <div className={`row properties-box ${isFiltering ? 'filtering' : ''}`}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="col-lg-4 col-md-6 align-self-center mb-30 properties-items"
                >
                  <NewProductCard product={product} />
                </div>
              ))
            ) : (
              <div className="col-12">
                <p>No products available.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <SideCol />
    </div>
  );
}

export default Properties;
