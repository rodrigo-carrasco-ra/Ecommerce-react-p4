import { Facebook, Instagram, Twitter } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`
const Izquierda = styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
`
const Desc = styled.p`
    margin: 20px 0px 
`
const Social = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color:white;
    background-color: #${props=>props.color };
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Centro = styled.div`
    flex:1;
    padding: 20px;
`
const Title = styled.h3`
`

const Derecha = styled.div`
    flex:1;
    padding:20px;
` 


const Footer = () => {
  return (
    <Container>
        <Izquierda>
            <Logo>Ocio Wargames</Logo>
            <Desc>Tienda especializada en Warhammer 40.000</Desc>
        </Izquierda>
        <Social>
            <SocialIcon color="3B5999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter/>
            </SocialIcon>
        </Social>
        <Centro>

        </Centro>
        <Derecha>

        </Derecha>
    </Container>
  )
}

export default Footer