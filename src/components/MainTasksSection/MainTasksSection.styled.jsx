import { motion } from "framer-motion";
import { styled } from "styled-components";



export const Section = styled(motion.section)`
min-height: 268px;
margin-bottom: 60px;
@media screen and (min-width:768px){
    margin-bottom: 120px;
}
`
export const DivInfo = styled.div`
display:flex;
align-items: center;
justify-content: space-around;
@media screen and (min-width:1150px){


}
`

export const DivText = styled(motion.div)`
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: 36px;
@media screen and (min-width:1150px){
display:flex;

justify-content: space-between;
}


`


export const POne = styled(motion.p)`
max-width: 420px;
@media screen and (min-width:1150px){
max-width: 279px;
}
`
export const PTwo =  styled(motion.p)`
max-width: 420px;
`