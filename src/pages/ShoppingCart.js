import React, {useState} from 'react';
import styled from 'styled-components';
import CartItem from '../styled/CartItem';
import {AiFillDelete} from 'react-icons/ai';
import { Button} from '@mui/material';
import image1 from '../images/apple.jpeg';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect } from 'react';

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
`

const items  = [
    {
      itemName:'iPhone 12',
      imageUrl:image1,
      amount:'180.00',
      quantity:'1'
    },
    {
      itemName:'iPhone 12',
      imageUrl:image1,
      amount:'280.00',
      quantity:'1'
    },
]

function ShoppingCart() {
  const [list, setList] = useState([]);
  useEffect(()=>{
    setList(items)
  },[])
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
              
            </Button><h4>Shopping Cart</h4>
        <AiFillDelete />
      </div>
      <div className="items">
        {list.length !== 0 ? <>
        {list.map((item, i) =>{
            return <CartItem key={i} itemName={item.itemName} quantity={item.quantity} imageUrl={item.imageUrl} amount={item.amount} />
        })}
        </> : <>
          <h4>No Items In your Cart</h4>
        </>}
        
      </div>
      <div className="bottom">
         <div className="total-amount">
        <div className="span">Total</div>
        <div className="span">
            $<span>180.00</span>
        </div>
      </div>
      <button>Check Out</button>
      </div>
     
      </Box>
    </Wrapper>
  )
}

export default ShoppingCart
