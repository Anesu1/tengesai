import React, {useState} from 'react';
import styled from 'styled-components';
import CartItem from '../styled/CartItem';
import {HiShoppingCart} from 'react-icons/hi';
import { Button} from '@mui/material';
import image1 from '../images/apple.jpeg';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect } from 'react';
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'; 
import Detail from '../styled/Detail';

const Wrapper = styled.section`


    .buttons{
      display:flex;
      width:100%;
      justify-content:space-between;
      align-items:center;
      background:${props => props.theme.color.green1};
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
    h4{
      color:#ffffff;
    }
    svg{
      height:25px;
      width:25px;
      color:#ffffff;
    }
    .items{
      color:#000000;
      width:100%;
      max-width:500px;
      h4{
        color: #000;;
      }

    }
    .bottom{
      margin-top:auto;
      position:absolute;
      width:90%;
      background:#ffffff;
      bottom:0;
      max-width:500px;
      .total-amount{
        display:flex;
        justify-content:space-between;
        font-weight:900;
        font-size:20px;
        margin-bottom:20px;
      }
      button{
        width:100%;
        height:50px;
        border:none;
        border-radius:5px;
        margin-bottom:30px;
        background:${props => props.theme.color.green1};
        color:#ffffff;
        font-weight:700;
        font-size:15px;
      }
    }
    button{
        width:90%;
        height:50px;
        border:none;
        max-width:500px;
        border-radius:5px;
        margin-bottom:30px;
        background:${props => props.theme.color.green1};
        color:#ffffff;
        font-weight:700;
        font-size:15px;
        margin-top:50px;
      }
      .details{
        width:90%;
        max-width:500px;
        .description{
            display:flex;
            flex-direction:column;
            padding-bottom:10px;
            border-bottom:2px solid rgba(84, 84, 84, 0.1);
            h4{
                color:#545454;
                margin-bottom:10px;
            }
        }
      }
`

const details = [
    {
        title:'tv',
        desc:'$12.00'
    },
    {
        title:'Seller',
        desc:'tndangana'
    },
    {
        title:'In Stock',
        desc:'200'
    },
    {
        title:'Location',
        desc:'(-17.8576745, 31.8674563)'
    },
    {
        title:'Posted',
        desc:'Mon, 31 Oct, 2022'
    },
    {
        title:'Archived in',
        desc:'6 days'
    }
]



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
      <img src={image1} alt="" />
      <div className="details">
        {details.map((item, i)=>{
            return <Detail title={item.title} desc={item.desc} key={i} />
        })}
        <div className="description">
                <h4>Description</h4>
                <p>Toshiba</p>
            
        </div>
      </div>
      <button>Add To Cart</button>
      </Box>
    </Wrapper>
  )
}

export default ProductDetails
