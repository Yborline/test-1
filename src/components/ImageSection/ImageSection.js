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
import { motion } from "framer-motion";

import sprite from "../../images/sprite/sprites.svg";
import {
  leftAnimation,
  rightAnimation,
} from "../../animation/animation.styled";
const ImageSection = () => {
  return (
    <Section initial="hidden" whileInView="visible">
      <DivGroup>
        <DivFilter custom={1} variants={leftAnimation}>
          <DivScale>
            <Image1
              custom={1}
              variants={leftAnimation}
              loading="lazy"
              src={Img1}
            />
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
        <DivScale custom={2} variants={leftAnimation}>
          <Image2 loading="lazy" src={Img2} />
        </DivScale>
      </DivGroup>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <DivGroup>
          <DivScaleMargin custom={3} variants={rightAnimation}>
            <Image3 loading="lazy" src={Img3} />
          </DivScaleMargin>
          <DivScaleMargin custom={4} variants={rightAnimation}>
            <Image4 loading="lazy" src={Img4} />
          </DivScaleMargin>
          <DivScale custom={5} variants={rightAnimation}>
            <Image5 loading="lazy" src={Img5} />
          </DivScale>
        </DivGroup>

        <DivButton>
          <MainButton
            custom={5}
            variants={leftAnimation}
            color="black"
            text={"ВСЕ ПРОЕКТЫ"}
          />
        </DivButton>
      </motion.div>
    </Section>
  );
};

export default ImageSection;
