import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height : 60px;
`
const Wrapper = styled.div`
    display: flex;
    padding: 10px 20px;
    align-items: center;
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

`

const Right = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;

`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    display: flex;
    border: 0.5px solid grey;
    font-size: 14px;
    align-items: center;
    padding: 5px;
    border-radius: 3px;
    margin-left: 5px;
    
`
const Input = styled.input`
    border: none;
`
const MenuItem = styled.div`
    margin-right: 25px;
    display: flex;
    font-size: 16px;
    cursor: pointer;
`
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
        <Left>
             <Language>EN</Language> 
             <SearchContainer>
                <Input/>
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