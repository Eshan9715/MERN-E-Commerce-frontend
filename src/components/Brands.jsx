import React from 'react'
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  ${mobile({ display: "none" })}
`;

const Title = styled.h1`
  font-size: 40px;
`
const Wrapper = styled.div`
    display: flex;
`
const Cards = styled.div`
  height: 20px;
  min-width: 100px;
  padding: 15px;
  border: 1px solid grey;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 15px;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    background-color: black;
    color: white;
  }
`
const brands = [
    {
        id:1,
        title: "Nike"
    },
    {
        id:2,
        title: "Addidas"
    },
    {
        id:3,
        title: "Puma"
    },
    {
        id:4,
        title: "Deedat"
    },
    {
        id:5,
        title: "LEVI'S"
    },
]

const Brands = () => {
  return (
    <Container>
        <Title>Our Brands</Title>
        <Wrapper>
        {brands.map((brand)=>(
            <Cards key={brand.id}>
                <h3 style={{fontSize: 18}}>{brand.title}</h3>
            </Cards>
        ))}
        </Wrapper>
       

    </Container>
  )
}

export default Brands