import { Container, Image_Container, Text } from "./style";

const SocialSignInButton = ({ image, text, handleClick }) => {
  return (
    <Container onClick={handleClick}>
      <Image_Container src={image} />
      <Text>{text}</Text>
    </Container>
  );
};

export default SocialSignInButton;
