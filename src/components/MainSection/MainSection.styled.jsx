import styled from 'styled-components'
import {animateMargin, animateMarginRight} from '../../animation/animation.styled'

export const Section = styled.section`
display:flex;
flex-direction: column;
margin-bottom: 40px;

@media screen and (min-width: 768px){
    flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom: 120px;
`
export const DivArrow = styled.div`
width: 150px;

display:flex;
justify-content: space-around;
margin-bottom: 20px;
@media screen and (min-width: 1280px){
    margin-bottom: 108px;
}
`

export const DivTitle = styled.div`
display:flex;
height:250px;

justify-content: center;
position:relative;
    margin-right: 0px;

    animation: ${ animateMarginRight} 2s linear;
    @media screen and (min-width: 768px){
        align-items: center;
    height:100%;
    margin-right: 30px;
    }
@media screen and (min-width: 1340px){
    margin-right: 0px;
}


`

export const DivOther = styled.div`
display:flex;
flex-direction: column;
    align-items: center;
        position:absolute;
         bottom: 10px;
@media screen and (min-width: 768px){


            bottom: -190px;
}

@media screen and (min-width: 1280px){

bottom: -320px;
}`

export const DivNumber = styled.div`
display:flex;
align-items: center;
`

export const DivImage = styled.div`
min-width: 200px;
min-height: 200px;
position:relative;
`

export const DivButton = styled.div`
position: absolute;
bottom: 2px;
`

export const PNumber = styled.p`
font-size: 24px;
line-height: 24px;
color: ${({theme}) => theme.whiteText}`

export const H1 = styled.h1`
color: ${({theme})=>theme.whiteText};
font-size: 64px;
font-weight: 200;
line-height: 64px;
display:flex;
flex-direction:column;
margin-bottom: 15px;
    font-size: 48px;
@media screen and (min-width: 1240px){
    font-size: 64px;
}
@media screen and (min-width: 1700px){
    flex-direction:row;

`

export const Span = styled.span`
color: ${({theme})=>theme.text};
font-weight: 700;
line-height: 64px;
margin-left: 20px;`


export const Image = styled.img`
width: 100%;
animation: ${ animateMargin} 1.5s linear ;
`