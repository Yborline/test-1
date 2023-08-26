import { forwardRef } from "react";
import sprite from "../../images/sprite/sprites.svg";
import { Button, Svg } from "./MainButton.styled";
import { motion } from "framer-motion";

const MainButton = forwardRef(({ color, text }, ref) => {
  return (
    <Button ref={ref} color={color}>
      {text}
      <Svg color={color} width={17} height={8}>
        <use href={`${sprite}#ico-shape-right`} />
      </Svg>
    </Button>
  );
});

export default motion(MainButton);
