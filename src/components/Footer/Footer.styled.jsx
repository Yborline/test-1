import { NavLink } from "react-router-dom"
import { styled } from "styled-components"

export const FooterStyled = styled.footer`
font-size: 14px;
font-weight: 500;
line-height: 24px;
padding :20px 20px 20px 20px;
background-color:${({theme})=> theme.footer};
color: ${({ theme }) => theme.footerText};
display:flex;
flex-direction: column;

@media screen and (min-width: 768px){
    flex-direction: row;
padding :58px 120px 0px 120px;
display:flex;
justify-content: space-between;

}
`
export const DivImage = styled.div`
display:flex;
justify-content: center;
margin-bottom: 15px;

`


export const DivMobile = styled.div`
display:flex;
justify-content: space-around;`

export const Link = styled(NavLink)`
color: inherit;`

export const DivContacts = styled.div`
display:flex;
flex-direction:column;
width: 200px;
@media screen and (min-width: 768px){
max-width: 344px;
margin-left: 157px;
}`

export const DivSocial = styled.div`
@media screen and (min-width: 768px){
margin-right: 100px;
}`

export const H3 = styled.h3`
margin-bottom:25px;
font-size: 16px;

font-weight: 700;
line-height: normal;
`

export const H3Icons = styled(H3)`
text-align:center;
`

export const Li = styled.li`
margin-bottom: 16px;
&:last-of-type{
    margin-bottom: 0px;
}
`

export const A = styled.a`
margin-bottom: 32px; 
display:flex;
`

export const SvgFill = styled.svg`
fill: ${({ theme }) => theme.footerText};
`
export const SvgStoke = styled.svg`
stroke: ${({ theme }) => theme.footerText};`

export const Span = styled.span`
margin-right: 15px;`