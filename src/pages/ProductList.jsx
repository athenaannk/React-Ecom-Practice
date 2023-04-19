import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcements from "../components/Announcements"
import Products from "../components/Products"


const Container = styled.div`


`
const Title = styled.h1`
margin: 20px;

`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;


`
const Filter = styled.div`
margin: 20px;

`

const FilterText = styled.span`
font-size: 20px;
font-weight: 700px;
margin-right: 20px;

`
const Select = styled.select`
padding: 10px;
margin-right: 20px;
`

const Option = styled.option``


const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcements />
            <title>Shirts</title>
            <FilterContainer>
                <Filter><FilterText>Filter Products</FilterText>
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>

                    </Select>
                    <Select>
                    <Option disabled selected>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>1X</Option> 
                        <Option>2X</Option>
                        <Option>3X</Option>
                        <Option>4X</Option>
                    </Select>

                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option> Price (highest to lowest)</Option>
                        <Option>Price (lowest to highest)</Option>
                    </Select>
                </Filter>

            </FilterContainer>
            <Products />

        </Container>
    )
}

export default ProductList