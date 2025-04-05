import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import Awards from './Award';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Eductaion';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        </>
     );
}

export default HomePage;