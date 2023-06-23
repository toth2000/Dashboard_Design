import {
  Container,
  Title,
  WrapperLeft,
  WrapperRight,
  InputContainer,
  Input,
  Icon,
  Image_Component,
} from "./style";
import search_icon from "../../public/search_icon.svg";
import notification_icon from "../../public/notification_icon.svg";
import profile_img from "../../public/static/profile_image.png";

const NavBar = () => {
  return (
    <Container>
      <WrapperLeft>
        <Title>DashBoard</Title>
      </WrapperLeft>
      <WrapperRight>
        <InputContainer>
          <Input placeholder="Search..." />
          <Icon src={search_icon} height={"12px"} width={"12px"} />
        </InputContainer>
        <Icon src={notification_icon} height={"20px"} width={"18px"} />
        <Image_Component src={profile_img} />
      </WrapperRight>
    </Container>
  );
};

export default NavBar;
