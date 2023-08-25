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

const MainTasksSection = () => {
  const width = useWindowWidth();
  return (
    <Section>
      <Title
        marginbottom={width > 768 ? "60px" : "30px"}
        text={"Основные задачи"}
      />
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
