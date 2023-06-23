import { Container, Title, Text, WrapperLeft, WrapperRight } from "./style";

const ScheduleItem = ({ title, time, location, color }) => {
  return (
    <Container>
      <WrapperLeft background={color}></WrapperLeft>
      <WrapperRight>
        <Title>{title}</Title>
        <Text>{time}</Text>
        <Text>at {location}</Text>
      </WrapperRight>
    </Container>
  );
};

export default ScheduleItem;
