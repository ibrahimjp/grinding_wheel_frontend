import React, { useEffect, useState } from 'react';
import './catalog.css';
import Preloader from '../../components/Preloader';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SideCol from '../../components/SideCol';
import MakeTheCircles from '../../components/MakeTheCircles';
import axios from 'axios';
import CatalogCard from './CatalogCard';

const AbrasiveCatalog = ({ url }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}/products/`);
      const { results } = response.data;
      setProducts(results || []);
    } catch (error) {
      console.error("Error fetching catalog data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  if (loading) return <Preloader />;

  return (
    <div>
      <Header />
      <MakeTheCircles />
      <CatalogCard products={products} />
      <Footer />
      <SideCol />
    </div>
  );
};

export default AbrasiveCatalog;
