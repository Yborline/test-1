import { NavLink } from "react-router-dom";
import imgLogo from "../../images/images/Logo.png";
import {
  FooterStyled,
  Link,
  DivContacts,
  H3,
  Li,
  SvgFill,
  SvgStoke,
  Span,
  A,
  DivSocial,
  DivMobile,
  H3Icons,
  DivImage,
  Image,
} from "./Footer.styled";
import pathNavbar from "../Navbar/objectNavbar";
import ListSocialIcons from "../ListSocialIcons/ListSocialIcons";
import sprite from "../../images/sprite/sprites.svg";
import { scaleAnimation } from "../../animation/animation.styled";

const Footer = () => {
  return (
    <FooterStyled>
      <DivImage whileHover={{ scale: 1.2 }}>
        <NavLink to={"/"}>
          <Image
            loading="lazy"
            width={145}
            height={94}
            alt="logo"
            src={imgLogo}
          />
        </NavLink>
      </DivImage>

      <DivMobile>
        <div>
          <H3>Информация</H3>
          <ul>
            {pathNavbar.map(({ path, text, id }) => (
              <Li key={id}>
                <Link to={path}>{text}</Link>
              </Li>
            ))}
          </ul>
        </div>
        <DivContacts>
          <H3>Контакты</H3>
          <A
            whileHover={{ scale: 1.2 }}
            href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%A2%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%B8%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F+10,+%D0%9A%D0%B0%D1%80%D0%B0%D0%B3%D0%B0%D0%BD%D0%B4%D0%B0+100000,+%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD/@49.823954,73.0856023,17z/data=!3m1!4b1!4m5!3m4!1s0x424346c3b32ffcaf:0x41481e634d919f9e!8m2!3d49.823954!4d73.0856023?entry=ttu"
          >
            <Span>
              <SvgStoke width={12} height={16}>
                <use href={`${sprite}#map`} />
              </SvgStoke>
            </Span>{" "}
            <p style={{ width: "314px" }}>
              100000, Республика Казахстан, г. Караганда, ул. Телевизионная 10
            </p>
          </A>
          <A whileHover={{ scale: 1.2 }} href="tel:+380000000000">
            <Span>
              <SvgFill width={17} height={16}>
                <use href={`${sprite}#tell`} />
              </SvgFill>
            </Span>
            +38 (000) 000 00 00
          </A>
          <A whileHover={{ scale: 1.2 }} href="mailto:mail@gmail.com">
            <Span>
              <SvgStoke width={16} height={11}>
                <use href={`${sprite}#message`} />
              </SvgStoke>
            </Span>
            mail@gmail.com
          </A>
        </DivContacts>
      </DivMobile>
      <DivSocial>
        <H3Icons>Социальные сети</H3Icons>
        <ListSocialIcons />
      </DivSocial>
    </FooterStyled>
  );
};

export default Footer;
