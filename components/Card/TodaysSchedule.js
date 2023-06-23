import Heading from "./Heading";
import { Container, HeaderContainer, ScheduleContainer } from "./style";

import arrow_right from "../../public/arrow_right_icon.svg";
import ScheduleItem from "./ScheduleItem";
import { scheduleItem } from "../../constant/dashboard";

const TopSchedule = () => {
  return (
    <Container>
      <HeaderContainer>
        <Heading
          title={"Today’s schedule"}
          text={"See All"}
          icon={arrow_right}
        />
      </HeaderContainer>
      <ScheduleContainer>
        {scheduleItem.map((item) => (
          <ScheduleItem
            title={item.title}
            time={item.time}
            location={item.location}
            color={item.color}
          />
        ))}
      </ScheduleContainer>
    </Container>
  );
};

export default TopSchedule;
