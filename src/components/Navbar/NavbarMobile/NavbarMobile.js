import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Ul, Li, Div, Link } from "./NavbarMobile.styled";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useContext } from "react";
import ctx from "../../../context/themeContext";
import ThemeButton from "../../ThemeButton/ThemeButton";
import pathNavbar from "../objectNavbar";

const NavbarMobile = () => {
  const [state, setState] = useState(false);
  const { themes, toggleTheme } = useContext(ctx);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Ul>
        {pathNavbar.map(({ path, text, id }) => (
          <Li key={id}>
            <Link style={{ width: "100%" }} to={path}>
              {text}
            </Link>
          </Li>
        ))}
      </Ul>
      <Divider />
    </Box>
  );

  return (
    <Div>
      <ThemeButton handleClick={toggleTheme} />
      <Button color="secondary" onClick={toggleDrawer(true)}>
        <MenuIcon fontSize="large" />
      </Button>
      <SwipeableDrawer
        anchor={"right"}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </Div>
  );
};

export default NavbarMobile;
