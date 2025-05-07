import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './preloader.css'
import Preloader from '../components/Preloader';
import './HamburgerIcon.css'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectMenu, setSelectMenu] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div>
      <Preloader />
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
                <a href="/" className="logo">
                  <h1>Burhani&nbsp;Traders</h1>
                </a>

                  <ul className="nav">
                    <li><a href="/" className={selectMenu === 0 ? 'active' : ''} onClick={() => setSelectMenu(0)}>Home</a></li>
                    <li><a href="/properties" className={selectMenu === 1 ? 'active' : ''} onClick={() => setSelectMenu(1)}>Products</a></li>
                    <li><a href="/property-details" className={selectMenu === 2 ? 'active' : ''} onClick={() => setSelectMenu(2)}>Catalog</a></li>
                    <li><a href="/contact" className={selectMenu === 3 ? 'active' : ''} onClick={() => setSelectMenu(3)}>Contact Us</a></li>
                  </ul>
                </nav>
                )}
                {isMobile && (
                  <nav>
                   <a href="/">
                  <h1 className='mt-6'>Burhani&nbsp;Traders</h1>
                </a>
                  <div class="hamburger-menu ">
                    <input id="menu__toggle" type="checkbox" />
                    <label class="menu__btn mt-3" for="menu__toggle">
                      <span></span>
                    </label>

                    <ul class="menu__box">
                      <li><a class="menu__item" href="/">Home</a></li>
                      <li><a class="menu__item" href="/properties">Products</a></li>
                      <li><a class="menu__item" href="/property-details">Catalog</a></li>
                      <li><a class="menu__item" href="/contact">Contact Us</a></li>
                    </ul>
                  </div>
                  </nav>
                )}
             
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
