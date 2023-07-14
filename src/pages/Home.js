import React from 'react';
import Banner from '../components/Banner';
import Discover from '../components/Discover';
import FeaturedListing from '../components/FeaturedListing';
import Header from '../components/Header';
import LatestAdded from '../components/LatestAdded';
import LatestBlog from '../components/LatestBlog';

import Footer from '../components/Footer';
import Partners from '../components/Partners';
import MaPartners from '../components/MaPartners';

function Home() {
  return (
    <>
        <Header />
        <Banner />
        <Discover />
        {/* <MaPartners /> */}
        <FeaturedListing />
        <LatestBlog />
        <LatestAdded />
        <Partners />
        <Footer />
    </>
  )
}

export default Home