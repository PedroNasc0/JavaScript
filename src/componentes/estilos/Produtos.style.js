import styled from 'styled-components'

export const StyledProduto = styled.div`
   display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  transition: box-shadow .5s;
  border-radius: 5px;
  padding: 25px;
  margin:20px;

  &:hover{
    box-shadow: 0 0 30px white;
  }

  & p{
    font-size: 20px;
  }
    & img{width: 250px;}
    & img{border-radius: 35px;}
`