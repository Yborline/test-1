import image from "../../images/images/main.png";
import ButtonArrow from "../ButtonArrow/ButtonArrow";
import {
  H1,
  Section,
  Span,
  DivTitle,
  Image,
  DivNumber,
  PNumber,
  DivOther,
  DivArrow,
  DivImage,
  DivButton,
} from "./MainSection.styled";
import sprite from "../../images/sprite/sprites.svg";
import MainButton from "../MainButton/MainButton";
import { leftAnimation } from "../../animation/animation.styled";

const MainSection = () => {
  return (
    <Section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <DivTitle custom={2} variants={leftAnimation}>
        <H1>
          PROJECT <Span>HOME</Span>
        </H1>
        <DivOther>
          <DivArrow>
            <ButtonArrow>
              <svg width={17.5} height={8}>
                <use href={`${sprite}#ico-shape-left`} />
              </svg>
            </ButtonArrow>
            <ButtonArrow>
              <svg width={17.5} height={8}>
                <use href={`${sprite}#ico-shape-right`} />
              </svg>
            </ButtonArrow>
          </DivArrow>
          <DivNumber>
            <PNumber style={{ marginRight: "25px" }}>01</PNumber>
            <svg width={43} height={35}>
              <use href={`${sprite}#line`} />
            </svg>
            <PNumber style={{ marginLeft: "25px" }}>02</PNumber>
          </DivNumber>
        </DivOther>
      </DivTitle>
      <DivImage custom={3} variants={leftAnimation}>
        <Image loading="lazy" alt="white house" src={image}></Image>
        <DivButton>
          <MainButton text={"ВЗГЛЯНУТЬ"} />
        </DivButton>
      </DivImage>
    </Section>
  );
};

export default MainSection;
