
import { styled } from "styled-components";

export const NumberP = styled.pre`
margin: 0px;
padding: 0px;
  font-family: SF Pro Display;

  font-size: 200px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  color: ${({ theme }) => theme.bigNumber};
`;
