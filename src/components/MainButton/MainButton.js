import sprite from "../../images/sprite/sprites.svg";
import { Button, Svg } from "./MainButton.styled";

const MainButton = ({ text }) => {
  return (
    <Button>
      {text}
      <Svg width={24} height={24}>
        <use href={`${sprite}#ico-shape-right`} />
      </Svg>
    </Button>
  );
};

export default MainButton;
