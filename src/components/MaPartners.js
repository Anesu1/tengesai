import React, { useState } from 'react';
import styled from 'styled-components';
import Heading from '../styled/Heading';
import PartnersCard from '../styled/PartnersCard';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Wrapper = styled.section`
  padding: 5%;
  background: ${(props) => props.theme.color.white};
  @media (min-width: 992px) {
    padding: 5% 10%;
  }
  h2 {
    margin-bottom: 20px;
  }
  .inner {
    display: flex;
    justify-content: space-between;
    overflow-x: scroll;
  }
  .arrow {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${(props) => props.theme.color.primary};
    &:hover {
      color: ${(props) => props.theme.color.secondary};
    }
  }
  .arrow.hidden {
    display: none;
  }
`;

function MaPartners() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleNext = () => {
    const container = document.getElementById('partners-slider');
    const scrollWidth = container.scrollWidth;
    const visibleWidth = container.clientWidth;
    const newPosition = scrollPosition + visibleWidth;
    if (newPosition < scrollWidth) {
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  const handlePrev = () => {
    const container = document.getElementById('partners-slider');
    const visibleWidth = container.clientWidth;
    const newPosition = scrollPosition - visibleWidth;
    if (newPosition >= 0) {
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  return (
    <Wrapper>
      <Heading>Our Partners</Heading>
      <div className="inner" id="partners-slider">
        {Array.from({ length: 10 }).map((_, index) => (
          <PartnersCard key={index} />
        ))}
      </div>
      <div className={`arrow ${scrollPosition === 0 ? 'hidden' : ''}`} onClick={handlePrev}>
        <ArrowBackIcon />
      </div>
      <div
        className={`arrow ${scrollPosition >= document.getElementById('partners-slider').scrollWidth - document.getElementById('partners-slider').clientWidth ? 'hidden' : ''}`}
        onClick={handleNext}
      >
        <p>next</p>
      </div>
    </Wrapper>
  );
}

export default MaPartners;
