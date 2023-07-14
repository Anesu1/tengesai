import React, {useState} from 'react';
import styled from 'styled-components';
import CartItem from '../styled/CartItem';
import {FaSave} from 'react-icons/fa';
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

const Wrapper = styled.section`


    .buttons{
      display:flex;
      width:100%;
      justify-content:space-between;
      align-items:center;
      margin-bottom:30px;
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
    form{
        display:flex;
        flex-direction:column;
        max-width:500px;
        width:90%;
        .MuiFormControl-root {
        width: 100%;
        margin:0;
        margin-bottom: 30px;
        max-width:500px;
        input,
        label {
          color: ${(props) => props.color} !important;
          font-family: ${(props) => props.theme.fam.regular} !important;
        }
        .MuiInputBase-root {

&:before {
  border-bottom: 1px solid ${(props) => props.theme.color.green1} !important;
}
}
.css-1ptx2yq-MuiInputBase-root-MuiInput-root:after,.css-8q2m5j-MuiInputBase-root-MuiInput-root:after,.css-a3l6o-MuiInputBase-root-MuiInput-root-MuiSelect-root:after{
border-bottom:${props => props.theme.color.green1};
}
[data-shrink="true"] {
color: ${(props) => props.theme.color.green1} !important;
&:after {
  border: ${(props) => props.theme.color.green1} !important;
}
}
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



function AddProduct() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
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
              
            </Button><h4>Add Product</h4>
        <FaSave />
      </div>
      <form action="">
      <TextField
              id="productname"
              variant="standard"
              name="productname"
              label="Product Name"
            />
      
          
          <TextField
            id="description"
            name="description"
            variant="standard"
            label="Description"
            multiline
            rows={3}
          />
          <TextField
              id="productname"
              variant="standard"
              name="productname"
              label="Product Name"
            />
      <TextField
              id="productname"
              variant="standard"
              name="productname"
              label="Product Name"
            />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Choose Category</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <button>Save Product</button>
      </form>
      </Box>
    </Wrapper>
  )
}

export default AddProduct
