import NavbarDesktop from "./NavbarDesktop/NavbarDesktop";
import NavbarMobile from "./NavbarMobile/NavbarMobile";
import { useWindowSize } from "@react-hook/window-size";

const Navbar = () => {
  const [width] = useWindowSize();
  return <>{width > 768 ? <NavbarDesktop /> : <NavbarMobile />}</>;
};

export default Navbar;
