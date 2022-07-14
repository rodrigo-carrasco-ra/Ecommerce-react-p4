import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React from 'react'
import styled from "styled-components"


const Container = styled.div`
    width:100%;
    height:100vh;
    display: flex;
    position: relative;
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
`
const Wrapper= styled.div`
    height:100%
`
const Slide =  styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
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
`
const Button = styled.button`
    
`
const Slider = () => {
  return (
    <Container>
        <Arrow direccion="izq">
            <ArrowLeftOutlined></ArrowLeftOutlined>
        </Arrow>
        <Wrapper>
        <Slide> 
            <FotoContainer>
            <Foto src='https://www.hobbyconsolas.com/noticias/warhammer-40000-space-marine-2-no-planes-games-workshop-2022-994097'/>
            </FotoContainer>
            <InfoContainer>
                <Title>SPACE MARINES</Title>
                <Desc>Explora las unidades para que puedas construir tu propio ejército de Space Marines</Desc>
                <Button>Entrar</Button>
            </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direccion="der">
            <ArrowRightOutlined></ArrowRightOutlined>
        </Arrow>
    </Container>
  )
}

export default Slider