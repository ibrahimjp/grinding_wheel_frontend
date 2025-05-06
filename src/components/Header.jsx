import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectMenu, setSelectMenu] = useState(0);

  return (
    <div>
      <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
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
                <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                <li><a href="https://x.com/minthu" target="_blank"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
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
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
