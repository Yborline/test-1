import { H2 } from "./Title.styled";

const Title = ({ marginbottom, text }) => {
  return <H2 marginbottom={marginbottom}>{text}</H2>;
};

export default Title;
