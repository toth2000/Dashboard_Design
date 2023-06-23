import { Container, Icon, LeftWrapper, RightWrapper, Title, Value } from "./style";

const SummaryCard = ({title, value, icon, background}) => {
  return (
    <Container background={background}>
      <LeftWrapper>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </LeftWrapper>
      <RightWrapper>
        <Icon src={icon} />
      </RightWrapper>
    </Container>
  );
};

export default SummaryCard;
