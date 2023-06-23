import {
  Container,
  Icon,
  Text,
  TextContainer,
  Title,
  WrapperLeft,
  WrapperRight,
} from "./style";

const Heading = ({title, text, icon}) => {
  return (
    <Container>
      <WrapperLeft>
        <Title>{title}</Title>
      </WrapperLeft>
      <WrapperRight>
        <TextContainer>
          <Text>{text}</Text>
          <Icon src={icon} />
        </TextContainer>
      </WrapperRight>
    </Container>
  );
};

export default Heading;
