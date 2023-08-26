import { forwardRef } from "react";
import { H2 } from "./Title.styled";
import { motion } from "framer-motion";

const Title = forwardRef(({ marginbottom, text }, ref) => {
  return (
    <H2 ref={ref} marginbottom={marginbottom}>
      {text}
    </H2>
  );
});

export default motion(Title);
