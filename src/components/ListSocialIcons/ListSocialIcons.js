import sprite from "../../images/sprite/sprites.svg";
import { Svg, A, DivSocialIcons } from "./ListSocialIcons.styled";

const ListSocialIcons = () => {
  return (
    <DivSocialIcons>
      <A whileHover={{ scale: 1.3 }} href="https://www.facebook.com/">
        <Svg width={10} height={19}>
          <use href={`${sprite}#facebook`} />
        </Svg>
      </A>
      <A whileHover={{ scale: 1.3 }} href="https://twitter.com/">
        <Svg width={22} height={17}>
          <use href={`${sprite}#twitter`} />
        </Svg>
      </A>
      <A whileHover={{ scale: 1.3 }} href="https://www.linkedin.com/">
        <Svg width={20} height={20}>
          <use href={`${sprite}#LinkedIn`} />
        </Svg>
      </A>
      <A whileHover={{ scale: 1.3 }} href="https://ru.pinterest.com/">
        <Svg width={14} height={19}>
          <use href={`${sprite}#pininterest`} />
        </Svg>
      </A>
    </DivSocialIcons>
  );
};

export default ListSocialIcons;
