import styled from 'styled-components'

export const Button = styled.button`
border: 0px;
height: 71px;
width: 222px;
display:flex;
align-items: center;
justify-content: center;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 12px;
letter-spacing: 2.4px;
 font-family: inherit;
 background-color:${({ theme, color }) => color === "black" ? theme.BigButtonBlack : theme.BigButtonLight};
 color:${({ theme, color }) => color === "black" ? theme.BigButtonTextLight : theme.BigButtonTextBlack};
 &:hover{
    background-color:${({ theme, color }) => color === "black" ? theme.BigButtonLight : theme.BigButtonBlack};
     color:${({ theme, color }) => color === "black" ? theme.BigButtonTextBlack : theme.BigButtonTextLight};
 svg{
    fill:${({theme,color})=> color === "black" ? theme.BigButtonTextBlack: theme.BigButtonTextLight};
}
    }

`

export const Svg = styled.svg`

    margin-left:12px;
    fill:${({ theme, color }) => color === "black" ? theme.BigButtonTextLight : theme.BigButtonTextBlack};

`