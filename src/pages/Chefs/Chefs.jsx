import React from 'react';
import ChefCard from '../ChefCard/ChefCard';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './Chefs.css'
import Contact from '../Contact/Contact';
import Testimonial from '../Testimonial/Testimonial';

const Chefs = () => {
    const chefs = useLoaderData();
    return (
      <Container>
        <Banner></Banner>
        <div className='py-5 chef-section'>
          <h1 className='section-header text-center pb-5'>Famous Chefs</h1>
          <div className="row"> 
            {chefs[0].chefs.map((chef) => (
              <ChefCard chef={chef} key={chef.id}></ChefCard>
            ))}
          </div>
        </div>
        <Testimonial></Testimonial>
        <Contact></Contact>
      </Container>
    );
};

export default Chefs;