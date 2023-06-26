import { VictoryLine, VictoryChart, VictoryAxis } from "victory";
import {
  ChartContainer,
  Container,
  DateContainer,
  Icon,
  LegendColor,
  LegendContainer,
  LegengText,
  Text,
  Title,
  WrapperLeft,
  WrapperRight,
} from "./style";

import arrow_down from "../../public/arrow_down_icon.svg";
import { useEffect, useState } from "react";

const Graph = () => {

  const [width, setWidth] = useState(0); // default width, detect on server.
  const handleResize = () => setWidth(window.innerWidth);

  useEffect(()=>{
    setWidth(window.innerWidth);
  },[])

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const sampleData = [
    [
      { x: 1, y: 50 },
      { x: 2, y: 120 },
      { x: 3, y: 450 },
      { x: 4, y: 210 },
      { x: 5, y: 180 },
    ],
    [
      { x: 1, y: 23 },
      { x: 2, y: 250 },
      { x: 3, y: 136 },
      { x: 4, y: 310 },
      { x: 5, y: 480 },
    ],
  ];

  return (
    <>
      <Container>
        <WrapperLeft>
          <Title>Activities</Title>
          <DateContainer>
            <Text>May - June 2021</Text>
            <Icon src={arrow_down} />
          </DateContainer>
        </WrapperLeft>
        <WrapperRight>
          <LegendContainer>
            <LegendColor background={"#E9A0A0"} />
            <LegengText>Guest</LegengText>
          </LegendContainer>
          <LegendContainer>
            <LegendColor background={"#9BDD7C"} />
            <LegengText>User</LegengText>
          </LegendContainer>
        </WrapperRight>
      </Container>
      <ChartContainer>
        <VictoryChart
         width={width * 0.6}
          domainPadding={{ x: 25 }}
          padding={{ top: 50, bottom: 50, right: 0, left: 0 }}
        >
          <VictoryAxis
            style={{
              axis: { stroke: "transparent" },
              grid: { stroke: "#EAEAEA", strokeWidth: "1px" },
              tickLabels: {
                stroke: "#858585",
                tectDecoration: "none",
                fontSize: "14px",
                fontFamily: "Lato",
                fontWeight: 300,
              },
            }}
            dependentAxis={true}
            crossAxis={true}
            tickValues={[0, 100, 200, 300, 400, 500]}
          />
          <VictoryAxis
            style={{
              axis: { stroke: "transparent" },
              grid: { stroke: "transparent" },
              tickLabels: {
                stroke: "#858585",
                tectDecoration: "none",
                fontSize: "14px",
                fontFamily: "Open Sans",
                fontWeight: 300,
              },
            }}
            dependentAxis={false}
            tickValues={[" ", "Week 1", "Week 3", "Week 4", "  "]}
          />
          <VictoryLine
            style={{ data: { stroke: "#E9A0A0" } }}
            interpolation="natural"
            data={sampleData[0]}
          />
          <VictoryLine
            style={{ data: { stroke: "#9BDD7C" } }}
            interpolation="natural"
            data={sampleData[1]}
          />
        </VictoryChart>
      </ChartContainer>
    </>
  );
};

export default Graph;
