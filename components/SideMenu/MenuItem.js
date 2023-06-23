import { MenuContainer, OptionIcon, OptionText } from "./style";

const MenuItem = ({icon, text}) => {
  return (
    <MenuContainer>
      <OptionIcon src={icon} />
      <OptionText>{text}</OptionText>
    </MenuContainer>
  );
};

export default MenuItem;
