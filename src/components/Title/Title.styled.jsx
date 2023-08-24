import styled from 'styled-components'


export const H2 = styled.h2`
font-size: 64px;
font-style: normal;
font-weight: 300;
line-height: 64px;
color: ${({ theme }) => theme.whiteText};
margin-bottom: ${props=>props.marginbottom};
`