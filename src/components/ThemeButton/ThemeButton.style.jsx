import styled from 'styled-components'


export const Button = styled.button`
cursor:pointer;
height: 33px;
border-radius: 3px;
display: flex;
align-items: center;
background-color:inherit;
color: ${({ theme }) => theme.ButtonColorTheme};
border: 0px;
&:hover{
   color: ${({ theme }) => theme.moon}; 
}`