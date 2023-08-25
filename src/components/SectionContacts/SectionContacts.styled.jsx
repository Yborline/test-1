import { styled } from "styled-components";

export const Section = styled.section`
padding-bottom:40px;
@media screen and (min-width:768px){
padding-bottom: 120px;
}
`

export const DivDesktop = styled.div`
`

export const Div = styled.div`
margin-bottom: 22px;
    display: flex;
    flex-direction:column;
@media screen and (min-width:768px){
    flex-direction:row;
justify-content: space-between;
}`

export const P = styled.p`
margin-left: 0px;
min-width: 200px;
margin-bottom: 22px;
@media screen and (min-width:768px){
    width: 331px;
   margin-left: 40px; 
}`

export const Image = styled.img`
object-fit:cover;
min-width: 220px;
margin-top: 20px;
@media screen and (min-width:768px){
    margin-top: 0px;
}

`