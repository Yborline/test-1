import BigNumber from "../BigNumber/BigNumber";
import Title from "../Title/Title";
import {
  DivInfo,
  DivText,
  Section,
  POne,
  PTwo,
} from "./MainTasksSection.styled";

const MainTasksSection = () => {
  return (
    <Section>
      <Title marginbottom="60px" text={"Основные задачи"} />
      <DivText>
        <DivInfo>
          <BigNumber number={1}></BigNumber>
          <POne>
            Создание комфортных условий и повышение качества обслуживания
            клиентов
          </POne>
        </DivInfo>
        <DivInfo>
          <BigNumber number={2}></BigNumber>
          <PTwo>
            Создание комфортных условий и повышение качества обслуживания
            клиентов
          </PTwo>
        </DivInfo>
      </DivText>
    </Section>
  );
};

export default MainTasksSection;
