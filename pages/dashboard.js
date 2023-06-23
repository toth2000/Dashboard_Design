import SideMenu from "../components/SideMenu";
import {
  ActivityContainer,
  CardContainer,
  Container,
  SummaryCardContainer,
  WrapperLeft,
  WrapperRight,
} from "../styles/dashboard";

import { menu, summary } from "../constant/dashboard";
import NavBar from "../components/NavBar";
import SummaryCard from "../components/SummaryCard";
import Graph from "../components/Graph";
import TopProduct from "../components/Card/TopProducts";
import TopSchedule from "../components/Card/TodaysSchedule";

const DashBoard = () => {
  return (
    <Container>
      <WrapperLeft>
        <SideMenu menu={menu} />
      </WrapperLeft>
      <WrapperRight>
        <NavBar />
        <SummaryCardContainer>
          {summary.map((item) => (
            <SummaryCard
              key={item.id}
              title={item.Title}
              value={item.Value}
              icon={item.icon}
              background={item.background}
            />
          ))}
        </SummaryCardContainer>
        <ActivityContainer>
          <Graph />
        </ActivityContainer>
        <CardContainer>
            <TopProduct />
            <TopSchedule />
        </CardContainer>
      </WrapperRight>
    </Container>
  );
};

export default DashBoard;
