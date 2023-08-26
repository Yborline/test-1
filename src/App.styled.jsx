import styled from "styled-components";

export const Container = styled.div`
background-color: ${({theme})=> theme.background};
padding:60px 20px 0px 20px;
    box-sizing: border-box;
color : ${({ theme }) => theme.text};
@media screen and (min-width: 768px){
    padding:0px 135px 0px 135px;
}
`