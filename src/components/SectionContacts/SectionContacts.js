import FormContacts from "../FormContacts/FormContacts";
import img1 from "../../images/images/image12.png";
import { Section } from "./SectionContacts.styled";
const SectionContacts = () => {
  return (
    <Section>
      <FormContacts />
      <img alt="man call" src={img1}></img>
    </Section>
  );
};

export default SectionContacts;
