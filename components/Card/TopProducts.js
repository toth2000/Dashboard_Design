import Heading from "./Heading";
import {
  Container,
  HeaderContainer,
  Legend,
  LegendContainer,
  LegendItemContainer,
  LegendTitle,
  LegendValue,
  ProductContainer,
  WrapperContainer,
  WrapperLeft,
  WrapperRight,
} from "./style";
import { VictoryPie } from "victory";

import arrow_down from "../../public/arrow_down_icon.svg";
import GraphLegend from "./GraphLegend";
import { samplePieData } from "../../constant/dashboard";

const TopProduct = () => {
  return (
    <Container>
      <HeaderContainer>
        <Heading
          title={"Top products"}
          text={"May - June 2021"}
          icon={arrow_down}
        />
      </HeaderContainer>
      <WrapperContainer>
        <WrapperLeft>
          <VictoryPie
            colorScale={samplePieData.labels.map((item) => item.color)}
            data={samplePieData.data}
            style={{ labels: { fill: "transparent" } }}
          />
        </WrapperLeft>
        <WrapperRight>
          <ProductContainer>
            {samplePieData.labels.map((item) => (
              <GraphLegend
                title={item.title}
                color={item.color}
                value={item.value}
              />
            ))}
            <GraphLegend />
          </ProductContainer>
        </WrapperRight>
      </WrapperContainer>
    </Container>
  );
};

export default TopProduct;
