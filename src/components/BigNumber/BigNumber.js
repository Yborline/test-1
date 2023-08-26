import { NumberP } from "./BigNumber.styled";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const BigNumber = forwardRef(({ number }, ref) => {
  return <NumberP ref={ref}>{number}</NumberP>;
});

export default motion(BigNumber);
