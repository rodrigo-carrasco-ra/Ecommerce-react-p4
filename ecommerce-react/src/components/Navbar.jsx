import { SearchRounded } from "@mui/icons-material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from "@mui/material";
import React from "react";
import styled from 'styled-components'

const Container = styled.div`
 height: 15rem;
 padding-bottom:10rem ;
 background-color: #27393b;
 border-color: 10px black;
`

const Wrapper = styled.div `
  padding: 10px 20px; 
  display: flex; 
  align-items: center; 
  justify-content:space-between;
`

const Left = styled.div `
  flex:1; 
  display:flex; 
  align-items:center
`

const SearchContainer = styled.div `
  border: 1px solid lightgray;
  display:flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input `
  border:none
`

const Center = styled.div `
  flex:1;
  text-align: center;
`
const Text= styled.h2`
  color:white;
  font-size: 1.5rem;
`
const Logo = styled.img`
`
const Right = styled.div `
  flex:1;
  display:flex;
  align-items:center;
  justify-content: flex-end;
`
const MenuItem = styled.div`
  font-size:1.5rem;
  cursor:pointer;
  margin-left:25px;
  color: white;
`


const Navbar=()=>{
  return(
    <Container>
      <Wrapper>
        <Left>
          
        <SearchContainer>
          <Input/>
          <SearchRounded style={{color:"white", fontSize:16}}/>
        </SearchContainer>
        </Left>
          
        <Center> 
          <Logo src='https://i.ibb.co/R78fRPB/logo.png'></Logo>
          <Text>Tu tienda especializada en </Text>
          <Logo src='https://wh40k.lexicanum.com/mediawiki/images/7/78/Warhammer40k-logo-2020.png' style={{height:'60px'}}></Logo>
        </Center>
        
        <Right>
          <MenuItem>Registro</MenuItem>
          <MenuItem>Ingresar</MenuItem>
          <MenuItem>
            <Badge badgeContent={0} color="primary">
            <ShoppingCartIcon/>
            </Badge>
          </MenuItem>
        </Right>
        
      </Wrapper>
    </Container>
  )
}

export default Navbar;  