import React from 'react';
import './Home.css';
import Product from './Product';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function Home() {
    const slideImages = [
        'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/PostLaunch/Uber/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launchtall-hero_3000x1200_1._CB405488972_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/V/launch/3000x1200_Hero-Tall_renew._CB404767623_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/MA2020/ApparelP0/BOTM/SEP/PC/PC-Bunk-3000_ENG_I._CB405253515_.jpg'
      ];
    return (
        <div className='home'>
            <div className="home__container">
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/PostLaunch/Uber/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launchtall-hero_3000x1200_1._CB405488972_.jpg"
                    alt=""
                />
                
                
                <div className='home__row'>
                    <Product 
                        id="12321341"
                        title="The lean Startup : How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={29.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                        rating={5}
                    />
                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
                        rating={5}
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id="4903850"
                        title="Fitbit Charge 2 Heart Rate + Fitness Wristband, Special Edition, Gunmetal, Large (International Version)"
                        price={199.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                        rating={3}
                    />
                    <Product 
                        id="23445930"
                        title="Amazon Echo (3rd Generation) | Smart speaker with Alexa, Charcoal Febric"
                        price={98.99}
                        image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
                        rating={5}
                    />
                    <Product 
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg'
                        rating={3}
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={1094.98}
                        image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
                        rating={4}
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Home
