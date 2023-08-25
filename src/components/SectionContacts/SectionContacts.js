import FormContacts from "../FormContacts/FormContacts";
import img1 from "../../images/images/image12.png";
import { Div, Section, P, Image, DivDesktop } from "./SectionContacts.styled";
import MainButton from "../MainButton/MainButton";
import Title from "../Title/Title";
import { useWindowWidth } from "@react-hook/window-size";
const SectionContacts = () => {
  const width = useWindowWidth();
  return (
    <Section>
      <Title text="Связаться с нами" />
      <Div>
        <FormContacts />
        {width < 768 && (
          <>
            {" "}
            <P>
              Отправляя заявку Вы соглашаетесь с политикой конфиденциальности
            </P>
            <MainButton color="black" text="ОТПРАВИТЬ" />
          </>
        )}
        <Image loading="lazy" alt="man call" src={img1}></Image>
      </Div>
      {width > 768 && (
        <DivDesktop>
          <P>Отправляя заявку Вы соглашаетесь с политикой конфиденциальности</P>
          <MainButton color="black" text="ОТПРАВИТЬ" />
        </DivDesktop>
      )}
    </Section>
  );
};

export default SectionContacts;
