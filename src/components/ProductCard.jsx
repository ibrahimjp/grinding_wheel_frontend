import React, { useState } from 'react';
import './uiVerseBtn.css';
import './buyButtonUiVerse.css';
function ProductCard({ product }) {
  const [showDialog, setShowDialog] = useState(false);

  // Product specifications data
  const specifications = [
    { size: product.size1, diameter: product.diameter1, thickness: product.thickness1, arbor: product.arbor1 },
    { size: product.size2, diameter: product.diameter2, thickness: product.thickness2, arbor: product.arbor2 },
    { size: product.size3, diameter: product.diameter3, thickness: product.thickness3, arbor: product.arbor3 }
  ];

  return (
    <div className="col-lg-4 col-md-6">
      <div className="item">
        <a href="/property-details">
          <img
            src={product.imgSrc}
            alt="Reinforced Cut Off Wheel"
          />
        </a>
        <span className="category">Reinforced cutting</span>
        <h6>$XXX</h6>
        <h4>
          <a href="/property-details">REINFORCED CUT OFF WHEEL</a>
        </h4>

        <div className="main-button flex justify-between">
          {/* Buy Button */}
          <button className="buyButtonUiVerse">Buy</button>

          {/* Show Specifications Button */}
          <button type="button" className="uiVerseBtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <p>Show cart</p>
          </button>


          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <table style={{ borderCollapse: "collapse", fontFamily: "Arial, sans-serif", textAlign: "center" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#3d2b1f", color: "white" }}>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Size</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>
                          Diameter<br /> (in MM)
                        </th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>
                          Thickness<br /> (in MM)
                        </th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>
                          Arbor Hole<br /> (in MM)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ backgroundColor: "#c6b7a5" }}>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>4"</td>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>107</td>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>1</td>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>16</td>
                      </tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>5"</td>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>125</td>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>1.5</td>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>22.23</td>
                      </tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>7"</td>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>180</td>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>1.8</td>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>22.23</td>
                      </tr>
                      <tr style={{ backgroundColor: "#c6b7a5" }}>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>14"</td>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>355</td>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>2.8</td>
                        <td style={{ padding: "10px", border: "1px solid #ccc" }}>25.4</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;