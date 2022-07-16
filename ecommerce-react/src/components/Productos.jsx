import styled from 'styled-components'
import {indexminis} from "../data"
import Producto from './Producto'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-between;
`

const Productos = () => {
  return (
    <Container>
        {indexminis.map(item=>(
            <Producto item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Productos