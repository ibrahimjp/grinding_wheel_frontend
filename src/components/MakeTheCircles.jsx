import React from 'react';
import './MakeTheCircles.css'; // Ensure this path is correct

const MakeTheCircles = () => {
  return (
    <div className='page'>
      <div className="header">
        <h1>Trinox</h1>
      </div>

      <div className="wheels-container">
        <div className="wheel left">
          <img src="/images/3 Fr.png" alt="Orange and black abrasive wheel" />
        </div>
        <div className="wheel center-back">
          <img src="/images/5  Single.png" alt="Grey abrasive wheel, rear center" />
        </div>
        <div className="wheel right">
          <img src="/images/Single_3.png" alt="Dark grey abrasive wheel" />
        </div>
        <div className="wheel center-front left">
          <img src="/images/1 copy Single.png" alt="Light grey abrasive wheel, front left" />
        </div>
        <div className="wheel center-front right">
          <img src="/images/Tri 1-02.png" alt="Segmented abrasive wheel, front right" />
        </div>
      </div>

      <div className="title-abrasive">
        <h2 className='abrasive' style={{ color: 'red' , fontSize: '30px', fontWeight: '800'}}>ABRASIVE PRODUCT</h2>
        <h2 className='catalog' style={{ fontSize: '30px', fontWeight: '800'}}>CATALOG</h2>
        <div className='line'></div>
      </div>
    </div>
  );
};

export default MakeTheCircles;

