import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";
import Search from "@mui/icons-material/Search";
import InfoIcon from '@mui/icons-material/Info';


const Container = styled.div`
  width: 100%;
  height:60vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  justify-content: start;
  align-items: center;
  margin-top: 15px;
  ${mobile({ display: "block" })}
`;

const Line = styled.div`
  width: 90%;
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const Title = styled.h1`
  font-size: 30px;
  font-style: bold;
`
const Wrapper = styled.div`
    display: flex;
`

const Card = styled.div`
    min-width: 260px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-left: 15px;
    border: 1px;
    background-color: aliceblue;
    &:hover {
    transform: scale(1.1);
  }
`
const ImageContainer = styled.div`
    height: 200px;
    width: 100%;
    position: relative;
`
const Tag = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    margin: 2px;
    border: 1px;
    color: white;
    border-radius: 0px 0px 5px 0px;
    padding: 4px 6px;
    background-color: ${(props) => props.bg};
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px lightgrey;
  border-radius: 20px;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
    padding: 2px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    background-color: lightgrey;
    border: 1px;
    border-radius: 10px;
`
const NameCon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const PriceCon = styled.div`
    display:flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    `
const Button = styled.button`
    padding: 10px;
    font-size: 15px;
    background-color: transparent;
    cursor: pointer;
    border-radius: 10px;
    &:hover {
    background-color: black;
    color: white;
    transform: scale(1.1);
  }
  `;

const Clothes = ({datas, title, x }) => {
  return (
    <Container>
        <Line>
            <Title style={{margin: 10}}>{title}</Title>
            <Button>View more</Button>
        </Line>
        <Wrapper>
        {datas?.map(data=>(
          <Card>
            <ImageContainer>
                <Image src={data.img} />
                {x!==""?<>
                <Tag bg={x==="New"? "orange": "red"}>{x}</Tag>
                <Info>
                    <NameCon>{data.title}</NameCon>
                    <PriceCon>
                        <h3>Rs. {data.price}</h3>
                        <InfoIcon style={{ color: "gray", fontSize: 26, marginRight: 10 }}/>
                    </PriceCon>
                </Info>
                </>: <Info>
                    <NameCon>{data.title}</NameCon>
                    <PriceCon>
                        <h3>Rs. {data.price}</h3>
                        <InfoIcon style={{ color: "gray", fontSize: 26, marginRight: 10 }}/>

                    </PriceCon>
                </Info>}
            </ImageContainer>
          </Card>
        ))}
        </Wrapper>

       

    </Container>
  )
}

export default Clothes