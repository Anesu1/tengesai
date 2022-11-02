import React from 'react';
import styled from 'styled-components';
import {HiShoppingCart} from 'react-icons/hi';
import { Button} from '@mui/material';
import image1 from '../images/apple.jpeg';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';


const Wrapper = styled.section`


    .buttons{
      display:flex;
      width:100%;
      justify-content:space-between;
      align-items:center;
      .MuiButtonBase-root{
        svg{
          color:#333333;
        }

      }
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
      color:transparent;
    }
   
    .user{
      display:flex;
      align-items:center;
      width:90%;
      margin:0 auto;
      max-width:500px;
      .img{
        height:80px;
        width:80px;
        border-radius:50%;
        background:url(${props => props.bgUrl});
        background-size:cover;
      }
      h3{
        font-size:16px;
        opacity:0.8;
        margin-bottom:5px;

      }
      p{
        font-size:12px;
        opacity:0.6;
      }
    }
    hr{
      border-color:#00000024;
      width:90%;
      margin:0 auto;
      margin-top:20px;
      max-width:500px;
    }
    .div{
      margin:0 auto;
      width:90%;
      max-width:500px;
      h4{
        margin-top:15px;
        font-size:14px;
        margin-bottom:20px;
      }
      ul{
        li{
          a{
            border-bottom: 1px solid #3333332e;
            display:block;
            padding:10px 0;
            font-size:12px;
            color:#333;
          }
        }
      }
    }
`



function Profile() {
    
  return (
    <Wrapper bgUrl={image1}>

<Box
        component="main"
        sx={{
          alignItems: 'flex-start',
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
              
            </Button><h4>Profile</h4>
        <HiShoppingCart />
      </div>
      <div className="user">
        <div className="img">
          
        </div>
        <div className="text">
             <h3>userName</h3>
             <p>UserWebsite</p>
        </div>
     
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

export default Profile
