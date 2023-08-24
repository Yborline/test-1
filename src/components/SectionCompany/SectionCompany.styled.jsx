import styled from 'styled-components'


export const Section = styled.section`
display:flex;
height:450px;
justify-content: space-between;
padding: 30px 70px 30px 100px;
box-sizing: border-box;
background-color: ${({ theme }) => theme.backgroundColorTwo};
margin-bottom: 150px;`

export const DivImage = styled.div`
position:relative;

`

export const DivInfo = styled.div`
width: 400px;

`

export const Img1 = styled.img`
position:absolute;
left: 0px;
`
export const Img2 = styled.img`
position:absolute;
left: 300px;
`
export const Img3 = styled.img`
position:absolute;
top: 300px;
`
