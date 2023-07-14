import React, { useState, useRef } from 'react';
import Heading from '../styled/Heading'
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import BackupIcon from '@mui/icons-material/Backup';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, FreeMode } from 'swiper';

const Wrapper = styled.section`
background:#F8F7F5;
padding:5%;
.swiper-slide{
  display:flex;
  align-items:center;
    justify-content:center;
    flex-direction:column;
    text-align:center;
}
.mySwiper{
  margin-top:30px;
  padding-bottom:50px;
}
.swiper-button-disabled{
  opacity:0;
}
.swiper-slide a{
  display:flex;
  align-items:center;
    justify-content:center;
    flex-direction:column;
    text-align:center;
    text-decoration:none;
    color:#000000;
    svg{
      width: 50px;
    height: 50px;
    }
    p{
      margin-top:10px;
      font-size:14px;
    }
}
.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{
  background:#A5A4A2 !important;
  border-radius:10px !important;
}
  .icon-div{
    height:100px;
    width:100px;
    border-radius:50%;
    background:#ffffff;
    display:flex;
    align-items:center;
    justify-content:center;
    box-shadow:0px 2px 1px #0000004e;
  }
  .swiper-progressbar {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4px;
  background-color: #ddd;
}

.swiper-progressbar-fill {
  height: 100%;
  background-color: #333;
}

.swiper-horizontal>.swiper-pagination-progressbar, .swiper-pagination-progressbar.swiper-pagination-horizontal, .swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite, .swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{
  bottom:0;
  top:unset;
  background:#EBEAE8 !important;
  border-radius:10px;
  overflow:hidden;
  height:10px;
}
.swiper-button-next,.swiper-button-prev{
  height: 50px;
    width: 50px;
    border-radius: 50%;
    background:#ffffff;
    box-shadow:0px 2px 1px #0000004e;
    transform: translateY(-50%);
    &::after{
      font-size:28px;
      color:#333;
    }
}
`;

const list = [
  {
    link:"#",
    icons:<BackupIcon />,
  },
  {
    link:"#",
    icons:<BackupIcon />,
  },
  {
    link:"#",
    icons:<BackupIcon />,
  },
  {
    link:"#",
    icons:<BackupIcon />,
  },
  {
    link:"#",
    icons:<BackupIcon />,
  },
  {
    link:"#",
    icons:<BackupIcon />,
  },
  {
    link:"#",
    icons:<BackupIcon />,
  },
  {
    link:"#",
    icons:<BackupIcon />,
  },
  {
    link:"#",
    icons:<BackupIcon />,
  },
  {
    link:"#",
    icons:<BackupIcon />,
  },
  {
    link:"#",
    icons:<BackupIcon />,
  },
  {
    link:"#",
    icons:<BackupIcon />,
  },
  {
    link:"#",
    icons:<BackupIcon />,
  },
  {
    link:"#",
    icons:<BackupIcon />,
  },
  
  {
    link:"#",
    icons:<BackupIcon />,
  },
  {
    link:"#",
    icons:<BackupIcon />,
  },
  {
    link:"#",
    icons:<BackupIcon />,
  },
  {
    link:"#",
    icons:<BackupIcon />,
  },
  {
    link:"#",
    icons:<BackupIcon />,
  },
  
]

const Discover =() => {
  

  return (
    <Wrapper>
      <Heading>Discover our categories</Heading>
       
  
      <Swiper
        className="mySwiper"
        pagination={{
          type: 'progressbar',
          className: 'swiper-progressbar'
        }}
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        modules={[Pagination, Navigation, FreeMode]}
        breakpoints={{
          // When window width is >= 768px
          568: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 6,
          },
          992: {
            slidesPerView: 8,
          },
          // When window width is >= 1200px
          1200: {
            slidesPerView: 11,
          },
        }}
      >
        {list.map((item, i)=>{
          return <SwiperSlide key={i}>
            <a href={item.link}><div className='icon-div'>{item.icons}</div>
            <p>Video Games & Consoles</p>
            </a>
          
        </SwiperSlide>
        })}
        
       
      </Swiper>
    </Wrapper>
  );
}




export default Discover


