import styled from "styled-components"

const Container = styled.div`
height: 30px;
background-color teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 18px;
font-weight: bolder
`

const Announcements = () => {
  return (
    <Container>Free Shipping on Orders Over $50!</Container>
  )
}

export default Announcements