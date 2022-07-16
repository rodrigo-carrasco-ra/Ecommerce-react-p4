import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import { useState } from 'react'
import React from 'react'
import styled from "styled-components"
import { sliderItems } from '../data'


const Container = styled.div`
    width:100%;
    height:100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    
`
const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color: grey;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;bottom:0;
    left:${props=>props.direccion==="izq"&&"10px"};
    right:${props=>props.direccion==="der"&&"10px"};
    cursor:pointer;
    opacity:0.5;
    margin: auto;
    z-index: 2;
`
const Wrapper= styled.div`
    height:100%;
    display: flex;
    transform: translateX(${props=>props.slideIndex * -100}vw);
    transition: all 0.5s;
`
const Slide =  styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`
const FotoContainer =  styled.div`
    height: 100%;
    flex:1
`
const Foto =  styled.img`
    height: 80%;
    padding: 50px; 
`
const InfoContainer =  styled.div`
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`
const Slider = () => {
    const [slideIndex,setSlideIndex]=useState()
    const alClickear = (direccion) =>{
        if(direccion==="izq"){
            setSlideIndex(slideIndex>0 ? slideIndex -1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    };
  return (
    <Container>
        <Arrow direccion="izq" onClick={()=>alClickear('izq')}>
            <ArrowLeftOutlined></ArrowLeftOutlined>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) =>(
            <Slide bg={item.bg} key={item.id}> 
                <FotoContainer>
                    <Foto src={item.img}/>
                </FotoContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc    }</Desc>
                    <Button>Entrar</Button>
                </InfoContainer>
            </Slide>
        ))};    
        </Wrapper>
          <Arrow direccion="der" onClick={() => alClickear('der')}>
            <ArrowRightOutlined></ArrowRightOutlined>
        </Arrow>
    </Container>
  )
}

export default Slider