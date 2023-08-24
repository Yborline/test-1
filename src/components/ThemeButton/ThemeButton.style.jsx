import styled from 'styled-components'


export const Button = styled.button`
height: 33px;
border-radius: 5px;
display: flex;
align-items: center;
background-color:${({ theme }) => theme.black};
color: ${({color})=> color === "light"? "white" : "black" }`