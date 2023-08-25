import { styled } from "styled-components";

export const Button = styled.button`
border : 1px solid ${({ theme }) => theme.bigNumber};
height: 40px;
width: 40px;
background-color: ${({ theme }) => theme.backgroundSmallButton};
color: ${({ theme }) => theme.backgroundSmallButton};
&:hover{
    background-color: ${({ theme }) => theme.hover};
}
@media screen and (min-width: 1000px){
    height: 48px;
width: 48px;
}
@media screen and (min-width: 1340px){
    height: 53px;
width: 53px;
}

`	