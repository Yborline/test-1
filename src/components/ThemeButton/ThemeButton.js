import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { useContext } from "react";
import ctx from "../../context/themeContext";
import { Button } from "./ThemeButton.style";

const ThemeButton = ({ handleClick }) => {
  const { themes } = useContext(ctx);
  return (
    <Button color={themes} onClick={handleClick}>
      {themes === "light" ? <NightsStayIcon /> : <WbSunnyIcon />}
    </Button>
  );
};

export default ThemeButton;
