import MainButton from "../MainButton/MainButton";
import { Image, DivTwo, DivButton, DivGroup } from "./ImageSection.styled";
import Img1 from "../../images/images/Rectangle12.png";
import Img2 from "../../images/images/image15.png";
import Img3 from "../../images/images/image16.png";
import Img4 from "../../images/images/image17.png";
import Img5 from "../../images/images/image18.png";

const ImageSection = () => {
  return (
    <section>
      <DivGroup>
        <Image src={Img1}></Image>
        <Image src={Img2}></Image>
      </DivGroup>
      <DivGroup>
        <Image src={Img3}></Image>
        <Image src={Img4}></Image>
        <Image src={Img5}></Image>
      </DivGroup>

      <DivButton>
        <MainButton text={"ВСЕ ПРОЕКТЫ"} />
      </DivButton>
    </section>
  );
};

export default ImageSection;
