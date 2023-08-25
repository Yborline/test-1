import { styled } from "styled-components";


export const DivSocialIcons = styled.div`
display:flex;
justify-content: space-evenly;
@media screen and (min-width: 768px){
    justify-content: space-between;
}
`

export const Svg = styled.svg`
fill: ${({theme})=>theme.footerText};
`

export const A = styled.a`
:hover{
    fill: ${({theme})=>theme.hover};
}`

