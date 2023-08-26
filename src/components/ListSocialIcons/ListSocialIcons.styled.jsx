import { motion } from "framer-motion";
import { styled } from "styled-components";


export const DivSocialIcons = styled(motion.div)`
display:flex;
justify-content: space-evenly;
@media screen and (min-width: 768px){
    justify-content: space-between;
}
`

export const Svg = styled(motion.svg)`
fill: ${({theme})=>theme.footerText};
`

export const A = styled(motion.a)`
:hover{
    fill: ${({theme})=>theme.hover};
}`

