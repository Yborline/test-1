import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import sprite from "../../../images/sprite/sprites.svg";

export const Ul = styled.ul`
width: 65vw;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding-top:40px;
background-color: ${({theme})=>theme.background };`

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
padding: 0px 20px 0px 20px;
background-color: ${({theme})=>theme.background };
text-align:right;
height:50px;
display:flex;
justify-content: space-between;
align-items: center;

`

export const Link = styled(NavLink)`
color: ${({ theme }) => theme.text};
&:hover,
&.active{
border-top:    1px solid ${({ theme }) => theme.text};
border-bottom:    1px solid ${({ theme }) => theme.text};
}  
`
export const Button = styled.button`
border: 0px;
background-color:inherit;
color:${({ theme }) => theme.ButtonColorTheme};
`