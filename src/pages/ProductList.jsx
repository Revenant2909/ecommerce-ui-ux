import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import NewsLetter from '../components/Newsletter'
import Footer from '../components/Footer'
import Products from '../components/Products'

const Container = styled.div``;
const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
`;
const FilterText = styled.span`
   font-size: 20px;
   font-weight: 600;
   margin-right: 10px;
`;
const Select = styled.select`
    color: teal;
    padding: 10px;
    margin: 0px 5px;
    border: 0.5px solid teal;
    border-radius: 5px;
`;
const Option = styled.option`
    color: teal;
    font-size: 14px;
    padding: 10px;
`;

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected >Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Green</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                </Select>
                <Select>
                    <Option disabled selected >Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected >Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                    
                </Select>
                </Filter>
        </FilterContainer>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default ProductList