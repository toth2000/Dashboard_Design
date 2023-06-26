import { useSession } from "next-auth/react";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";

import {
  Container,
  InfoContainer,
  InfoItem,
  OptionWrapper,
  Title,
  TitleContainer,
  Icon,
} from "./style";
import { useRouter } from "next/router";

import menu_icon from "../../public/menu_icon.svg";
import { useState } from "react";

const SideMenu = ({ menu }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleLogOut = () => {
    if (session) {
      signOut({ callbackUrl: `${window.location.origin}/` });
    } else router.push("/");
  };

  const handleMenuToggle = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <Container>
      <TitleContainer>
        <Title>Board.</Title>
        <Icon
          width={"20px"}
          height={"20px"}
          src={menu_icon}
          onClick={handleMenuToggle}
        />
      </TitleContainer>
      <OptionWrapper toggle={isMenuActive}>
        {menu.map((item) => (
          <MenuItem key={item.id} text={item.text} icon={item.icon} />
        ))}
      </OptionWrapper>
      <InfoContainer toggle={isMenuActive}>
        <InfoItem onClick={handleLogOut}>Logout</InfoItem>
        <InfoItem>Help</InfoItem>
        <InfoItem>Contact Us</InfoItem>
      </InfoContainer>
    </Container>
  );
};

export default SideMenu;
