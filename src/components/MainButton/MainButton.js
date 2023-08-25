import sprite from "../../images/sprite/sprites.svg";
import { Button, Svg } from "./MainButton.styled";

const MainButton = ({ color, text }) => {
  return (
    <Button color={color}>
      {text}
      <Svg color={color} width={17} height={8}>
        <use href={`${sprite}#ico-shape-right`} />
      </Svg>
    </Button>
  );
};

export default MainButton;
