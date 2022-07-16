
import  styled from "styled-components"
import { categorias } from "../data"
import CategoriaItem from "./CategoriaItem";

const Container = styled.div`
    display: flex;
    padding:20px;
    justify-content: space-between;
`;

const Categorias = () => {
  return <Container>
    {categorias.map(item=>(
        <CategoriaItem item={item} key={item.id}></CategoriaItem>
    ))}
    </Container>
}

export default Categorias