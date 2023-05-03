import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props)=>props.type==="filled" && "none"};
    background-color : ${props=>props.type==="filled" ? "black" :"transparent"};
    color : ${(props)=>props.type=== "filled" && "white"};

`;
const TopTexts = styled.div`
     ${mobile({ display: "none" })}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;  
const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
    display: flex;
    flex: 2;
`;
const Image = styled.img`
    width: 200px;
    `;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span`
    left: 0;
`;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};

`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`;
const Hr = styled.hr`
    background-color: #eee;
    height: 1px;
    border: none;
    margin-right: 20px;
`;
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid #555;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;
const SummaryTitle = styled.h1`
    font-weight: 200;
    
`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type==="total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    border-radius: 2px;
    cursor: pointer;
`;



const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
            <Wrapper>
               <Title>YOUR BAG</Title> 
               <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2) </TopText>
                    <TopText>Your Wishlist</TopText>
                </TopTexts>
                <TopButton type="filled" >CHECKOUT</TopButton>
               </Top>
               <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://m.media-amazon.com/images/I/516u9xd1laL._UX342_.jpg" />
                            <Details>
                                <ProductName><b>Product:</b> Funky Printed Shirt for Men </ProductName>
                                <ProductId><b>Id:</b> 8932983</ProductId>
                                <ProductColor color="blue"></ProductColor>
                                <ProductSize><b>Size:</b> 39</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                               <Add/>
                               <ProductAmount>2</ProductAmount>
                               <Remove/> 
                            </ProductAmountContainer>
                            <ProductPrice>$ 20</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="https://m.media-amazon.com/images/I/516u9xd1laL._UX342_.jpg" />
                            <Details>
                                <ProductName><b>Product:</b> Funky Printed Shirt for Men </ProductName>
                                <ProductId><b>Id:</b> 8932983</ProductId>
                                <ProductColor color="blue"></ProductColor>
                                <ProductSize><b>Size:</b> 39</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                               <Add/>
                               <ProductAmount>2</ProductAmount>
                               <Remove/> 
                            </ProductAmountContainer>
                            <ProductPrice>$ 20</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$40</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$-5.90</SummaryItemPrice>
                    </SummaryItem>
                    
                    <SummaryItem  type="total">
                        <SummaryItemText> Total</SummaryItemText>
                        <SummaryItemPrice>$40</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
               </Bottom>
            </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Cart