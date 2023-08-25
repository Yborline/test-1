import Footer from "../../components/Footer/Footer";
import ImageSection from "../../components/ImageSection/ImageSection";
import MainSection from "../../components/MainSection/MainSection";
import MainTasksSection from "../../components/MainTasksSection/MainTasksSection";
import SectionCompany from "../../components/SectionCompany/SectionCompany";
import SectionContacts from "../../components/SectionContacts/SectionContacts";
import { P } from "./HomePage.styled";

const HomePage = () => {
  return (
    <>
      <MainSection />
      <SectionCompany />
      <MainTasksSection />
      <ImageSection />
      <SectionContacts />
    </>
  );
};

export default HomePage;
