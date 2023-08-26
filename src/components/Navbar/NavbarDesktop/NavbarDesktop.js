import pathNavbar from "../objectNavbar";
import { Link, Ul, Div } from "./NavbarDesktop.styled";
import Logo from "../Logo/Logo";

const NavbarDesktop = () => {
  return (
    <Div>
      <Logo whileHover={{ scale: 1.2 }} />

      <Ul>
        {pathNavbar &&
          pathNavbar.map(({ text, path, id }, index) => (
            <li key={id}>
              <Link to={path}>{text}</Link>
            </li>
          ))}
      </Ul>
    </Div>
  );
};

export default NavbarDesktop;
