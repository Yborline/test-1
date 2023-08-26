import { useWindowWidth } from "@react-hook/window-size";
import BigNumber from "../BigNumber/BigNumber";
import Title from "../Title/Title";
import {
  DivInfo,
  DivText,
  Section,
  POne,
  PTwo,
} from "./MainTasksSection.styled";
import {
  downAnimation,
  rightAnimation,
} from "../../animation/animation.styled";

const MainTasksSection = () => {
  const width = useWindowWidth();
  return (
    <Section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <Title
        custom={1}
        variants={downAnimation}
        marginbottom={width > 768 ? "60px" : "30px"}
        text={"Основные задачи"}
      />
      <DivText>
        <DivInfo>
          <BigNumber
            custom={2}
            variants={rightAnimation}
            number={1}
          ></BigNumber>
          <POne custom={3} variants={downAnimation}>
            Создание комфортных условий и повышение качества обслуживания
            клиентов
          </POne>
        </DivInfo>
        <DivInfo>
          <BigNumber
            custom={2}
            variants={rightAnimation}
            number={2}
          ></BigNumber>
          <PTwo custom={3} variants={downAnimation}>
            Постоянно совершенствовать качество предоставляемых услуг путем
            обучения персонала, закупки нового оборудования и усиленной рекламы
            на рынке
          </PTwo>
        </DivInfo>
      </DivText>
    </Section>
  );
};

export default MainTasksSection;
