import { DivSvg, Link } from "./Logo.styled";
import ThemeButton from "../../ThemeButton/ThemeButton";
import { useContext } from "react";
import ctx from "../../../context/themeContext";
import sprite from "../../../images/sprite/sprites.svg";
import { forwardRef } from "react";
import { motion } from "framer-motion";

const Logo = forwardRef(({ _ }, ref) => {
  const { toggleTheme } = useContext(ctx);
  return (
    <div ref={ref} style={{ display: "flex" }}>
      <ThemeButton handleClick={toggleTheme} />
      <Link to="/">
        <DivSvg>
          <svg style={{ color: "black" }} fill="black" width={76} height={47}>
            <use href={`${sprite}#logo`} />
          </svg>
          <p
            style={{
              fontSize: "7px",
              width: "68px",
              height: "12px",
              position: "absolute",
              bottom: "0px",
              left: "10px",
            }}
          >
            DIGITAL PROJECT
          </p>
        </DivSvg>
      </Link>
    </div>
  );
});

export default motion(Logo);
