import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import burger from '../../assets/img/burger.webp';
import enchiladas from '../../assets/img/enchilada.webp';
import steak from '../../assets/img/steak.webp';
import './Banner.css'

const Banner = () => {
    return (
      <Container>
        <Carousel className="my-5">
          <Carousel.Item interval={3000}>
            <div className="row d-flex align-items-center pb-5">
              <div className="col-md-6">
                <div className="text-center">
                  <h3 className="banner-title">New Arrival</h3>
                  <p className="banner-subtitle">
                    Burger Bowl
                  </p>
                  <p className="banner-des gray">
                    Trade fast-food for our delicious Burger Bowl featuring a
                    savory blend of ground beef and bison on a bed of creamy
                    rice with all your favorite burger toppings including juicy
                    grape tomatoes, sliced red onion and cheddar cheese.
                  </p>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <img className="w-75 img-fluid" src={burger} alt="" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div className="row d-flex align-items-center pb-5">
              <div className="col-md-6">
                <div className="text-center">
                  <h3 className="banner-title">Most Popular</h3>
                  <p className="banner-subtitle">Steak Street Tacos</p>
                  <p className="banner-des gray">
                    Who doesn't love tacos? Our healthy and balanced spin on
                    street tacos includes marinated 44 Farms beef knuckle, a
                    spanish rice pilaf that's filled with flavorful mix-ins, and
                    our house-made salsa verde.
                  </p>
                </div>
              </div>
              <div className="col-md-6 text-center ">
                <img className="w-75 img-fluid" src={steak} alt="" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div className="row d-flex align-items-center pb-5">
              <div className="col-md-6">
                <div className="text-center">
                  <h3 className="banner-title">Our Best</h3>
                  <p className="banner-subtitle">Chicken Enchiladas</p>
                  <p className="banner-des gray">
                    Soft, warm corn tortillas hug a filling of tender, juicy
                    shredded adobo chicken, fire-roasted corn, green chiles, and
                    fresh cilantro. Topped with our fresh made tomatillo salsa,
                    shredded cheese and pickled red onions - these enchiladas
                    are a flavor fiesta in every bite!
                  </p>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <img className="w-75 img-fluid" src={enchiladas} alt="" />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
};

export default Banner;