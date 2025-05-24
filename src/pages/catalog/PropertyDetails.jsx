import React, { useEffect } from 'react';
import './catalog.css'
import Preloader from '../../components/Preloader';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SideCol from '../../components/SideCol';
import MakeTheCircles from '../../components/MakeTheCircles';
import axios from 'axios';
const AbrasiveCatalog = ({url}) => {

  const fetchData = async () => {
    console.log(url)
    try {
      const response = await axios.get(`${url}/products`);
      console.log(response.data); 
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchData();
  })
  return (
    <div>
      <Header />
      <MakeTheCircles/>
      <div class="container1">
        <div class="header1">
          <div class="logo1">
            Trinox<sup>®</sup>
          </div>
          <div class="title1">
            RED & GREEN CUT OFF WHEEL
          </div>
        </div>

        <div class="content1">
          <div class="image-container">
            <img src="/images/grinding_wheel (1).png" alt="Red and Green Cut Off Wheels" />
          </div>

          <div class="info-section1">
            <div class="table-container1 table-responsive">
              <table>
                <thead>
                  <tr>
                    <th><small>Size</small></th>
                    <th><small>Diameter</small></th>
                    <th><small>Thickness</small></th>
                    <th><small>Arbor Hole &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</small></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>4 "</td>
                    <td>107</td>
                    <td>1</td>
                    <td>16</td>
                  </tr>
                  <tr>
                    <td>5 "</td>
                    <td>125</td>
                    <td>1.5</td>
                    <td>22.23</td>
                  </tr>
                  <tr>
                    <td>7 "</td>
                    <td>180</td>
                    <td>1.8</td>
                    <td>22.23</td>
                  </tr>
                  <tr>
                    <td>14 "</td>
                    <td>355</td>
                    <td>2.8</td>
                    <td>25.4</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="features1">
              <h3>Features</h3>
              <ul>
                <li>Specially designed for stainless steel cutting</li>
                <li>Fast and smooth cutting</li>
                <li>Very long life</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <SideCol />
    </div>
  );
};

export default AbrasiveCatalog;