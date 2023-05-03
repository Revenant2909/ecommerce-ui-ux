import styled from 'styled-components'
import {mobile} from "../responsive"


const Container = styled.div`
    flex: 1;
    margin: 10px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "20vh" })}
    
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;


`
const Title = styled.h1`
    color: aliceblue;
    font-weight: 500;
    margin-bottom:20px;
    letter-spacing: 2px;

`
const Button = styled.button`
    border: none;
    border-radius: 5px;
    background-color: teal;
    color: white;
    font-weight: 600;
    font-size: 18px;
    padding: 7px 20px;
    cursor: pointer;
`
    

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem