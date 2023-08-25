import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const DivSvg = styled.div`
height:40px;
width: 69px;
display:flex;
flex-direction:column;
position:relative;

`


export const Link = styled(NavLink)`
:hover{
     fill: ${({ theme }) => theme.hover};
    color: ${({ theme }) => theme.hover};
}
`