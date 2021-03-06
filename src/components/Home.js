import React from "react";
import "./home.css";
import Product from "./pages/Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="amazon_banner"
        />
        <div className="home__row">
          <Product
            id="1890689"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            price={19.55}
            rating={5}
          />
          <Product
            id="1895689"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            price={19.55}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="186780909"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            price={17.15}
            rating={4}
          />
          <Product
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={20.0}
            rating={3}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="1256689"
            title="Samsung LC49RG90SSUXEN 49'- Super Ultra Wide Dual WQHD 5120 x 1440"
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            price={105.75}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="12345689"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={2000.0}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="186780909"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            image="https://www.kindpng.com/picc/m/115-1156744_mavic-camera-drone-transparent-background-drone-png-png.png"
            price={17.15}
            rating={4}
          />
          <Product
            id="124585889"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={20.0}
            rating={3}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="12545889"
            title="Samsung LC49RG90SSUXEN 49'- Super Ultra Wide Dual WQHD 5120 x 1440"
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            price={105.75}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
