import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import sprite from "../../../images/sprite/sprites.svg";


export const Div = styled.div`
height:102px;
display: flex;
align-items: center;
justify-content: space-between;
padding:0px 135px 0px 135px;
`

export const Ul = styled.ul`

display: flex;
width: 770px;
justify-content: space-around;
@media screen and (min width: 1440px){
    margin-right:35px;
}


`

export const Link = styled(NavLink)`

&:hover,
&.active{
border-top:    1px solid ${({ theme }) => theme.text};
border-bottom:    1px solid ${({ theme }) => theme.text};
}  }
`

export const DivSvg = styled.div`
height:40px ;
width: 69px;
display:flex;
flex-direction:column;
position:relative;
`