import React from 'react';
import Banner from '../components/Banner';
import Discover from '../components/Discover';
import FeaturedListing from '../components/FeaturedListing';
import Header from '../components/Header';
import LatestAdded from '../components/LatestAdded';
import LatestBlog from '../components/LatestBlog';
import Partners from '../components/Partners';

function Home() {
  return (
    <>
        <Header />
        <Banner />
        {/* <Discover /> */}
        <FeaturedListing />
        <LatestBlog />
        <LatestAdded />
        <Partners />
    </>
  )
}

export default Home