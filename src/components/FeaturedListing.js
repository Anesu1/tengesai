import React from 'react';
import styled from 'styled-components';
import FeaturedCard from '../styled/FeaturedCard';
import Heading from '../styled/Heading';

const Wrapper = styled.section`
    padding:5%;
    h2{
        margin-bottom:20px;
    }
    .inner{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
    }
`

function FeaturedListing() {
  return (
    <Wrapper>
        <Heading>Featured listings</Heading>
        <div className="inner">
            <FeaturedCard description="lorem ipsum dolor" />
            <FeaturedCard description="lorem ipsum dolor"/>
            <FeaturedCard description="lorem ipsum dolor" />
            <FeaturedCard description="lorem ipsum dolor"/>
            <FeaturedCard description="lorem ipsum dolor" />
            <FeaturedCard description="lorem ipsum dolor"/>
        </div>
    </Wrapper>
  )
}

export default FeaturedListing