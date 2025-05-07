import React, { useState } from 'react';

const NewProductCard = ({ product }) => {
  const [showSpecs, setShowSpecs] = useState(false);

  return (
    <div className={`property-item ${product.class || ''}`}>
      <div className="property-wrap">
        <div className="property-image">
          <img 
            src={product.imgSrc} 
            alt={product.title} 
            className="img-fluid product-image"
          />
          <div className="property-category">
            {product.category || 'Cutting Wheel'}
          </div>
        </div>
        
        <div className="property-content">
          <h3 className="product-title">{product.title}</h3>
          {/* <div className="product-price">{product.price}</div> */}
          
          {product.features && (
            <ul className="product-features">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}
          
          <div className="product-actions">
            {/* <button className="btn-buy">Buy Now</button> */}
            {(product.specifications || product.table) && (
              <button 
                className="btn-specs" 
                onClick={() => setShowSpecs(!showSpecs)}
              >
                {showSpecs ? 'Hide Specs' : 'Show Specs'}
              </button>
            )}
          </div>
          
          {showSpecs && (product.specifications || product.table) && (
            <div className="product-specs">
              <table className="specs-table">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Diameter (mm)</th>
                    <th>Thickness (mm)</th>
                    <th>Arbor (mm)</th>
                  </tr>
                </thead>
                <tbody>
                  {(product.specifications || product.table).map((spec, index) => (
                    <tr key={index}>
                      <td>{spec.size}</td>
                      <td>{spec.diameter}</td>
                      <td>{spec.thickness}</td>
                      <td>{spec.arbor}</td>
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