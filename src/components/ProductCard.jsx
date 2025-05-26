import React from 'react';
import './uiVerseBtn.css';
import './buyButtonUiVerse.css';
import './ProductCardTable.css';

function ProductCard({ product }) {
  const specRows = product?.specs_summary?.["Other Specs"] || [];

  return (
    <div className="col-lg-4 col-md-6">
      <div className="item">
        <div className="product-card">
          <div className="product-image">
            <img src={product.image_url} alt={product.title} className="product-image" />
          </div>
          <div className="product-info">
            <span className="category">{product.category_name || 'Reinforced cutting'}</span>
            <h4>{product.title || 'REINFORCED CUT OFF WHEEL'}</h4>
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

        {/* Modal */}
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
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

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
                {specRows.length > 0 && (
                  <>
                    <div className="table-responsive">
                      <table
                        
                      >
                        <thead className="table-dark">
                          <tr>
                            <th>Size</th>
                            <th>Diameter (MM)</th>
                            <th>Thickness (MM)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {specRows.map((row, index) => (
                            <tr key={index}>
                              <td>{row.size || '-'}</td>
                              <td>{row.diameter || '-'}</td>
                              <td>{row.thickness || '-'}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}

                {specRows.length === 0 && (
                  <p>No specifications available.</p>
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

export default ProductCard;
