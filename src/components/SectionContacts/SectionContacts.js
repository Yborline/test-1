import FormContacts from "../FormContacts/FormContacts";
import img1 from "../../images/images/image12.png";
import { Div, Section, P, Image, DivDesktop } from "./SectionContacts.styled";
import MainButton from "../MainButton/MainButton";
import Title from "../Title/Title";
import { useWindowWidth } from "@react-hook/window-size";
import {
  visibleAnimation,
  textAnimation,
  upAnimation,
} from "../../animation/animation.styled";
import { AnimatePresence } from "framer-motion";

const SectionContacts = () => {
  const width = useWindowWidth();
  return (
    <Section initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <Title custom={1} variants={textAnimation} text="Связаться с нами" />
      <Div>
        <FormContacts custom={3} variants={visibleAnimation} />
        {width < 768 && (
          <>
            {" "}
            <P>
              Отправляя заявку Вы соглашаетесь с политикой конфиденциальности
            </P>
            <MainButton color="black" text="ОТПРАВИТЬ" />
          </>
        )}
        <Image
          custom={1}
          variants={upAnimation}
          loading="lazy"
          alt="man call"
          src={img1}
        ></Image>
      </Div>
      <AnimatePresence>
        {width > 768 && (
          <DivDesktop custom={3} variants={visibleAnimation}>
            <P>
              Отправляя заявку Вы соглашаетесь с политикой конфиденциальности
            </P>
            <MainButton color="black" text="ОТПРАВИТЬ" />
          </DivDesktop>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default SectionContacts;
