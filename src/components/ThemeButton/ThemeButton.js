import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { useContext } from "react";
import ctx from "../../context/themeContext";
import { Button } from "./ThemeButton.style";

const ThemeButton = ({ handleClick }) => {
  const { themes, toggleTheme } = useContext(ctx);
  const text = themes === "light" ? NightsStayIcon : WbSunnyIcon;
  return (
    <Button color={themes} onClick={handleClick}>
      {themes === "light" ? <WbSunnyIcon /> : <NightsStayIcon />}
    </Button>
  );
};

export default ThemeButton;
