import { styled } from "styled-components";
import { motion } from "framer-motion";

export const DivFilter = styled(motion.div)`
position:relative;
min-width: 100px;
margin-bottom: 15px;
text-align: start;

@media screen and (min-width:768px){
    margin-bottom: 0px;
    margin-right: 15px;
}
@media screen and (min-width:1000px){
         margin-right: 30px;
}



`
// &:after{
//       content: ' ';
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0; left: 0;
//   background-color: rgba(0,0,0,0.6);

// }

export const TextImage = styled(motion.p)`
color: ${({ theme }) => theme.footerText};
width: 100%;
font-weight: 700;
    font-size: 40px;

line-height: 40px;
@media screen and (min-width:768px){
    font-size: 33px;

line-height: 33px;
}
@media screen and (min-width:1000px){
font-size: 50px;


line-height: 50px;
}
@media screen and (min-width:1440px){
font-size: 64px;


line-height: 64px;
}

`
export const ButtonImage = styled(motion.button)`
margin-top: 8px;
font-size: 12px;
letter-spacing: 2.4px;
text-transform: uppercase;
color: ${({theme})=>theme.footerText};
border: 0px;
display:flex;
align-items: center;
  background-color: transparent;
`


export const DivText = styled.div`
box-sizing: border-box;

  width: 100%;
  height: 100%;
  position: absolute;
  top: 0; left: 0;
  background-color: rgba(0,0,0,0.6);
  display:flex;
        padding: 20px 20px;
          transition: transform 0.25s;

&:hover{

   transform: scale(1.1);
}

    flex-direction: column;
    @media screen and (min-width:1440px){
        padding: 50px 78px;
    }
`


export const DivScaleMargin = styled(motion.div)`
  overflow: hidden;
     margin-bottom: 15px;
  @media screen and (min-width:768px){
    margin-bottom: 0px;
   margin-right: 15px;
}
@media screen and (min-width:1000px){
         margin-right: 30px;
}
  
`
export const DivScale = styled(motion.div)`
  overflow: hidden;
  
`

export const Image1 = styled(motion.img)`

width: 100%;
  transition: transform 0.25s;

&:hover{

   transform: scale(1.1);
}

`
export const Image2 = styled(motion.img)`
width: 100%;
  transition: transform 0.25s;

&:hover{

   transform: scale(1.1);
}

`
export const Image3 = styled(motion.img)`
width: 100%;

  transition: transform 0.25s;

&:hover{

   transform: scale(1.1);
}
`
export const Image4 = styled(motion.img)`
width: 100%;

  transition: transform 0.25s;

&:hover{
   transform: scale(1.1);
}
`
export const Image5 = styled(motion.img)`
width: 100%;
  transition: transform 0.25s;
&:hover{

   transform: scale(1.1);
}
`

export const Section = styled(motion.section)`
margin-bottom: 40px;
display:flex;
flex-direction: column;
@media screen and (min-width:768px){
    margin-bottom: 120px;
}
`


export const DivGroup = styled.div`
display:flex; 
flex-direction:column;
   margin-bottom: 15px; 
@media screen and (min-width:768px){
flex-direction:row;

justify-content: space-evenly;
   @media screen and (min-width:1440px){

   margin-bottom: 30px; 
}

`

export const DivButton = styled(motion.div)`
display:flex;
justify-content: flex-end;
`
