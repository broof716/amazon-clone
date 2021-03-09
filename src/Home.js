import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <img className="home__image" 
          src="https://images-na.ssl-images-amazon.com/images/G/01/sm/FallGuys_S01_D02/Gateway/V2/GW_Banner_1500x600_EN._CB411384274_.jpg" alt="" 
        />

        <div className="home_row">
          <Product />
        </div>
        <div className="home_row">
          {/* Product */}
          {/* Product */}
          {/* Product */}  
        </div>
        <div className="home_row">
          {/* Product */}
        </div>
      </div>
    </div>
  )
}

export default Home
