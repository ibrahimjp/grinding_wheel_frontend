import React from 'react';

const CatalogCard = ({ products }) => {
  return (
    <div>
      {products.map((product, index) => {
        const specsKey = product.specs_summary && Object.keys(product.specs_summary)[0];
        const specs = specsKey ? product.specs_summary[specsKey] : [];

        return (
          <div key={index} className="container1">
            <div className="header1">
              <div className="logo1">Trinox<sup>®</sup></div>
              <div className="title1">{product.title || product.name}</div>
            </div>

            <div className="content1">
              <div className="image-container">
                <img
                  src={product.image_url || "/images/grinding_wheel (1).png"}
                  alt={product.name}
                />
              </div>

              <div className="info-section1">
                <div className="table-container1 table-responsive">
                  {specs.length > 0 ? (
                    <table>
                      <thead>
                        <tr>
                          {Object.keys(specs[0]).map((key) => (
                            <th key={key}><small>{key}</small></th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {specs.map((spec, idx) => (
                          <tr key={idx}>
                            {Object.values(spec).map((val, i) => (
                              <td key={i}>{val}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p>No specifications available.</p>
                  )}
                </div>

                <div className="features1">
                  <h3>Details</h3>
                  <ul>
                    <li><b>Title: </b>{product.title}</li>
                    {/* <li>Price: ${product.price}</li> */}
                    <li><b>Category: </b>{product.category_name}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CatalogCard;
