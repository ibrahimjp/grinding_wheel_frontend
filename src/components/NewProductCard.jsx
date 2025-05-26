import React, { useState } from 'react';

const NewProductCard = ({ product }) => {
  const [showSpecs, setShowSpecs] = useState(false);

  const imageSrc = product.image || product.image_url || product.imgSrc || '/placeholder.jpg';

  // Extract and flatten specs_summary for dynamic rendering
  const specsEntries = product.specs_summary
    ? Object.entries(product.specs_summary).flatMap(([_, specs]) => specs)
    : [];

  return (
    <div className={`property-item ${product.category_name || ''}`}>
      <div className="property-wrap">
        <div className="property-image">
          <img
            src={imageSrc}
            alt={product.title}
            className="img-fluid product-image"
            onError={(e) => {
              e.target.src = '/placeholder.jpg'; 
            }}
          />
          <div className="property-category">
            {product.category_name || 'Uncategorized'}
          </div>
        </div>

        <div className="property-content">
          <h3 className="product-title">{product.title}</h3>

          <div className="product-price">
            {/* ₹{product.price || 'N/A'} */}
          </div>

          <div className="product-actions">
            {specsEntries.length > 0 && (
              <button
                className="btn-specs"
                onClick={() => setShowSpecs(!showSpecs)}
              >
                {showSpecs ? 'Hide Specs' : 'Show Specs'}
              </button>
            )}
          </div>

          {showSpecs && specsEntries.length > 0 && (
            <div className="product-specs table-responsive">
              <table className="specs-table">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Diameter (mm)</th>
                    <th>Thickness (mm)</th>
                  </tr>
                </thead>
                <tbody>
                  {specsEntries.map((spec, index) => (
                    <tr key={index}>
                      <td>{spec.size || '-'}</td>
                      <td>{spec.diameter || '-'}</td>
                      <td>{spec.thickness || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewProductCard;
