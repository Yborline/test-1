import { NavLink } from "react-router-dom";
import pathNavbar from "../objectNavbar";
import { Link, Ul, Div, DivSvg } from "./NavbarDesktop.styled";
import sprite from "../../../images/sprite/sprites.svg";
const NavbarDesktop = () => {
  return (
    <Div>
      <NavLink to="/">
        <DivSvg>
          <svg
            style={{ color: "black" }}
            fill="black"
            width="69px"
            height="42px"
          >
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
      </NavLink>
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
