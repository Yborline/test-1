import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import sprite from "../../../images/sprite/sprites.svg";

export const Ul = styled.ul`
width: 65vw;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding-top:40px;`

export const Li = styled.li`
display:flex;
 align-items: center;
justify-content: center;
text-align:center;
height: 40px;
box-shadow: 2px 1px 7px -3px rgba(0,0,0,0.75);
position:relative;

`

export const Div = styled.div`
text-align:right;
height:48px;
display:flex;
justify-content: flex-end;
align-items: center;
`

export const Link = styled(NavLink)`
color: ${({ theme }) => theme.text};
&:hover,
&.active{

 color: red   ;

}
`
    // text-decoration: overline;
    // text-decoration: underline;