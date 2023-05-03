import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive";


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255,255,255,0.2),
      rgba(0,0,0,0.8)
    ), url("https://i.ibb.co/Z19t4VJ/joyful-parisian-woman-beret-sunglasses-points-place-text-purple-wall.jpg" )center;
    height: 100vh;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    display: flex;
    ${mobile({ width: "75%" })}
    background-color: black;
    flex-direction: column;
    background: linear-gradient(
      rgba(255,255,255,0.5),
      rgba(255,255,255,0.25))
    `;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    z-index: 2;
    `;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;
const Input = styled.input`
    min-width: 40%;
    margin: 10px;
    padding: 10px;
    border: none;
    border-radius: 4px;
`;
const Button = styled.button`
    margin: 10px;
    margin-top: 20px;
    width: 40%;
    border: none;
    font-size: 20px;
    padding: 10px;
    background-color: #bb69bb;
    color: white;
    font-weight: 300;
    cursor: pointer;
    border-radius: 4px;
`;
const Link = styled.a`
    text-decoration: none;
    color: black;
    margin: 5px 0px;
    font-size: 12px;
    cursor: pointer;
`;
const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="email"/>
            <Input placeholder="password"/>
            <Button> LOGIN </Button>
            <Link>Forgot password?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
    </Wrapper>
</Container>
  )
}

export default Login