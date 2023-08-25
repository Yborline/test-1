import MainButton from "../MainButton/MainButton";
import {
  Section,
  DivButton,
  DivGroup,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  DivFilter,
  TextImage,
  DivText,
  ButtonImage,
  DivScale,
  DivScaleMargin,
} from "./ImageSection.styled";
import Img1 from "../../images/images/Rectangle12.png";
import Img2 from "../../images/images/image15.png";
import Img3 from "../../images/images/image16.png";
import Img4 from "../../images/images/image17.png";
import Img5 from "../../images/images/image18.png";
import { useWindowWidth } from "@react-hook/window-size";
import sprite from "../../images/sprite/sprites.svg";

const ImageSection = () => {
  const width = useWindowWidth();
  return (
    <Section>
      <DivGroup>
        <DivFilter>
          <DivScale>
            <Image1 loading="lazy" src={Img1}></Image1>
          </DivScale>
          <DivText>
            <TextImage>ДОСУГОВЫЙ ЦЕНТР</TextImage>

            <ButtonImage>
              ПОДРОБНЕЕ
              <svg fill="white" width={17.5} height={8}>
                <use href={`${sprite}#ico-shape-right`} />
              </svg>
            </ButtonImage>
          </DivText>
        </DivFilter>
        <DivScale>
          <Image2 loading="lazy" src={Img2}></Image2>
        </DivScale>
      </DivGroup>
      <DivGroup>
        <DivScaleMargin>
          <Image3 loading="lazy" src={Img3}></Image3>
        </DivScaleMargin>
        <DivScaleMargin>
          <Image4 loading="lazy" src={Img4}></Image4>
        </DivScaleMargin>
        <DivScale>
          <Image5 loading="lazy" src={Img5}></Image5>
        </DivScale>
      </DivGroup>

      <DivButton>
        <MainButton color="black" text={"ВСЕ ПРОЕКТЫ"} />
      </DivButton>
    </Section>
  );
};

export default ImageSection;
