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

        <div className="home__row">
          <Product 
            id="12321341" 
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" 
            price={29.99} 
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' rating={5} 
          />
          <Product 
            id="49538094" 
            title="Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 40 Hours Of Listening Time - Black (Latest Model)"
            price={179.00}
            rating={4} 
            image="https://m.media-amazon.com/images/I/51QxA-98Q+L._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product 
            id="4903850" 
            title="All-new Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal" 
            price={49.99} 
            rating={4} 
            image="https://images-na.ssl-images-amazon.com/images/I/714Rq4k05UL._AC_UL320_SR320,320_.jpg" 
          />
          <Product 
            id="23445930" 
            title="SAMSUNG 65-inch Class QLED Q70T Series - 4K UHD Dual LED Quantum HDR Smart TV with Alexa Built-in (QN65Q70TAFXZA, 2020 Model)" 
            price={1097.99} 
            rating={4} 
            image="https://m.media-amazon.com/images/I/51d1lfcMIaL._AC_UL320_.jpg" 
          />
          <Product 
            id="3254354345" 
            title="Louis Vuitton Run Away Sneaker LV" 
            price={890.00} 
            rating={5} 
            image="https://m.media-amazon.com/images/I/61AxBVHyxWL._AC_UL320_.jpg" 
          />
        </div>
        <div className="home__row">
          <Product 
            id="32543725" 
            title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model"
            price={1399.99} 
            rating={5} 
            image="https://m.media-amazon.com/images/I/81r8JazRcoL._AC_UY218_.jpg" 
          />
        </div>
      </div>
    </div>
  )
}

export default Home
