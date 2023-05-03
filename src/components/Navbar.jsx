import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"

const Container = styled.div`
    height : 60px;
    ${mobile({ height: "50px"})}
    
`
const Wrapper = styled.div`
    display: flex;
    padding: 10px 20px;
    align-items: center;
    ${mobile({ padding: "10px 0px"})}
`
const Left = styled.div`
    margin-left: 20px;
    display: flex;
    flex: 1;
    align-items: center;
`

const Center = styled.div`
    flex: 1;
    font-size: 22px;
    font-weight: 700;
    ${mobile({ fontSize: "24px"})}

`

const Right = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    ${mobile({ justifyContent: "center"})}

`
const Language = styled.span`
    ${mobile({ display: "none"})}
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    display: flex;
    border: 0.5px solid grey;
    height: 20px;
    font-size: 14px;
    align-items: center;
    padding: 5px;
    border-radius: 3px;
    margin-left: 5px;
    
`
const Input = styled.input`
    border: none;
    height: 100%;
    ${mobile({ width: "50px"})}
    &:focus { border: none;
        outline: none; }
`
const MenuItem = styled.div`
    margin-right: 25px;
    display: flex;
    font-size: 16px;
    cursor: pointer;
    ${mobile({ fontSize: "12px", marginLeft:"10px" })}
`
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
        <Left>
             <Language>EN</Language> 
             <SearchContainer>
                <Input placeholder='Search'/>
                <Search style={{color:"grey",fontSize:"18px"}}/>
             </SearchContainer>
        </Left>
        <Center>LAF1AME. </Center>
        <Right> 
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>
            <Badge badgeContent={2}>
            <ShoppingCartOutlined />
            </Badge>
            </MenuItem>
             </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar