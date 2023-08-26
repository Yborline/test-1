import MainButton from "../MainButton/MainButton";
import Title from "../Title/Title";
import {
  Section,
  DivImage,
  DivInfo,
  Img1,
  Img2,
  Img3,
  P,
} from "./SectionCompany.styled";
import image1 from "../../images/images/Rectangle8.png";
import image2 from "../../images/images/Rectangle9.png";
import image3 from "../../images/images/Rectangle10.png";

import { leftAnimation } from "../../animation/animation.styled";

const SectionCompany = () => {
  return (
    <Section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <DivImage custom={2} variants={leftAnimation}>
        <Img1 loading="lazy" alt="house" src={image1}></Img1>
        <Img2 loading="lazy" alt="house" src={image2}></Img2>
        <Img3 loading="lazy" alt="house" src={image3}></Img3>
      </DivImage>
      <DivInfo>
        <Title custom={2} variants={leftAnimation} text={"О компании"} />
        <P custom={1} variants={leftAnimation}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </P>
        <MainButton custom={3} variants={leftAnimation} text="Читать" />
      </DivInfo>
    </Section>
  );
};

export default SectionCompany;
