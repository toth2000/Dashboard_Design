import { useSession } from "next-auth/react";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";

import {
  Container,
  InfoContainer,
  InfoItem,
  OptionWrapper,
  Title,
} from "./style";
import { useRouter } from "next/router";

const SideMenu = ({ menu }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogOut = () => {
    if (session) {
      signOut({ callbackUrl: `${window.location.origin}/` });
    } else router.push("/");
  };

  return (
    <Container>
      <Title>Board.</Title>
      <OptionWrapper>
        {menu.map((item) => (
          <MenuItem key={item.id} text={item.text} icon={item.icon} />
        ))}
      </OptionWrapper>
      <InfoContainer>
        <InfoItem onClick={handleLogOut}>Logout</InfoItem>
        <InfoItem>Help</InfoItem>
        <InfoItem>Contact Us</InfoItem>
      </InfoContainer>
    </Container>
  );
};

export default SideMenu;
