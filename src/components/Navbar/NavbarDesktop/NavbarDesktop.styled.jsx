import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import sprite from "../../../images/sprite/sprites.svg";
import { motion } from 'framer-motion';


export const Div = styled(motion.div)`
background-color: ${({theme})=>theme.background };
height:102px;
display: flex;
align-items: center;
justify-content: space-between;
@media screen and (min-width: 768px){
    padding:0px 75px 0px 75px;
}
@media screen and (min-width: 1440px){
    padding:0px 135px 0px 135px;
}

color:${({theme})=> theme.text};
`

export const Ul = styled.ul`

display: flex;
width: 770px;
justify-content: space-around;
@media screen and (min-width: 1440px){
    margin-right:35px;
}


`

export const Link = styled(NavLink)`

&:hover,
&.active{
border-top:    1px solid ${({ theme }) => theme.text};
border-bottom:    1px solid ${({ theme }) => theme.text};
}  
`

