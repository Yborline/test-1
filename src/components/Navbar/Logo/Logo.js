import { DivSvg, Link } from "./Logo.styled";
import ThemeButton from "../../ThemeButton/ThemeButton";
import { useContext } from "react";
import ctx from "../../../context/themeContext";
import { NavLink } from "react-router-dom";
import sprite from "../../../images/sprite/sprites.svg";

const Logo = () => {
  const { themes, toggleTheme } = useContext(ctx);
  return (
    <div style={{ display: "flex" }}>
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
};

export default Logo;
