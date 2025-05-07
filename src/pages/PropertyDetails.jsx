import React from 'react';
import './table.css'
const AbrasiveCatalog = () => {
  return (
    
<div>
  {/* Preloader */}
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

  {/* Sub Header */}
  <div className="sub-header">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-8">
          <ul className="info">
            <li><i className="fa fa-envelope"></i> burhaniabron@gmail.com</li>
            <li><i className="fa fa-map"></i> Trinoxabrasives.com</li>
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

  {/* Header */}
  <header className="header-area header-sticky">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            <a href="index.html" className="logo">
              <h1>Trinox</h1>
            </a>
            <ul className="nav">
              <li><a href="/">Home</a></li>
              <li><a href="/properties">Products</a></li>
              <li><a href="/property-details" className="active">Catalog</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
            <a className="menu-trigger">
              <span>Menu</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </header>

  {/* Page Heading */}
  <div className="page-heading header-text">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <span className="breadcrumb"><a className='bg-yellow-300 rounded' href="#">Home</a> / Product Catalog</span>
          <h3>Trinox Abrasive Products Catalog</h3>
        </div>
      </div>
    </div>
  </div>

  {/* Main Content */}
  <div className="single-property section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading">
            <h2>Our Product Range</h2>
          </div>
        </div>
      </div>

      {/* Cut Off Wheels Section */}
      <div className="row mt-5">
        <div className="col-lg-12">
          <h4 className="mb-4">Cut Off Wheels</h4>
          
          <div className="row">
            {/* Red & Green Cut Off Wheel */}
            <div className="col-md-4 mb-4">
              <div className="product-card">
                <h5>RED & GREEN CUT OFF WHEEL</h5>
                <div className="table-responsive">
                  <table className=" table-bordered">
                    <thead>
                      <tr style={{ backgroundColor: "#3d2b1f", color: "white" }}>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Size</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Diameter (mm)</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Thickness (mm)</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Arbor Hole (mm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ backgroundColor: "#c6b7a5 "  }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>4"</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>107</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>1</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>16</td></tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>5"</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>125</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>1.5</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>22.23</td></tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>7"</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>180</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>1.8</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>22.23</td></tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>14"</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>355</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>2.8</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>25.4</td></tr>
                    </tbody>
                  </table>
                </div>
                <ul className="features-list">
                  <li>Specially designed for stainless steel cutting</li>
                  <li>Fast and smooth cutting</li>
                  <li>Very long life</li>
                </ul>
              </div>
            </div>

            {/* Green Double Net Cut Off Wheel */}
            <div className="col-md-4 mb-4">
              <div className="product-card">
                <h5>GREEN DOUBLE NET CUT OFF WHEEL</h5>
                <div className="table-responsive">
                  <table className="table-bordered">
                    <thead>
                      <tr style={{ backgroundColor: "#3d2b1f", color: "white" }}>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Size</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Diameter (mm)</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Thickness (mm)</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Arbor Hole (mm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>4"</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>107</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>1.2</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>16</td></tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>5"</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>125</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>1.5</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>22.23</td></tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>7"</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>180</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>2.0</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>22.23</td></tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>14"</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>355</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>2.8</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>25.4</td></tr>
                    </tbody>
                  </table>
                </div>
                <ul className="features-list">
                  <li>Super quality double net blade</li>
                  <li>Super safe</li>
                  <li>For general steel, hardness steel, Stainless steel and cast iron</li>
                </ul>
              </div>
            </div>

            {/* Black Double Net Cut Off Wheel */}
            <div className="col-md-4 mb-4">
              <div className="product-card">
                <h5>BLACK DOUBLE NET CUT OFF WHEEL</h5>
                <div className="table-responsive">
                  <table className=" table-bordered">
                    <thead>
                      <tr style={{ backgroundColor: "#3d2b1f", color: "white" }}>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Size</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Diameter (mm)</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Thickness (mm)</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Arbor Hole (mm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>4"</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>107</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>1.2</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>16</td></tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>5"</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>125</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>1.5</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>22.23</td></tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>7"</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>180</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>2.0</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>22.23</td></tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>14"</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>355</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>2.8</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>25.4</td></tr>
                    </tbody>
                  </table>
                </div>
                <ul className="features-list">
                  <li>Super quality double net blade</li>
                  <li>Super safe</li>
                  <li>For general steel, hardness steel, Stainless steel and cast iron</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grinding Discs Section */}
      <div className="row mt-5">
        <div className="col-lg-12">
          <h4 className="mb-4">Grinding Discs</h4>
          
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="product-card">
                <h5>GRINDING DISC</h5>
                <div className="table-responsive">
                  <table className=" table-bordered">
                    <thead>
                      <tr style={{ backgroundColor: "#3d2b1f", color: "white" }}>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Size</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Diameter (mm)</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Thickness (mm)</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Arbor Hole (mm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>4X6mm</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>100</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>6.0</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>16</td></tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>5X6mm</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>125</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>6.0</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>22.23</td></tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>7X6mm</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>180</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>6.0</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>22.23</td></tr>
                    </tbody>
                  </table>
                </div>
                <ul className="features-list">
                  <li>Made for grinding all kinds of Metals</li>
                  <li>High performance grinding in all angles</li>
                  <li>Super safe</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="product-card">
                <h5>FLEXIBLE WA GRINDING WHEEL</h5>
                <div className="table-responsive">
                  <table className=" table-bordered">
                    <thead>
                      <tr style={{ backgroundColor: "#3d2b1f", color: "white" }}>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Diameter (mm)</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Thickness (mm)</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Grit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>100</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>2.5</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>36</td></tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>100</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>2.5</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>46</td></tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>100</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>2.5</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>60</td></tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>100</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>2.5</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>80</td></tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>100</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>2.5</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>120</td></tr>
                    </tbody>
                  </table>
                </div>
                <ul className="features-list">
                  <li>Made for grinding all kinds of Metals</li>
                  <li>High performance grinding in all angles</li>
                  <li>Super safe</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flap Wheels Section */}
      <div className="row mt-5">
        <div className="col-lg-12">
          <h4 className="mb-4">Flap Wheels</h4>
          
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="product-card">
                <h5>FLAP DISC</h5>
                <div className="table-responsive">
                  <table className=" table-bordered">
                    <thead>
                      <tr style={{ backgroundColor: "#3d2b1f", color: "white" }}>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Size</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Diameter (mm)</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Arbor Hole (mm)</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Grit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>4"</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>100</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>16</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>#40</td></tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>4"</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>100</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>16</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>#60</td></tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>4"</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>100</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>16</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>#80</td></tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>4"</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>100</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>16</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>#120</td></tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>4"</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>100</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>16</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>#220</td></tr>
                    </tbody>
                  </table>
                </div>
                <ul className="features-list">
                  <li>High quality fiber glass backing</li>
                  <li>Extremely long life on stainless steel</li>
                  <li>Effectively removes welding seams and rust</li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="product-card">
                <h5>RED FLAP DISC</h5>
                <div className="table-responsive">
                  <table className=" table-bordered">
                    <thead>
                      <tr style={{ backgroundColor: "#3d2b1f", color: "white" }}>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Size</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Diameter (mm)</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Arbor Hole (mm)</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Grit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>4"</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>100</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>16</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>#60</td></tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>4"</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>100</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>16</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>#80</td></tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>4"</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>100</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>16</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>#120</td></tr>
                    </tbody>
                  </table>
                </div>
                <ul className="features-list">
                  <li>Metal backing pad for long life</li>
                  <li>Special red emery for high life</li>
                  <li>Mainly used for stainless steel and metal</li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="product-card">
                <h5>GREEN FLAP DISC</h5>
                <div className="table-responsive">
                  <table className=" table-bordered">
                    <thead>
                      <tr style={{ backgroundColor: "#3d2b1f", color: "white" }}>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Size</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Diameter (mm)</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Arbor Hole (mm)</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Grit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>4"</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>100</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>16</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>#60</td></tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>4"</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>100</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>16</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>#80</td></tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>4"</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>100</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>16</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>#120</td></tr>
                    </tbody>
                  </table>
                </div>
                <ul className="features-list">
                  <li>Metal backing pad for long life</li>
                  <li>Special green emery for great finish</li>
                  <li>Mainly used for stainless steel and metal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Diamond Tools Section */}
      <div className="row mt-5">
        <div className="col-lg-12">
          <h4 className="mb-4">Diamond Tools</h4>
          
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="product-card">
                <h5>DIAMOND CORE BITS</h5>
                <div className="table-responsive">
                  <table className=" table-bordered">
                    <thead>
                      <tr style={{ backgroundColor: "#3d2b1f", color: "white" }}>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }} colSpan="4">Available Sizes (mm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ backgroundColor: "#c6b7a5" }}>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>6.5</td>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>8.5</td>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>10</td>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>12</td>
                      </tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>14</td>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>16</td>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>20</td>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>25</td>
                      </tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>33</td>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>37</td>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>40</td>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>45</td>
                      </tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>50</td>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>57</td>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>63</td>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>75</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ul className="features-list">
                  <li>For drilling granite, marble & stone</li>
                  <li>Premium quality diamond segments</li>
                  <li>Very long life</li>
                  <li>Available in M10 & M14 threading</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="product-card">
                <h5>DIAMOND CUP WHEELS</h5>
                <div className="table-responsive">
                  <table className=" table-bordered">
                    <thead>
                      <tr style={{ backgroundColor: "#3d2b1f", color: "white" }}>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Size</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>100MM</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>Double Row</td></tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>125MM</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>Double Row</td></tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>180MM</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>Double Row</td></tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>75MM (3")</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>Gold</td></tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}><td style={{ padding: "10px", border: "1px solid #ccc" }}>100MM (4")</td><td style={{ padding: "10px", border: "1px solid #ccc" }}>Gold</td></tr>
                    </tbody>
                  </table>
                </div>
                <ul className="features-list">
                  <li>Double row design</li>
                  <li>High quality diamond segments</li>
                  <li>Very long life</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Footer */}
  <footer className="footer-no-gap">
    <div className="container">
      <div className="col-lg-12">
        <p>Copyright © {new Date().getFullYear()} Trinox Abrasives. All rights reserved.</p>
      </div>
    </div>
  </footer>
</div>
  );
};

export default AbrasiveCatalog;