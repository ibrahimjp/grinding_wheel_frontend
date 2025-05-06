import React, { useState } from 'react';
const FeaturedSection = () => {
  // State for accordion items
  const [activeAccordion, setActiveAccordion] = useState('collapseOne');

  const toggleAccordion = (accordionId) => {
    setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
  };

  // Info table items data
  const infoItems = [
    {
      id: 1,
      imgSrc: "/images/grinding_wheel (1).png",
      title: "100 mm - 350 mm",
      description: "Available in all popular sizes"
    },
    {
      id: 2,
      imgSrc: "/images/info-icon-02.png",
      title: "Instant Quotes",
      description: "Get custom bulk price offers."
    },
    {
      id: 3,
      imgSrc: "/images/info-icon-03.png",
      title: "Easy Payments",
      description: "UPI, Card, Netbanking accepted"
    },
    {
      id: 4,
      imgSrc: "/images/info-icon-04.png",
      title: "ISO Certified",
      description: "Tested for performance & safety."
    }
  ];

  // Accordion items data
  const accordionItems = [
    {
      id: 'collapseOne',
      headerId: 'headingOne',
      title: 'Best useful links ?',
      content: 'Get the best industrial tools & grinding wheels for your needs. Browse our premium-quality, affordable products.'
    },
    {
      id: 'collapseTwo',
      headerId: 'headingTwo',
      title: 'How does this work ?',
      content: 'Choose a product → Add to cart → Fast delivery to your factory/workshop.'
    },
    {
      id: 'collapseThree',
      headerId: 'headingThree',
      title: 'Why is our company the best ?',
      content: 'Tested materials, fast delivery, expert support & industry-trusted tools.'
    }
  ];

  return (
    <div className="featured section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="left-image">
              <img src="/images/work4.jpg" alt="Featured product" />
              <a className='pl-8 pt-4' href="/property-details">
                <img 
                  src="/images/featured-icon.png" 
                  alt="Featured icon" 
                  style={{ maxWidth: '60px', padding: '0px' }} 
                />
              </a>
            </div>
          </div>
          
          <div className="col-lg-5">
            <div className="section-heading">
              <h6>| Featured</h6>
              <h2>Best Grinding Tools & Industrial Grade Wheels</h2>
            </div>
            
            <div className="accordion" id="accordionExample">
              {accordionItems.map((item) => (
                <div className="accordion-item" key={item.id}>
                  <h2 className="accordion-header" id={item.headerId}>
                    <button 
                      className={`accordion-button ${activeAccordion === item.id ? '' : 'collapsed'}`}
                      type="button"
                      onClick={() => toggleAccordion(item.id)}
                      aria-expanded={activeAccordion === item.id}
                      aria-controls={item.id}
                    >
                      {item.title}
                    </button>
                  </h2>
                  <div 
                    id={item.id}
                    className={`accordion-collapse collapse ${activeAccordion === item.id ? 'show' : ''}`}
                    aria-labelledby={item.headerId}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-lg-3">
            <div className="info-table">
              <ul>
                {infoItems.map((item) => (
                  <li key={item.id}>
                    <img src={item.imgSrc} alt="" style={{ maxWidth: '52px' }} />
                    <h4>
                      {item.title}
                      <br />
                      <span>{item.description}</span>
                    </h4>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;