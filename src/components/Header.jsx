import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './preloader.css'
import Preloader from '../components/Preloader';
import './HamburgerIcon.css'

// Nav

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectMenu, setSelectMenu] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  // Check if the screen is mobile size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 991);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);


  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <div className="sub-header">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-8">
                  <ul className="info">
                    <li><i className="fa fa-envelope"></i> burhaniabron@gmail.com </li>
                    <li><i className="fa fa-map"></i>Trinoxabrasives.com</li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-4">
                  <ul className="social-links">
                    <li><a href="https://www.instagram.com/abron_trinoxabrasives?igsh=NHVyZGJhaGx4ZXF4&utm_source=qr"><i className="fab fa-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <header className="header-area header-sticky">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {!isMobile && (
                    <nav className="main-nav">
                      <NavLink to="/" className="logo">
                        <h1>Burhani&nbsp;Traders</h1>
                      </NavLink>

                      <ul className="nav">
                        <li><NavLink to="/" className={(e) => { return e.isActive ? 'active' : ''}} >Home</NavLink></li>
                        <li><NavLink to="/properties" className={(e) => { return e.isActive ? 'active' : ''}} >Products</NavLink></li>
                        <li><NavLink to="/property-details" className={(e) => { return e.isActive ? 'active' : ''}}>Catalog</NavLink></li>
                        <li><NavLink to="/contact" className={(e) => { return e.isActive ? 'active' : ''}} >Contact Us</NavLink></li>
                      </ul>
                    </nav>
                  )}
                  {isMobile && (
                    <nav>
                      <NavLink to="/">
                        <h1 className='mt-6 text-black font-bold'>Burhani&nbsp;Traders</h1>
                      </NavLink>
                      <div class="hamburger-menu ">
                        <input id="menu__toggle" type="checkbox" />
                        <label class="menu__btn mt-3" for="menu__toggle">
                          <span></span>
                        </label>

                        <ul class="menu__box">
                          <li><NavLink class="menu__item" to="/">Home</NavLink></li>
                          <li><NavLink class="menu__item" to="/properties">Products</NavLink></li>
                          <li><NavLink class="menu__item" to="/property-details">Catalog</NavLink></li>
                          <li><NavLink class="menu__item" to="/contact">Contact Us</NavLink></li>
                        </ul>
                      </div>
                    </nav>
                  )}

                </div>
              </div>
            </div>
          </header>
        </>
      )}
    </div>
  );
}

export default Header;
