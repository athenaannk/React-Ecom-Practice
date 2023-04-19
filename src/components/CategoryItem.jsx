import styled from "styled-components";

const Container = styled.div`
flex: 1;
margin: 3;
height: 70vh;
position: relative;


`;
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

`;
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Title = styled.h1`
color: white;
margin: 20px;
font-weight: bolder;
text-shadow: -1px -1px #000,
1px -1px 0 #000,
-1px 1px 0 #000,
1px 1px 0 #000;


`
const Button = styled.button`
border: none;
padding: 10px;
background-color: white;
color: gray
cursor: pointer;
font-weight: 600px;

`

const CategoryItem = ({item}) => {
  return (
    <Container>
<Image src={item.img}/>
<Info>
    <Title>{item.title}</Title>
    <Button>SHOP NOW!</Button>
</Info>
    </Container>
  )
}

export default CategoryItem