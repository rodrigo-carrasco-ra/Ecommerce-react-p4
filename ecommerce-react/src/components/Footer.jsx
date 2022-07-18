import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    background-color: #27393b;

`
const Izquierda = styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    padding: 20px;
    color: white;
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
    margin-bottom: 30px;
    color: white;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  color: white;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;



const Derecha = styled.div`
    flex:1;
    padding:20px;
    color: white;
` 
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Izquierda>
            <Logo>Ocio Wargames</Logo>
            <Desc>Tienda especializada en Warhammer 40.000</Desc>
              <Social>
                  <SocialIcon color="3B5999">
                      <Facebook />
                  </SocialIcon>
                  <SocialIcon color="E4405F">
                      <Instagram />
                  </SocialIcon>
                  <SocialIcon color="55ACEE">
                      <Twitter />
                  </SocialIcon>
              </Social>
        </Izquierda>

        <Centro>
              <Title>Enlaces</Title>
              <List>
                  <ListItem>Home</ListItem>
                  <ListItem>Carrito</ListItem>
                  <ListItem>Space Marines</ListItem>
                  <ListItem>Chaos</ListItem>
                  <ListItem>Xenos</ListItem>
                  <ListItem>Mi cuenta</ListItem>
                  <ListItem>Lista de deseos</ListItem>
                  <ListItem>Terminos</ListItem>
              </List>
        </Centro>
        <Derecha>
              <Title>Contactenos</Title>
              <ContactItem src="https://i.ibb.co/L5PDRkz/logo.png">
                  <Room style={{ marginRight: "10px" }} /> Santiago, Chile
              </ContactItem>
              <ContactItem>
                  <Phone style={{ marginRight: "10px" }} /> +56912345637
              </ContactItem>
              <ContactItem>
                  <MailOutline style={{ marginRight: "10px" }} /> rodrigo.carrasco40@inacapmail.cl
              </ContactItem>
              <Payment src="http://cdn.shopify.com/s/files/1/0013/9935/7503/files/webpay-logo1_faf9fd07-8683-4715-a39b-e990828e3703_large.png?v=1522242608" />
        </Derecha>
    </Container>
  )
}
export default Footer