import styled from 'styled-components'
import { motion } from "framer-motion";

export const Section = styled(motion.section)`
box-sizing: border-box;
display:flex;
flex-direction: column;
flex-direction: column-reverse;
background-color: ${({ theme }) => theme.backgroundColorTwo};
padding: 20px 20px 20px 20px;
@media screen and (min-width: 1280px){
display:flex;
flex-direction: row;
min-height:450px;
justify-content: space-between;
padding: 30px 70px 30px 100px;

margin-bottom: 150px;
}
`

export const DivImage = styled(motion.div)`
display: flex;
flex-direction: column;
align-items: center;

@media screen and (min-width: 1000px){
    display:block;
position:relative;

}

`

export const DivInfo = styled.div`
min-width: 300px;
@media screen and (min-width: 1280px){
margin-left: 600px;

}
display: flex;
flex-direction: column;
justify-content: space-between;


`

export const Img1 = styled.img`
margin-bottom:15px;
@media screen and (min-width: 1000px){
         margin-bottom:0px; 
         margin-right: 30px
}
@media screen and (min-width: 1280px){
    margin-bottom:0px;
position:absolute;
min-width:100px;
left: 0px;
}
`
export const Img2 = styled.img`
margin-bottom:15px;
@media screen and (min-width: 1000px){
    min-width: 150px;
         margin-bottom:0px; 

}


@media screen and (min-width: 1280px){

position:absolute;
left: 300px;
min-width:100px;
}
`
export const Img3 = styled.img`
margin-bottom:15px;
@media screen and (min-width: 1000px){
         margin-bottom:0px; 
position:absolute;
top: 200px;
left: 530px;
transform: rotate(-90deg);
}
@media screen and (min-width: 1280px){
    transform: rotate(0deg);
    left: 0px;
           margin-bottom:0px;
position:absolute;
top: 300px;
min-width:100px;
}
`
export const P = styled(motion.p)`
font-size: 16px;
min-width:100px;

font-weight: 300;
line-height: 25px;`
