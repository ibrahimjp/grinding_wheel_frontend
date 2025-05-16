import React, { useState } from 'react';

import './uiVerseBtn.css';
const OtherItems = ({product}) => {
    const [showDialog, setShowDialog] = useState(false);
  return (
    <div className="col-lg-4 col-md-6">
    <div className="item">
    <div class="product-card">
        <div class="product-image">
      <img src={product.imgSrc} alt={product.title} />

        </div>
        <div class="product-info">
      <h4>{product.title}</h4>
          <p class="product-description"><b>{product.category}</b></p>
        <button
          type="button"
          className="uiVerseBtn"
          data-bs-toggle="modal"
          data-bs-target={`#modal-${product.id}`}
        >
          <p>Show Details</p>
        </button>

        </div>
      </div>

      <div
        className="modal fade"
        id={`modal-${product.id}`}
        tabIndex="-1"
        aria-labelledby={`modalLabel-${product.id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`modalLabel-${product.id}`}>
                {product.title} - Specifications
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
                <h6 className='ml-6'>Features:</h6>
            <div className="modal-body">
              {product.features && (
                <>
                  <ul>
                    {product.features.map((feature, i) => (
                      <li key={i}>✅ {feature}</li>
                    ))}
                  </ul>
                </>
              )}
              {product.table && (
                <>
                  <table className="table table-bordered text-center">
                    <thead className="table-dark">
                      <tr>
                        <th>Size</th>
                        <th>Diameter (MM)</th>
                        <th>Thickness (MM)</th>
                        <th>Arbor Hole (MM)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.table.map((row, i) => (
                        <tr key={i}>
                          <td>{row.size}</td>
                          <td>{row.diameter}</td>
                          <td>{row.thickness}</td>
                          <td>{row.arbor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
              {!product.table && !product.features && (
                <p>No additional information available.</p>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default OtherItems;