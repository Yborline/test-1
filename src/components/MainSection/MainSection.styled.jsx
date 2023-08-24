import styled from 'styled-components'


export const DivTitle = styled.div`
display:flex;
height:100%;
align-items: center;
`

export const H1 = styled.h1`
color: ${({theme})=>theme.whiteText};
font-size: 64px;
font-weight: 200;
line-height: 64px;
display:flex;
flex-direction:column;

`

export const Span = styled.span`
color: ${({theme})=>theme.text};
font-weight: 700;
line-height: 64px;`

export const Section = styled.section`
display:flex;
justify-content: space-between;
height: 770px;
margin-bottom: 120px;`