import ButtonUp from "../../components/ButtonUp/ButtonUp";
import ImageSection from "../../components/ImageSection/ImageSection";
import MainSection from "../../components/MainSection/MainSection";
import MainTasksSection from "../../components/MainTasksSection/MainTasksSection";
import SectionCompany from "../../components/SectionCompany/SectionCompany";
import SectionContacts from "../../components/SectionContacts/SectionContacts";

const HomePage = () => {
  return (
    <>
      <MainSection />
      <SectionCompany />
      <MainTasksSection />
      <ImageSection />
      <SectionContacts />
      <ButtonUp />
    </>
  );
};

export default HomePage;
