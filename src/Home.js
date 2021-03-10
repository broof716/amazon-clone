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
            title='The lean startup' 
            price={29.99} 
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' rating={5} 
          />
          <Product 
            id="49538094" 
            title="RICNUS Laptop Case for Mac-Book Air 13 Inch (Touch ID) 
            2020/2019/2018 Release ( Model A1932) Leather Hard Shell Cover Compatible Newest Ma-Book Air 13 inch.(Navy Blue Leather)" 
            price={9.93} 
            rating={4} 
            image="https://m.media-amazon.com/images/I/518Y3plrrmL._AC_SY200_.jpg" 
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
          <Product />
        </div>
      </div>
    </div>
  )
}

export default Home
