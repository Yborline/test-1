import { styled } from "styled-components";


export const Form = styled.form`
width: 391px;
margin-right: 30px;
`

export const Li = styled.li`
`

export const Input = styled.input`
box-sizing: border-box;
border: 0px;
background-color: ${({ theme }) => theme.backgroundForm};
width: 100%;
height:46px;
padding: 14px 21px 14px 21px;
margin-bottom: 10px;

`
export const InputMessage = styled.textarea`
box-sizing: border-box;
border: 0px;
background-color: ${({ theme }) => theme.backgroundForm};
width: 100%;
height:46px;
padding: 14px 21px 14px 21px;
height: 147px;
margin-bottom: 0px;
`

export const Label = styled.label`
    position: relative;
    overflow: hidden;
    input{
        &:invalid + div{
                display: inline;
            }
        }
            textarea{
        &:invalid + div{
                display: inline;
            }
        }
    }
`

export const DivPlaceHolder = styled.div`
    z-index: 100;    
height: 100%;
    cursor: text;   
    position: absolute;
    top: 1px;
    left: 21px;
    width: 98%;    
    display: none;
    color: gray;

    span{
            color: red;
    }
`


export const DivPlaceHolderArea = styled(DivPlaceHolder)`
 top: 14px;
 height:60%;
`