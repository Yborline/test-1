import image from "../../images/images/main.png";
import { H1, Section, Span, DivTitle } from "./MainSection.styled";

const MainSection = () => {
  return (
    <Section>
      <DivTitle>
        <H1>
          PROJECT <Span>HOME</Span>
        </H1>
      </DivTitle>
      <img alt="white house" src={image}></img>
    </Section>
  );
};

export default MainSection;
