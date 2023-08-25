import { DivNavBar } from "./Navbar.stlyed";
import NavbarDesktop from "./NavbarDesktop/NavbarDesktop";
import NavbarMobile from "./NavbarMobile/NavbarMobile";
import { useWindowSize } from "@react-hook/window-size";

const Navbar = () => {
  const [width] = useWindowSize();
  return (
    <DivNavBar>{width > 768 ? <NavbarDesktop /> : <NavbarMobile />}</DivNavBar>
  );
};

export default Navbar;
