import React from 'react';
import styled from 'styled-components';
import {HiShoppingCart} from 'react-icons/hi';
import { Button} from '@mui/material';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';


const Wrapper = styled.section`


    .buttons{
      display:flex;
      width:100%;
      justify-content:space-between;
      align-items:center;
      svg{
        margin:5%;
        @media(min-width:768px) {
          margin:2% 3%;
        }
      }
      .css-1e6y48t-MuiButtonBase-root-MuiButton-root{
        margin-left:3%;
      }
    }
    
    svg{
      height:25px;
      width:25px;
    }
   

    
`



function ProductDetails() {
    
  return (
    <Wrapper>

<Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection:'column',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
      <div className="buttons">
      <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              
            </Button><h4>Product Details</h4>
        <HiShoppingCart />
      </div>
      <div className="user">
        <div className="img">
          
        </div>
        <h3>userName</h3>
        <p>UserWebsite</p>
      </div>
      <hr />
      <div className="div">
        <h4>General</h4>
        <ul>
          <li>
            <Link to=''>Edit Profile</Link>
          </li>
          <li>
            <Link to=''>Notifications</Link>
          </li>
          <li>
            <Link to=''>WishList</Link>
          </li>
        </ul>
      </div>
      <div className="div">
        <h4>Legal</h4>
        <ul>
          <li>
            <Link to=''>Terms of Use</Link>
          </li>
          <li>
            <Link to=''>Privacy Policy</Link>
          </li>
        </ul>
      </div>
      <div className="div">
        <h4>Personal</h4>
        <ul>
          <li>
            <Link to=''>Report a Bug</Link>
          </li>
          <li>
            <Link to=''>Logout</Link>
          </li>
        </ul>
      </div>
      </Box>
    </Wrapper>
  )
}

export default ProductDetails
