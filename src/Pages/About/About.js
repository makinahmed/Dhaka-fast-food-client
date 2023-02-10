import React from 'react';
import AboutBanner from '../../components/AboutBanner/AboutBanner';
import Banner from '../../components/Banner/Banner';
import Chefs from '../../components/Chefs/Chefs';
import Offer from '../../components/Offer/Offer';
 

function About( ) {
    return (
      <div>
        <Banner title="About Us"  />
        <AboutBanner/>
        <Chefs/>
      </div>
    );
}

export default About;