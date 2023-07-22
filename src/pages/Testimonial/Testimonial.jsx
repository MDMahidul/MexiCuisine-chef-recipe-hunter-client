import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Testimonial.css';

const Testimonial = () => {
    return (
      <Container className="text-center">
        <h1 className="section-header text-center mt-5 pb-3">User Review</h1>
        <Carousel className="tesitmonial pb-5 my-4 pt-3">
          <Carousel.Item interval={3000}>
            <div className="">
              <div>
                <img
                  className="testi-img"
                  src="https://www.pngkit.com/png/full/639-6399637_henry-circle-gentleman.png"
                  alt=""
                />
              </div>
              <div>
                <h5 className="reviewer pt-3">Luis Enrique</h5>
                <p className="review">
                  MexiCuisine has become my go-to website for authentic Mexican
                  recipes! The collection of recipes is diverse and caters to
                  all levels of cooking expertise. Whether you're a beginner or
                  a seasoned cook, you'll find something delicious to try. The
                  step-by-step instructions with accompanying images make the
                  cooking process a breeze.
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div className="">
              <div>
                <img
                  className="testi-img"
                  src="https://www.pngitem.com/pimgs/m/287-2871712_women-circle-image-png-transparent-png.png"
                  alt=""
                />
              </div>
              <div>
                <h5 className="reviewer pt-3">Sofia Hayat</h5>
                <p className="review">
                  As a food enthusiast and Mexican cuisine lover, MexiCuisine is
                  a hidden gem! The website offers a delightful variety of
                  traditional and modern Mexican dishes that leave my taste buds
                  craving for more. The featured chef profiles add a personal
                  touch to the recipes and offer valuable insights. The
                  user-friendly interface and responsive design make it a joy to
                  browse the site on any device. .
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div className="">
              <div>
                <img
                  className="testi-img"
                  src="https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png"
                  alt=""
                />
              </div>
              <div>
                <h5 className="reviewer pt-3">David Milan</h5>
                <p className="review">
                  MexiCuisine is a lifesaver for me! As someone with dietary
                  restrictions, finding a recipe website that caters to my needs
                  can be challenging. However, MexiCuisine goes above and beyond
                  by providing options for various dietary preferences,
                  including gluten-free and vegetarian dishes. The website's
                  layout is intuitive, making it easy to navigate and filter
                  recipes based on my requirements. 
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div className="">
              <div>
                <img
                  className="testi-img"
                  src="https://www.pngitem.com/pimgs/m/128-1284293_marina-circle-girl-picture-in-circle-png-transparent.png"
                  alt=""
                />
              </div>
              <div>
                <h5 className="reviewer pt-3">Salena Gomez</h5>
                <p className="review">
                  MexiCuisine has transformed my cooking experience and ignited
                  my passion for Mexican cuisine. The curated selection of
                  recipes covers a wide range of dishes, from beloved classics
                  to innovative twists. The website's attention to detail, such
                  as cooking tips and ingredient substitutions, ensures that
                  even beginners can confidently prepare a scrumptious Mexican
                  meal. 
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
};

export default Testimonial;